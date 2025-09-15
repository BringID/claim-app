'use client'
import {
  FC, useEffect
} from 'react'
import { TProps } from './types'
import { useRouter } from 'next/navigation'
import {
  Page
} from '@/components/common'
import { TAuthorizationStep } from '@/types'
import {
  Connect
} from './components'
import { useAppSelector } from '@/lib/hooks'
import { useDispatch } from 'react-redux'
import {
  setAuthorizationStep
} from '@/lib/slices'

import {
  StepsContainer,
  StepsStyled 
} from '../../styled-components'

const defineContent = (
  step: TAuthorizationStep
) => {
  switch (step) {
    case 'connect':
      return <Connect />
    default:
      return null
  }
}


const AuthContent: FC<TProps> = () => {
  const {
    user: {
      authorizationStep
    }
  } = useAppSelector(state => ({
    user: state.user
  }))

  const router = useRouter()

  const dispatch = useDispatch()

  const content = defineContent(authorizationStep)

  useEffect(() => {  
    dispatch(setAuthorizationStep('connect'))
  }, [])

  useEffect(() => {
    if (authorizationStep === 'connected') {
      router.push(`/create-id`)
    }
  }, [authorizationStep])

  return <Page>
    <StepsContainer>
      <StepsStyled
        stepsCount={7}
        activeStep={3}
      />
    </StepsContainer>
    {content}
  </Page>
}

export default AuthContent
