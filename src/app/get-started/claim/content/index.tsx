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
import { defineExplorerURL } from '@/utils'
import { pointsNeeded } from '@/app/configs'
import { setTxHash } from '@/lib/slices'

const defineButton = (
  loading: boolean,
  setLoading: (
    loading: boolean
  ) => void,
  stage: TClaimStage,
  setStage: (
    stage: TClaimStage
  ) => void,
  setTxHash: (
    txHash: string
  ) => void,
  navigate: (
    location: string
  ) => void,
  
  address: string,
  proofs: TSemaphoreProof[]

) => {

  switch (stage) {
    case 'initial': {
      return <ButtonStyled
        appearance='action'
        loading={loading}
        onClick={() => {
          window.postMessage({
            type: 'OPEN_EXTENSION'
          }, '*')
          setStage('started')
        }}
      >
        Prove you're human
      </ButtonStyled> 
    }

    case 'started': {
      return <ButtonStyled
        appearance='action'
        loading={loading}
        onClick={() => {
          window.postMessage({
            type: 'CHECK_PROOFS',
            host: window.location.host,
            dropAddress: dropAddress,
            pointsNeeded,
            address: address as string
          }, '*')
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
            alert(err)
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

  useEffect(() => {
    window.addEventListener("message", async (event) => {
      switch (event.data.type) {
        //  from client to extension
        case 'CLAIM': {
          setLoading(true)
          try {
            const proofs: any[] = event.data.data
            console.log({ proofs })
            if (!proofs) {
              return alert('Please try later. Proofs are not ready')
            }
            const dataToSend = proofs.map(proof => {
              return {
                credential_group_id: proof.credentialGroupId,
                semaphore_proof: {
                  merkle_tree_depth: proof.merkleTreeDepth,
                  merkle_tree_root: proof.merkleTreeRoot,
                  nullifier: proof.nullifier,
                  message: proof.message,
                  scope: proof.scope,
                  points: proof.points
                }
              }
            })

            setProofs(dataToSend)
            setStage('ready_to_claim')
          } catch (err) {
            console.log({ err })
          }
          setLoading(false)
  
          break
        }

        case 'SET_PRIVATE_KEY':
          router.push(`/get-started/create-id`)
          break
      }
    })
  }, [])


  const {
    user: {
      address,
      chainId
    },
  } = useAppSelector(state => (
    {
      user: {
        chainId: state.user.chainId,
        address: state.user.address
      }
    }
  ))

  const button = defineButton(
    loading,
    setLoading,
    stage,
    setStage,
    (
      txHash
    ) => dispatch(setTxHash(txHash)),
    (
      location
    ) => {
      router.push(location)
    },
    address as string,
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
