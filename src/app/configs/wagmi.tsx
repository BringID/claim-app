import { cookieStorage, createStorage } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { coinbaseWallet, walletConnect } from 'wagmi/connectors'
import { allChains } from './networks'

import {
  projectId
} from '@/app/configs'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

const wagmiConfig = {
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks: allChains,
  connectors: [
    coinbaseWallet()
  ]
}

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter(wagmiConfig)

export const config = wagmiAdapter.wagmiConfig