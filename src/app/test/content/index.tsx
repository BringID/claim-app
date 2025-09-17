'use client'
import {
  FC,
  useEffect,
  useState
} from 'react'
import {
  Page
} from '@/components/common'
import {
  StepsContainer,
  StepsStyled
} from './styled-components'

const LaunchTransaction: FC = () => {
  return <Page>
    <StepsContainer>
      <StepsStyled
        stepsCount={7}
        activeStep={1}
      />
    </StepsContainer>

    
    
  </Page>
}

export default LaunchTransaction
