'use client'
import {
  FC,
  useEffect,
  useState
} from 'react'
import {
  Main
} from './styled-components'
import { TProps } from './types'
import { ThemeProvider } from 'styled-components'
import { light } from '@/themes'
import {
  Header,
  Footer
} from '@/components/common'
import {
  defineEthersSigner,
} from '@/utils'
import {
  useAppDispatch
} from '@/lib/hooks'
import {
  setConnectedUserData
} from '@/lib/slices'
import {
  useAccount
} from "wagmi"
import { useWalletClient } from 'wagmi'
import { networkId } from '@/app/configs'
import { useRouter } from 'next/navigation'
import isMobile from 'is-mobile'

const Page: FC<TProps> = ({
  children,
  preventSwitchNetworkRedirect
}) => {
  const {
    address,
    chain
  } = useAccount()
  const { data: walletClient } = useWalletClient()
  const [
    userSigner,
    setUserSigner
  ] = useState<any>(null)
  const [
    userProvider,
    setUserProvider
  ] = useState<any>(null)

  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    if (isMobile()) {
      router.push('/wrong-device')
    }
  }, [])

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.data?.type === 'LOGOUT') {
        router.push('/test?stage=connect')
      }
    });
  }, [])

  useEffect(() => {
    if (!walletClient) {
      return
    }
    const init = async () => {
      const {
        signer,
        provider
      } = await defineEthersSigner(walletClient)
      
      setUserSigner(signer)
      setUserProvider(provider)
    }

    init()

  }, [walletClient])

  useEffect(() => {
    if (!address || !userSigner || !userProvider) {
      dispatch(setConnectedUserData({
        address: address || null,
        chainId: null,
        signer: userSigner || null,
        provider: userProvider || null
      }))

      return
    }

    if (!preventSwitchNetworkRedirect) {
      if (!chain || String(chain.id) !== networkId) {
  
        router.push('/wrong-network')
      }
    }

    if (!chain) { return }

    dispatch(setConnectedUserData({
      address,
      chainId: chain.id,
      signer: userSigner,
      provider: userProvider
    }))

  }, [
    address,
    chain,
    userSigner,
    userProvider
  ])

  return <ThemeProvider theme={light}>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </ThemeProvider>
}

export default Page
