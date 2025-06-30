import {
  FC,
  useEffect,
  useState
} from 'react'
import {
  TitleStyled,
  Text,
  ButtonStyled,
  PixeledDropIconStyled,
  Container
} from './styled-components'
import {
  defineNetworkName,
  switchNetwork
} from '@/utils'
import TProps from './types'
import {
  networkId
} from '@/app/configs'
import { useAppSelector } from '@/lib/hooks'
import { BrowserProvider } from 'ethers'
import { useRouter } from 'next/navigation'

const WrongNetwork: FC<TProps> = () => {
  const router = useRouter()
  const [
    loading,
    setLoading
  ] = useState<boolean>(false)
  const {
    user: {
      provider,
      chainId
    }
  } = useAppSelector(state => ({
    user: state.user,
  }))

  useEffect(() => {
    if (String(chainId) === networkId) {
      router.push('/')
    }
  }, [
    chainId
  ])

  const networkToConnect = defineNetworkName(Number(networkId))
  const launchDropButton = <ButtonStyled
    appearance='action'
    loading={loading}
    onClick={() => {
      setLoading(true)
      switchNetwork(
        Number(networkId),
        provider as BrowserProvider,
        () => {
          setLoading(false)
        }
      )}
    }
  >
    Switch Network
  </ButtonStyled>

  return <Container>
    <PixeledDropIconStyled />
    <TitleStyled>
      Switch to {networkToConnect} 
    </TitleStyled>
    <Text>
      You’re currently connected to a different network.
      Please switch your wallet to {networkToConnect} to use zkBring.
    </Text>
    {launchDropButton}
  </Container>
}

export default WrongNetwork