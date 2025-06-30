import {
  TTokenStandard,
  TLaunchTransactionStage
} from '@/types'

export interface TInitialState {
  // token data
  tokenAddress: string | null
  tokenStandard: TTokenStandard | null
  decimals: number | null
  symbol: string | null
  tokensPerClaim: string | null
  totalClaims: string | null


  // campaign data
  title?: string | null
  description?: string | null


  // audience
  zkPassAppId: string | null
  zkPassSchemaId: string | null

  createdDropId?: string | null 
  loading: boolean
  approved: boolean | null
  expiration: number
  transactionStage: TLaunchTransactionStage | null
}
