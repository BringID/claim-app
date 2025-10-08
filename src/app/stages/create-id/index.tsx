'use client'
import {
  FC,
  useEffect,
  useState
} from 'react'
import { useAppSelector } from '@/lib/hooks'
import { JsonRpcSigner } from 'ethers'
import {
  TextStyled,
  NoteStyled,
  WidgetStyled,
  ButtonStyled
} from '../../content/styled-components'
import { ShieldIcon } from '@/components/icons'
import {
  SignMessageStyled,
  List,
  ListItem
} from './styled-components'
import { keccak256, toUtf8Bytes } from 'ethers'
import TProps from './types'

const prepareMessage = async (

) => {
  const timestamp = Date.now()
  const statement = `Sign to derive your BringID key (used for zero-knowledge proofs).
Recoverable by re-signing with the same wallet.
Only sign this message on bringid.org.`

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
    type: 'SET_USER_KEY',
    privateKey: hash,
    address,
    host: window.location.host
  }, '*') // You can restrict the origin in production
}

const CreateID: FC<TProps> = ({ setStage }) => {
  const {
    user: {
      signer,
      address
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

      )

      console.log({
        preparedMessage
      })
      
      setMessage(preparedMessage)
      setTimestamp(timestamp)
    }


    init()
  }, [ address ])

  return <WidgetStyled
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
          Your web2 verifications remain private
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
          await generatePrivateKey(
            message as string,
            signer as JsonRpcSigner,
            address as string
          )
          setStage('claim')
        } catch (err) {
          console.log({ err })
        }
        setLoading(false)
      }}
    >
      Sign message
    </ButtonStyled>
  </WidgetStyled>
}

export default CreateID
