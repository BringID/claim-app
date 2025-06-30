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
    if (!address || !chain || !userSigner || !userProvider) {
      dispatch(setConnectedUserData({
        address: null,
        chainId: null,
        signer: null,
        provider: null
      }))

      return
    }

    if (!preventSwitchNetworkRedirect) {
      if (String(chain.id) !== networkId) {
        router.push('/wrong-network')
      }
    }

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
