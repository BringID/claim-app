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
import { useRouter } from 'next/navigation'
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
import { TClaimStage, TSemaphoreProof, TTier } from '@/types'

import { 
  CurrentScoreStyled
} from './styled-components'

const defineButton = (
  loading: boolean,
  setLoading: (
    loading: boolean
  ) => void,
  stage: TClaimStage,
  setStage: (stage: TClaimStage) => void,
  setSelectedPoints: (points: number) => void,
  setTxHash: (
    txHash: string
  ) => void,
  setProofs: (
    proofs: TSemaphoreProof[]
  ) => void,
  navigate: (
    location: string
  ) => void,
  address: string,
  signer: JsonRpcSigner,
  proofs: TSemaphoreProof[],
  currentTier: TTier | null
) => {

  switch (stage) {
    case 'initial': 
    case 'started': {
      return <ButtonStyled
        appearance='action'
        loading={loading}
        onClick={async () => {
          const bringIDSDK = getSDK()

          const data = await bringIDSDK.requestProofs({
            drop: dropAddress,
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

          setStage('ready_to_claim')
        }}
      >
        Prove you're human
      </ButtonStyled> 
    }

    case 'ready_to_claim': {
      return <ButtonStyled
        appearance='action'
        loading={loading}
        onClick={async () => {
          setLoading(true)
          try {

            const isClaimed = await checkIfTokenIsClaimed(
              address as string,
              signer as JsonRpcSigner
            )

            if (isClaimed) {
              navigate(`/claim-finished`)
              return
            }
            
            const result = await taskManager.addClaim(
              proofs,
              dropAddress,
              address as string
            )

            const { tx_hash } = result
            
            setTxHash(tx_hash)
            navigate(`/claim-initiated`)
          } catch (err) {
            console.log({ err })
            // @ts-ignore
            alert(err.message)
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


const Claim: FC = () => {

  const router = useRouter()
    const dispatch = useDispatch()
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ stage, setStage ] = useState<TClaimStage>('initial')
    const [ proofs, setProofs ] = useState<TSemaphoreProof[]>([])
    const [ selectedPoints, setSelectedPoints ] = useState<number>(0)
  
    const {
      user: {
        address,
        signer
      },
    } = useAppSelector(state => (
      {
        user: {
          chainId: state.user.chainId,
          address: state.user.address,
          signer: state.user.signer
        }
      }
    ))
  
    const currentTierId = defineCurrentTier(selectedPoints)
    const currentTier = defineTierData(currentTierId)
    const [ currentSupply, setCurrentSupply ] = useState<bigint>(TOKEN_MAX_SUPPLY)
    useEffect(() => {
      (async () => {
        const balanceLeft = await getTokensLeftCount()
        setCurrentSupply(balanceLeft)
      })()
    }, [])
  
    const button = defineButton(
      loading,
      setLoading,
      stage,
      setStage,
      setSelectedPoints,
      (
        txHash
      ) => dispatch(setTxHash(txHash)),
      setProofs,
      (
        location
      ) => {
        router.push(location)
      },
      address as string,
      signer as JsonRpcSigner,
      proofs,
      currentTier
    )


  return <WidgetStyled
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

    {button}
  </WidgetStyled>
}