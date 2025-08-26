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
import {
  SignMessageStyled,
  List,
  ListItem
} from './styled-components'
import { useRouter } from 'next/navigation'
import { keccak256, toUtf8Bytes } from 'ethers'

const prepareMessage = async (
  address: string,
  chainId: number
) => {
  const timestamp = Date.now()
  const humanReadable = new Date(timestamp).toUTCString()
  const statement = `Hello!! Please sign this message to create user key for the BringID dashboard!`
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
    type: 'SET_PRIVATE_KEY',
    privateKey: hash,
    address,
    host: window.location.host
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
  const [ loading, setLoading ] = useState<boolean>(false)

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
        stepsCount={6}
        activeStep={3}
      />
    </StepsContainer>
    <WidgetStyled
      title='Create Your Bring ID Key'
      image={<ShieldIcon />}
    >
      <TextStyled>Sign a message to generate your unique identity key</TextStyled>
      <NoteStyled>
        How this works: We'll ask you to sign a random nonce with your wallet. This signature, combined with your wallet's public key, generates a deterministic Bring ID key. This means:
        <List>
          <ListItem>
            Your Bring ID is cryptographically tied to your wallet
          </ListItem>
          <ListItem>
            You can always recover it by signing with the same wallet
          </ListItem>
          <ListItem>
            No one else can create or access your Bring ID
          </ListItem>
          <ListItem>
            Your web2 verifications remain private through zkTLS
          </ListItem>
        </List>
      </NoteStyled>

      {message && <SignMessageStyled>
        {message}
      </SignMessageStyled>}
      <ButtonStyled
        appearance='action'
        loading={loading}
        onClick={async () => {
          setLoading(true)
          try {
            if (!message) {
              return alert('No message prepared')
            }
            console.log('sss1')
            await generatePrivateKey(
              message as string,
              signer as JsonRpcSigner,
              address as string
            )
            console.log('sss2', router)
            router.push('/get-started/claim')
          } catch (err) {
            console.log({ err })
          }
          setLoading(false)
        }}
      >
        Sign message
      </ButtonStyled>
    </WidgetStyled>
    
  </Page>
}

export default AuthContent
