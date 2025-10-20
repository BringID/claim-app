'use client'
import {
  FC
} from 'react'
import {
  TextStyled,
  WidgetStyled,
  ButtonStyled,
  SuccessNoteStyled
} from '../../content/styled-components'
import { networkId } from '@/app/configs'

import { ShieldIcon } from '@/components/icons'
import {
  shortenString
} from '@/utils'
import {
  useAppSelector
} from '@/lib/hooks'
import { defineExplorerURL } from '@/utils'
import TProps from './types'
import { usePlausible } from 'next-plausible'

const defineButton = (
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
          from: 'claim_failed_screen',
        }
      })
      window.open(`${txHashScannerUrl}/tx/${txHash}`)
    }}
  >
    View transaction
  </ButtonStyled>

  return 
}

const Content: FC<TProps> = ({ claimAddress }) => {
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

  const button = defineButton(
    txHash as string,
    plausible
  )

  return <WidgetStyled
    title='Bring tokens transaction failed!'
    image={<ShieldIcon />}
  >
    <TextStyled>Your tokens transaction has been failed</TextStyled>
    <SuccessNoteStyled
      status='error'
      title='Bring tokens'
    >
      Attempted to send to {shortenString(claimAddress as string)}
    </SuccessNoteStyled>

    {button}
  </WidgetStyled>
    
}

export default Content
