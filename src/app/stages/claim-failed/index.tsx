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

import { ShieldIcon } from '@/components/icons'
import {
  shortenString
} from '@/utils'
import {
  useAppSelector
} from '@/lib/hooks'
import { defineExplorerURL } from '@/utils'
import TProps from './types'

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

const Content: FC<TProps> = ({ setStage }) => {
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


  return <WidgetStyled
    title='Bring tokens transaction failed!'
    image={<ShieldIcon />}
  >
    <TextStyled>Your tokens transaction has been failed</TextStyled>
    <SuccessNoteStyled
      status='error'
      title='Bring tokens'
    >
      Attempted to send to {shortenString(address as string)}
    </SuccessNoteStyled>

    {button}
  </WidgetStyled>
    
}

export default Content
