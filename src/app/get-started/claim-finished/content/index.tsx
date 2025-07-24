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
  TextStyled
} from '../../styled-components'
import { TClaimStage, TSemaphoreProof } from '@/types'

import {
  WidgetStyled,
  ButtonStyled,
  SuccessNoteStyled
} from './styled-components'
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

const Content: FC = () => {
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
        stepsCount={6}
        activeStep={6}
      />
    </StepsContainer>

    <WidgetStyled
      title='NFT Claimed!'
      image={<ShieldIcon />}
    >
      <TextStyled>Your Proof-of-Human NFT has been successfully delivered</TextStyled>
      <SuccessNoteStyled
        title='Verified Human NFT'
      >
        Were sent to {shortenString(address as string)}
      </SuccessNoteStyled>
      {button}
    </WidgetStyled>
    
  </Page>
}

export default Content
