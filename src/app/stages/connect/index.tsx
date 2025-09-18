'use client'
import {
  FC,
  useEffect
} from 'react'
import {
  WidgetStyled,
  TextStyled,
  NoteStyled,
  ConnectButtonStyled
} from '../../content/styled-components'
import { WalletIcon } from '@/components/icons'
import TProps from './types'
import { useAppSelector } from '@/lib/hooks'
import { useDispatch } from 'react-redux'
import {
  setAuthorizationStep
} from '@/lib/slices'

const Connect: FC<TProps> = ({ setStage }) => {

  const {
    user: {
      authorizationStep
    }
  } = useAppSelector(state => ({
    user: state.user
  }))


  const dispatch = useDispatch()

  useEffect(() => {  
    dispatch(setAuthorizationStep('connect'))
  }, [])

  useEffect(() => {
    if (authorizationStep === 'connected') {
      setStage('create_id')
    }
  }, [authorizationStep])

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