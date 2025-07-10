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

const defineButton = (
  stage: TClaimStage,
  setStage: (
    stage: TClaimStage
  ) => void,
  txHash: string,
    setTxHash: (
    txHash: string
  ) => void,
  address: string,
  proofs: TSemaphoreProof[]

) => {

  switch (stage) {
    case 'initial': {
      return <ButtonStyled
        appearance='action'
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
        onClick={() => {
          window.postMessage({
            type: 'CHECK_PROOFS',
            host: window.location.host,
            dropAddress: dropAddress,
            pointsNeeded: 10,
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
        onClick={async () => {
          const result = await taskManager.addClaim(
            proofs,
            dropAddress,
            address as string
          )

          const { tx_hash } = result
          setTxHash(tx_hash)
          setStage('claim_started')
        }}
      >
        Claim
      </ButtonStyled> 
    }

    case 'claim_started':
      return <ButtonStyled
        appearance='action'
        onClick={async () => {
          const txHashScannerUrl = defineExplorerURL(84532)
          window.open(`${txHashScannerUrl}/tx/${txHash}`)
        }}
      >
        Check tx hash
      </ButtonStyled> 
  }

  return 
}

const Content: FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [ stage, setStage ] = useState<TClaimStage>('initial')
  const [ proofs, setProofs ] = useState<TSemaphoreProof[]>([])
  const [ txHash, setTxHash ] = useState<string>('')

  useEffect(() => {
    window.addEventListener("message", async (event) => {
      switch (event.data.type) {
        //  from client to extension
        case 'CLAIM': {
          const proofs: any[] = event.data.data
          console.log({ proofs })

          const dataToSend = proofs.map(proof => {
            return {
              verification_id: proof.verificationId,
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

          break
        }

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
    stage,
    setStage,
    txHash,
    setTxHash,
    address as string,
    proofs
  )

  return <Page>
    <StepsContainer>
      <StepsStyled
        stepsCount={5}
        activeStep={4}
      />
    </StepsContainer>

    <WidgetStyled
      title='Claim Your Tokens'
      image={<ShieldIcon />}
    >
      <TextStyled>Complete verifications to unlock your airdrop</TextStyled>
      <SuccessNoteStyled
        title='2,500 BRING'
      >
        Available for users with Advanced verification level (20+ points)
      </SuccessNoteStyled>
      {button}
    </WidgetStyled>
    
  </Page>
}

export default Content
