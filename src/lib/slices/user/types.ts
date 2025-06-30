import {
  JsonRpcSigner,
  BrowserProvider
} from 'ethers'
import {
  TAuthorizationStep
} from '@/types'

export type TInitialState = {
  address: string | null
  chainId: number | null
  signer: JsonRpcSigner | null
  provider: BrowserProvider | null
  authorizationStep: TAuthorizationStep
}