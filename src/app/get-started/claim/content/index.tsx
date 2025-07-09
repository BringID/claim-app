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
        dropAddress: '0x0ad37502F19ab669A53B9De69841203cb019b056',
        pointsNeeded: 10,
        address: address
      }, '*')
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
