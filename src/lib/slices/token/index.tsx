import { TTokenStandard } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TInitialState } from './types'

const initialState: TInitialState = {
  address: null,
  decimals: null,
  symbol: null,
  image: null,
  standard: null,
  amount: null
}

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setTokenAddress: (state, action: PayloadAction<string | null>) => ({
      ...state, address: action.payload
    }),
    setTokenDecimals: (state, action: PayloadAction<number | null>) => ({
      ...state, decimals: action.payload
    }),
    setTokenSymbol: (state, action: PayloadAction<string | null>) => ({
      ...state, symbol: action.payload
    }),
    setTokenImage: (state, action: PayloadAction<string | null>) => ({
      ...state, image: action.payload
    }),
    setTokenStandard: (state, action: PayloadAction<TTokenStandard | null>) => ({
      ...state, standard: action.payload
    }),
    setTokenAmount: (state, action: PayloadAction<string | null>) => ({
      ...state, amount: action.payload
    }),
  },
})

// Extract the action creators object and the reducer
const { actions, reducer } = tokenSlice
// Extract and export each action creator by name
export const {
  setTokenAddress,
  setTokenStandard,
  setTokenImage,
  setTokenSymbol,
  setTokenDecimals,
  setTokenAmount
} = actions
// Export the reducer, either as a default or named export
export default reducer