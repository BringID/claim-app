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
import { usePlausible } from 'next-plausible'

const defineSecondaryButton = (
  txHash: string,
  plausible: any
) => {

  if (!txHash) {
    return null
  }

  return <ButtonStyled
    onClick={async () => {
      const txHashScannerUrl = defineExplorerURL(Number(networkId))
      plausible('go_to_explorer', {
        props: {
          from: 'claim_finished_screen',
        }
      })
      window.open(`${txHashScannerUrl}/tx/${txHash}`)
    }}
  >
    View transaction
  </ButtonStyled>

  return 
}

const definePrimaryButton = (
  plausible: any
) => {

  return <ButtonStyled
    onClick={() => {
      window.open(telegramChatLink, '_open')
      plausible('go_to_telegram_chat', {
        props: {
          from: 'claim_finished_screen',
        }
      })
    }}
    appearance='action'
  >
    Join Telegram group
  </ButtonStyled>

  return 
}

const ClaimFinished: FC<TProps> = ({ setStage, claimAddress }) => {
  const {
    claim: {
      txHash
    }
  } = useAppSelector(state => (
    {
      claim: state.claim
    }
  ))

  const plausible = usePlausible()

  const secondaryButton = defineSecondaryButton(
   txHash as string,
   plausible
  )

  const primaryButton = definePrimaryButton(
    plausible
  )

  return <WidgetStyled
    title='Bring tokens Claimed!'
    image={<ShieldIcon />}
  >
    <TextStyled>Your tokens has been successfully delivered</TextStyled>
    <SuccessNoteStyled
      title='Bring tokens'
    >
      Were sent to {shortenString(claimAddress as string)}
    </SuccessNoteStyled>
    <Buttons>
      {primaryButton}
      {secondaryButton}
    </Buttons>

  </WidgetStyled>    
}

export default ClaimFinished
