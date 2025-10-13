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
import { usePlausible } from 'next-plausible'

const defineIfKeyHasAlreadyBeenCreated = async () => {
    window.postMessage({
      type: 'HAS_USER_KEY',
    }, '*') // You can restrict the origin in production
    console.log('SENT!!!')
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

      window.setTimeout(() => {
        resolve(false)
        window.removeEventListener("message", listener)
      }, 1500)
    })
}


const Connect: FC<TProps> = ({ setStage }) => {
  const plausible = usePlausible()

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

    (async () => {
      if (authorizationStep === 'connected') {
        const hasUserKey = await defineIfKeyHasAlreadyBeenCreated()

        if (hasUserKey) {
          plausible('go_to_claim_screen', {
            props: {
              from: 'connect_screen',
            }
          })
          setStage('claim')
        } else {
          plausible('go_to_user_key_screen', {
            props: {
              from: 'connect_screen',
            }
          })
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