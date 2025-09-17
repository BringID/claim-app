'use client'
import {
  FC
} from 'react'
import {
  WidgetStyled,
  TextStyled,
  NoteStyled,
  ConnectButtonStyled
} from '../../content/styled-components'
import { WalletIcon } from '@/components/icons'

const Connect: FC = () => {
  return <WidgetStyled
    title='Connect Your Wallet'
    image={<WalletIcon />}
  >
    <TextStyled>Connect your crypto wallet to create your Bring ID</TextStyled>
    <NoteStyled>
      The Bring ID extension creates zero-knowledge proofs of your web2 accounts without exposing your credentials. It runs locally in your browser and never sends your login information to our servers.
    </NoteStyled>
  
    <ConnectButtonStyled />
  </WidgetStyled>
}

export default Connect