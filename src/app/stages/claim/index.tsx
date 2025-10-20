'use client'
import {
  FC,
  useState,
  useEffect
} from 'react'
import {
  WidgetStyled,
  TextStyled,
  OptionWidgetsStyled,
  TokenCounterStyled,
  ButtonStyled
} from '../../content/styled-components'
import { ShieldIcon } from '@/components/icons'
import { TOKEN_MAX_SUPPLY, TOKEN_SYMBOL } from '@/app/configs/app-token'
import { dropAddress } from '@/app/configs'
import { useDispatch } from 'react-redux'
import {
  useAppSelector
} from '@/lib/hooks'
import taskManager from '@/app/api/claim'
import { checkIfTokenIsClaimed, defineTierData } from '@/utils'
import { pointsRequired } from '@/app/configs'
import { setTxHash } from '@/lib/slices'
import getSDK from '@/app/sdk'
import {
  defineCurrentTier
} from '@/utils'
import { JsonRpcSigner } from 'ethers'
import tiers from '@/app/configs/tiers'
import { getTokensLeftCount } from '@/utils'
import { TClaimStage, TProcessStage, TSemaphoreProof, TTier } from '@/types'
import TProps from './types'
import { 
  CurrentScoreStyled,
  InputStyled,
  SubtitleStyled,
  SmallTextStyled
} from './styled-components'
import { usePlausible } from 'next-plausible'

const defineIfButtonIsDisabled = (
  claimAddress: string | null
) => {
  if (!claimAddress) {
    return true
  }

  if (!claimAddress.startsWith('0x')) {
    return true
  }

  if (claimAddress.length !== 42) {
    return true
  }

  return false
}

const defineButton = (
  disabled: boolean,
  loading: boolean,
  setLoading: (
    loading: boolean
  ) => void,
  claimStage: TClaimStage,
  setClaimStage: (stage: TClaimStage) => void,
  setSelectedPoints: (points: number) => void,
  setTxHash: (
    txHash: string
  ) => void,
  setProofs: (
    proofs: TSemaphoreProof[]
  ) => void,
  setStage: (
    setStage: TProcessStage
  ) => void,
  address: string | null,
  signer: JsonRpcSigner,
  proofs: TSemaphoreProof[],
  currentTier: TTier | null,
  plausible: any
) => {

  switch (claimStage) {
    case 'initial': 
    case 'started': {
      return <ButtonStyled
        appearance='action'
        loading={loading}
        onClick={async () => {

          if (!address) {
            return alert(`No address provided for claim`)
          }

          try {
            const bringIDSDK = getSDK()

            const data = await bringIDSDK.requestProofs({
              drop: dropAddress as string,
              address: address as string,
              pointsRequired
            })
            console.log({
              data
            })
            const {
              proofs,
              points
            } = data
            if (!proofs) {
              return 
            }
            setProofs(proofs)
            setSelectedPoints(points)
            plausible('proofs_applied', {
              props: {
                from: 'claim_screen',
              }
            })
            setClaimStage('ready_to_claim')
          } catch (err) {
            console.log({ err })
            // @ts-ignore
            alert(err.message)
          }
          
        }}
      >
        Prove you're human
      </ButtonStyled> 
    }

    case 'ready_to_claim': {
      return <ButtonStyled
        appearance='action'
        loading={loading}
        disabled={disabled}
        onClick={async () => {
          setLoading(true)

          try {
            const isClaimed = await checkIfTokenIsClaimed(
              address as string,
              signer as JsonRpcSigner
            )

            if (isClaimed) {
              plausible('already_claimed', {
                props: {
                  from: 'claim_screen',
                }
              })
              alert(`Already claimed to ${address}`)
              setLoading(false)

              return
            }
          } catch (err) {
            console.error({ err })
          }


          try {
            plausible('claim_starting', {
              props: {
                from: 'claim_screen',
              }
            })
            const result = await taskManager.addClaim(
              proofs,
              dropAddress as string,
              address as string
            )
            const { tx_hash } = result
            plausible('go_to_claim_started_screen', {
              props: {
                from: 'claim_screen',
              }
            })

            setTxHash(tx_hash)
            setStage(`claim_started`)
          } catch (err) {
            console.log({ err })
            // @ts-ignore
            alert(err.message)
            plausible('claim_not_started', {
              props: {
                from: 'claim_screen',
              }
            })
            setStage('claim_failed')
          }
          setLoading(false)
        }}
      >
        Claim {currentTier ? `${currentTier.value} ${TOKEN_SYMBOL} (${currentTier.name} tier)` : ''}
      </ButtonStyled> 
    }
  }

  return 
}


const Claim: FC<TProps> = ({ setStage, claimAddress, setClaimAddress }) => {
  const dispatch = useDispatch()
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ claimStage, setClaimStage ] = useState<TClaimStage>('initial')
  const [ proofs, setProofs ] = useState<TSemaphoreProof[]>([])
  const [ selectedPoints, setSelectedPoints ] = useState<number>(0)

  const {
    user: {
      signer
    },
  } = useAppSelector(state => (
    {
      user: {
        signer: state.user.signer
      }
    }
  ))
  const plausible = usePlausible()
  const currentTierId = defineCurrentTier(selectedPoints)
  const currentTier = defineTierData(currentTierId)
  const [ currentSupply, setCurrentSupply ] = useState<bigint>(TOKEN_MAX_SUPPLY)

  const note = `Enter a valid wallet address where you want to receive ${TOKEN_SYMBOL} tokens`

  useEffect(() => {
    (async () => {
      const balanceLeft = await getTokensLeftCount()
      setCurrentSupply(balanceLeft)
    })()
  }, [])

  const button = defineButton(
    defineIfButtonIsDisabled(claimAddress),
    loading,
    setLoading,
    claimStage,
    setClaimStage,
    setSelectedPoints,
    (
      txHash
    ) => dispatch(setTxHash(txHash)),
    setProofs,
    (
      stage
    ) => {
      setStage(stage)
    },
    claimAddress,
    signer as JsonRpcSigner,
    proofs,
    currentTier,
    plausible
  )


  return <>
    <WidgetStyled
      title='Claim Your Bring Tokens'
      image={<ShieldIcon />}
    >
      <TextStyled>Complete verifications to unlock your airdrop</TextStyled>
      <TokenCounterStyled
        currentValue={currentSupply}
        max={TOKEN_MAX_SUPPLY}
      />

      <OptionWidgetsStyled
        activeOption={currentTierId}
      
        data={tiers.map(tier => ({
          title: tier.name,
          description: tier.description,
          subtitle: `${tier.min}+ pts.` ,
          value: `${tier.value} ${TOKEN_SYMBOL}`,
          id: tier.id
        }))}
      />

      <CurrentScoreStyled points={selectedPoints} />

    </WidgetStyled>
    {claimStage === 'ready_to_claim' && <WidgetStyled>
      <SubtitleStyled>Destination Address</SubtitleStyled>
      <InputStyled
        onChange={(value) => {
          setClaimAddress(value)
        }}
        error={defineIfButtonIsDisabled(claimAddress) ? note : undefined}
        note={defineIfButtonIsDisabled(claimAddress) ? undefined : note}
        value={claimAddress || ''}
        placeholder='0x...'
      />
    </WidgetStyled>}

    {button}
  </>
}

export default Claim