import {
  TLaunchAsset,
  TTokenStandard
} from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TInitialState } from './types'
import {
  setZKTLSOptionsAction,
  setTokenDataAction,
  setDropDataAction
} from './actions'
import {
  approve,
  createDrop
} from './async-actions'

const initialState: TInitialState = {
  title: null,
  description: null,
  tokenAddress: null,
  tokenStandard: 'ERC20',
  loading: false,
  decimals: null,
  symbol: null,
  approved: false,
  expiration: +(new Date((new Date()).setDate(new Date().getDate() + 1))),
  transactionStage: 'initial',
  zkPassAppId: null,
  zkPassSchemaId: null,
  createdDropId: null,
  totalClaims: null,
  tokensPerClaim: null
}

const launchSlice = createSlice({
  name: 'launch',
  initialState,
  reducers: {
    setLaunchTitle: (state, action: PayloadAction<string>) => ({
      ...state, title: action.payload
    }),

    clearLaunch: (state) => ({
      ...initialState
    }),

    setLoading: (state, action: PayloadAction<boolean>) => ({
      ...state, loading: action.payload
    }),

    setLaunchDescription: (state, action: PayloadAction<string>) => ({
      ...state, description: action.payload
    }),

    setLaunchTokenAddress: (state, action: PayloadAction<string>) => ({
      ...state, tokenAddress: action.payload
    }),

    setLaunchTokenStandard: (state, action: PayloadAction<TTokenStandard>) => ({
      ...state, tokenStandard: action.payload
    }),

    setLaunchAssets: (state, action: PayloadAction<TLaunchAsset[]>) => ({
      ...state, assets: action.payload
    }),

    setZKTLSOptions: setZKTLSOptionsAction,
    setTokenData: setTokenDataAction,
    setDropData: setDropDataAction
   
  },
  extraReducers: (builder) => {
    builder.addCase(approve.fulfilled, (state, action) => {
      state = {
        ...state,
        approved: true,
        transactionStage: 'launch',
        loading: false
      }

      console.log({ state })

      return state
    }),

    builder.addCase(approve.pending, (state, action) => {
      state = {
        ...state,
        loading: true
      }
      return state

    })

    builder.addCase(approve.rejected, (state, action) => {
      state = {
        ...state,
        loading: false
      }
      return state

    })

    builder.addCase(createDrop.pending, (state, action) => {
      state = {
        ...state,
        loading: true
      }
      return state

    })
  
    builder.addCase(createDrop.fulfilled, (state, action) => {
      const {
        payload: {
          drop
        }
      } = action
      state = {
        ...state,
        createdDropId: drop.address.toLowerCase(),
        transactionStage: 'created'
      }

      return state

    })

    builder.addCase(createDrop.rejected, (state, action) => {
      state = {
        ...state,
        loading: false
      }
      return state

    })
  },
})

// Extract the action creators object and the reducer
const { actions, reducer } = launchSlice
// Extract and export each action creator by name
const {
  setLaunchTitle,
  setLaunchDescription,
  setLaunchTokenAddress,
  setLaunchTokenStandard,
  setLaunchAssets,
  setZKTLSOptions,
  setTokenData,
  setDropData,
  setLoading,
  clearLaunch
} = actions

export {
  setLaunchTitle,
  setLaunchDescription,
  setLaunchTokenAddress,
  setLaunchTokenStandard,
  setLaunchAssets,
  setZKTLSOptions,
  setTokenData,
  setDropData,
  approve,
  createDrop,
  setLoading,
  clearLaunch
}

// Export the reducer, either as a default or named export
export default reducer