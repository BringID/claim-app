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
import {
  WidgetStyled,
  ButtonStyled,
  SuccessNoteStyled
} from './styled-components'

import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { ShieldIcon } from '@/components/icons'
import {
  useAppDispatch,
  useAppSelector
} from '@/lib/hooks'
import taskManager from '@/app/api/claim'

const defineButton = (
  callback: () => void
) => {

  return <ButtonStyled
    appearance='action'
    onClick={callback}
  >
    Claim 2,500 BRING 
  </ButtonStyled> 
}

const Content: FC = () => {
  const drop = '0x0ad37502F19ab669A53B9De69841203cb019b056'
  const router = useRouter()
  const dispatch = useDispatch()

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
    () => {
      window.postMessage({
        type: 'CHECK_PROOFS',
        host: window.location.host,
        dropAddress: drop,
        pointsNeeded: 10,
        address: address
      }, '*')


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

            await taskManager.addClaim(
              dataToSend,
              drop,
              address as string
            )


            break
          }

        }
      })
    }
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
