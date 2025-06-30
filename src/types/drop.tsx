import TDropStatus from './drop-status'

type TDrop = {
  title: string
  address: string
  expiration: number
  amount: bigint
  token: string
  description: string
  maxClaims: bigint
  claimsCount: bigint
  zkPassAppId: string
  zkPassSchemaId: string
  decimals: number
  symbol: string
  creatorAddress: string
  status: TDropStatus
  connectedUserClaimTxHash?: string | null
  hasConnectedUserClaimed?: boolean | null
}


export default TDrop