'use client'
import {
  FC,
  useEffect,
  useState
} from 'react'
import {
  Page,
  Button
} from '@/components/common'
import {
  StepsContainer,
  StepsStyled,
  TextStyled
} from '../../styled-components'
import { TClaimStage, TSemaphoreProof } from '@/types'
import {
  WidgetStyled,
  ButtonStyled,
  SuccessNoteStyled
} from './styled-components'
import { dropAddress } from '@/app/configs'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { ShieldIcon } from '@/components/icons'
import {
  useAppDispatch,
  useAppSelector
} from '@/lib/hooks'
import taskManager from '@/app/api/claim'
import { checkIfTokenIsClaimed } from '@/utils'
import { pointsRequired } from '@/app/configs'
import { setTxHash } from '@/lib/slices'
import getSDK from '@/app/sdk'
import { JsonRpcSigner } from 'ethers'

const defineButton = (
  loading: boolean,
  setLoading: (
    loading: boolean
  ) => void,
  stage: TClaimStage,
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
  proofs: TSemaphoreProof[]

) => {

  switch (stage) {
    case 'initial': 
    case 'started': {
      return <ButtonStyled
        appearance='action'
        loading={loading}
        onClick={async () => {
          const bringIDSDK = getSDK()

          setLoading(true)
  
          const proofs = await bringIDSDK.requestProofs({
            drop: dropAddress,
            address: address as string,
            pointsRequired
          })
          if (!proofs) {
            setLoading(false)
            return alert('NO PROOFS')
          }
          setProofs(proofs)
          setLoading(false)


          // setStage('ready_to_claim')
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
              navigate(`/get-started/claim-finished`)
              return
            }
            
            const result = await taskManager.addClaim(
              proofs,
              dropAddress,
              address as string
            )

            const { tx_hash } = result
            alert(JSON.stringify(result))
            
            setTxHash(tx_hash)
            navigate(`/get-started/claim-initiated`)
          } catch (err) {
            console.log({ err })
            // @ts-ignore
            alert(err.message)
          }
          setLoading(false)
        }}
      >
        Claim Verified Human NFT
      </ButtonStyled> 
    }
  }

  return 
}

const Content: FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ stage, setStage ] = useState<TClaimStage>('initial')
  const [ proofs, setProofs ] = useState<TSemaphoreProof[]>([])

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

  const button = defineButton(
    loading,
    setLoading,
    stage,
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
    proofs
  )

  return <Page>
    <StepsContainer>
      <StepsStyled
        stepsCount={6}
        activeStep={4}
      />
    </StepsContainer>

    <WidgetStyled
      title='Claim Your Proof-of-Human NFT'
      image={<ShieldIcon />}
    >
      <TextStyled>Complete verifications to unlock your airdrop</TextStyled>
      <SuccessNoteStyled
        title='Verified Human NFT'
      >
        Available for users with Advanced verification level (20+ points)
      </SuccessNoteStyled>
      {button}
    </WidgetStyled>
    
  </Page>
}

export default Content
