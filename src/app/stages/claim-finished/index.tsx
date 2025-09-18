'use client'
import {
  FC,
  useState
} from 'react'
import {
  Page
} from '@/components/common'
import {
  StepsContainer,
  StepsStyled,
  TextStyled,
  ButtonStyled,
  WidgetStyled,
  SuccessNoteStyled
} from '../../content/styled-components'
import { TClaimStage, TSemaphoreProof } from '@/types'
import TProps from './types'

import { ShieldIcon } from '@/components/icons'
import {
  shortenString
} from '@/utils'
import {
  useAppSelector
} from '@/lib/hooks'
import { defineExplorerURL } from '@/utils'

const defineButton = (
  txHash: string
) => {

  if (!txHash) {
    return null
  }

  return <ButtonStyled
    onClick={async () => {
      const txHashScannerUrl = defineExplorerURL(84532)
      window.open(`${txHashScannerUrl}/tx/${txHash}`)
    }}
  >
    View transaction
  </ButtonStyled>

  return 
}

const ClaimFinished: FC<TProps> = ({ setStage }) => {
  const {
    claim: {
      txHash
    }
  } = useAppSelector(state => (
    {
      claim: state.claim
    }
  ))

  const button = defineButton(
    txHash as string
  )

  const {
    user: {
      address
    }
  } = useAppSelector(state => ({
    user: state.user
  }))


  return <Page>
    <StepsContainer>
      <StepsStyled
        stepsCount={7}
        activeStep={7}
      />
    </StepsContainer>

    <WidgetStyled
      title='Bring tokens Claimed!'
      image={<ShieldIcon />}
    >
      <TextStyled>Your tokens has been successfully delivered</TextStyled>
      <SuccessNoteStyled
        title='Bring tokens'
      >
        Were sent to {shortenString(address as string)}
      </SuccessNoteStyled>
      {button}
    </WidgetStyled>
    
  </Page>
}

export default ClaimFinished
