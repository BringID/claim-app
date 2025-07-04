'use client'
import {
  FC,
  useEffect,
  useState
} from 'react'
import {
  Button,
  Page
} from '@/components/common'
import { useAppSelector } from '@/lib/hooks'
import { JsonRpcSigner } from 'ethers'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import {
  StepsContainer,
  StepsStyled,
  TextStyled,
  NoteStyled,
  WidgetStyled,
  ButtonStyled
} from '../../styled-components'
import { ShieldIcon } from '@/components/icons'
import { SignMessageStyled } from './styled-components'
import { useRouter } from 'next/navigation'
import { keccak256, toUtf8Bytes } from 'ethers'

const prepareMessage = async (
  address: string,
  chainId: number
) => {
  const timestamp = Date.now()
  const humanReadable = new Date(timestamp).toUTCString()
  const statement = `I'm signing this message to login to ZKBring Dashboard at`
  // const { data: { nonce } } = await nonceApi.get(address)
  const nonce = '1234124314234' 

  return {
    preparedMessage: statement,
    timestamp
  }
}

async function generatePrivateKey(
  message: string,
  signer: JsonRpcSigner,
  address: string
) {
  
  const sig = await signer.signMessage(String(message))
  const bytes = toUtf8Bytes(sig)

  const hash = keccak256(bytes)

  // Post a message to the extension content script
  window.postMessage({
    type: 'PRIVATE_KEY',
    privateKey: hash,
    address
  }, '*') // You can restrict the origin in production
}

const AuthContent: FC = () => {
  const {
    user: {
      signer,
      address,
      chainId
    }
  } = useAppSelector(state => ({
    user: state.user
  }))

  const [ message, setMessage ] = useState<string>('')
  const [ timestamp, setTimestamp ] = useState<number>(0)

  useEffect(() => {
    if (!address) { return }
    const init = async () => {
      const { preparedMessage, timestamp } = await prepareMessage(
        address as string,
        chainId as number,
      )

      console.log({
        preparedMessage
      })
      
      setMessage(preparedMessage)
      setTimestamp(timestamp)
    }


    init()
  }, [ address ])
  const router = useRouter()

  return <Page>
    <StepsContainer>
      <StepsStyled
        stepsCount={5}
        activeStep={3}
      />
    </StepsContainer>
    <WidgetStyled
      title='Create Your Bring ID Key'
      image={<ShieldIcon />}
    >
      <TextStyled>Sign a message to generate your unique identity key</TextStyled>
      <NoteStyled>
        The Bring ID extension creates zero-knowledge proofs of your web2 accounts without exposing your credentials. It runs locally in your browser and never sends your login information to our servers.
      </NoteStyled>

      {message && <SignMessageStyled>
        {message}
      </SignMessageStyled>}
      <ButtonStyled
        appearance='action'
        onClick={async () => {
          if (!message) {
            return alert('No message prepared')
          }
          await generatePrivateKey(
            message as string,
            signer as JsonRpcSigner,
            address as string
          )

          console.log('sss')

          router.push('/get-started/claim')

        }}
      >
        Sign message
      </ButtonStyled>
    </WidgetStyled>
    
  </Page>
}

export default AuthContent
