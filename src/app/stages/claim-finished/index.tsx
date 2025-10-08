'use client'
import {
  FC
} from 'react'

import {
  TextStyled,
  ButtonStyled,
  WidgetStyled,
  SuccessNoteStyled
} from '../../content/styled-components'
import TProps from './types'
import { ShieldIcon } from '@/components/icons'
import {
  shortenString
} from '@/utils'
import { Buttons } from '../../content/styled-components'
import {
  useAppSelector
} from '@/lib/hooks'
import { defineExplorerURL } from '@/utils'
import { networkId, telegramChatLink } from '@/app/configs'

const defineSecondaryButton = (
  txHash: string
) => {

  if (!txHash) {
    return null
  }

  return <ButtonStyled
    onClick={async () => {
      const txHashScannerUrl = defineExplorerURL(Number(networkId))
      window.open(`${txHashScannerUrl}/tx/${txHash}`)
    }}
  >
    View transaction
  </ButtonStyled>

  return 
}

const definePrimaryButton = () => {

  return <ButtonStyled
    href={telegramChatLink}
    target='_blank'
    appearance='action'
  >
    Join Telegram group
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

  const secondaryButton = defineSecondaryButton(
   txHash as string
  )

  const primaryButton = definePrimaryButton()

  const {
    user: {
      address
    }
  } = useAppSelector(state => ({
    user: state.user
  }))


  return <WidgetStyled
    title='Bring tokens Claimed!'
    image={<ShieldIcon />}
  >
    <TextStyled>Your tokens has been successfully delivered</TextStyled>
    <SuccessNoteStyled
      title='Bring tokens'
    >
      Were sent to {shortenString(address as string)}
    </SuccessNoteStyled>
    <Buttons>
      {primaryButton}
      {secondaryButton}
    </Buttons>

  </WidgetStyled>    
}

export default ClaimFinished
