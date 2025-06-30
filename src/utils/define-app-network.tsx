import {
  baseSepolia,
  base
} from 'wagmi/chains'
import {
  networkId
} from '@/app/configs'

type TDefineAppNetwork = () => any

const defineAppNetwork: TDefineAppNetwork = () => {
  switch (networkId) {
    case '8453':
      return base
    default:
      return baseSepolia
  }
}

export default defineAppNetwork
