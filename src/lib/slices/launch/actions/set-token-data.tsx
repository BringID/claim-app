import {
  TClaimPattern
} from '@/types'
import type { TInitialState } from '../types'
import { TTokenData } from '@/types'
import { PayloadAction } from '@reduxjs/toolkit'

type TArgs = {
  tokenData: TTokenData
  claimPattern: TClaimPattern
  totalClaims: string
  tokensPerClaim: string
}

const setTokenData = (state: TInitialState, action: PayloadAction<TArgs>) => {
  const {
    tokenData,
    claimPattern,
    totalClaims,
    tokensPerClaim,
  } = action.payload


   return {
    ...state,
    tokenAddress: tokenData.address,
    symbol: tokenData.symbol,
    decimals: tokenData.decimals,
    tokensPerClaim,
    totalClaims,
    claimPattern
   }
}

export default setTokenData
