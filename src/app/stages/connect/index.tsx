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

const defineIfKeyHasAlreadyBeenCreated = async () => {
    window.postMessage({
      type: 'HAS_USER_KEY',
    }, '*') // You can restrict the origin in production

    return new Promise((resolve, reject) => {
      const listener = (event: any) => {
        switch (event.data.type) {
          //  from client to extension
          case 'HAS_USER_KEY_RESPONSE': {
            resolve(event.data.data.hasUserKey)
            window.removeEventListener("message", listener)
            break
          }
        }
      }
  
      window.addEventListener("message", listener)
    })
}


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

  console.log({ authorizationStep })

  useEffect(() => {

    (async () => {
      if (authorizationStep === 'connected') {
        const hasUserKey = await defineIfKeyHasAlreadyBeenCreated()

        console.log({ hasUserKey })
        if (hasUserKey) {
          setStage('claim')
        } else {
          setStage('create_id')
        }
      }
    })()
    
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