import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'
import { TInitialState } from './types'
import {
  JsonRpcSigner,
  BrowserProvider
} from 'ethers'
import {
  TAuthorizationStep
} from '@/types'

const initialState: TInitialState = {
  address: null,
  chainId: null,
  signer: null,
  authorizationStep: 'initial',
  provider: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAddress(
      state,
      action: PayloadAction<string | null>
    ) {
      return {...state, address: action.payload }
    },
    setAuthorizationStep(
      state,
      action: PayloadAction<TAuthorizationStep>
    ) {
      return {...state, authorizationStep: action.payload }
    },
    setUserChainId(
      state,
      action: PayloadAction<number | null>
    ) {
      return {...state, chainId: action.payload }
    },

    setSigner(
      state,
      action: PayloadAction<JsonRpcSigner | null>
    ) {
      return {...state, signer: action.payload }
    },

    setConnectedUserData (state, action: PayloadAction<{
      address: string | null
      chainId: number | null
      signer: JsonRpcSigner | null
      provider: BrowserProvider | null
    }>) {
      const {
        address,
        chainId,
        signer,
        provider
      } = action.payload

      return {
        ...state,
        address,
        chainId,
        signer,
        provider,
        authorizationStep: signer ? 'connected' : 'connect'
      }
    }
  },
  extraReducers: (builder) => {},
})

// Extract the action creators object and the reducer
const { actions, reducer } = userSlice
// Extract and export each action creator by name
const {
  setUserChainId,
  setUserAddress,
  setSigner,
  setConnectedUserData,
  setAuthorizationStep
} = actions

export {
  setUserChainId,
  setUserAddress,
  setSigner,
  setConnectedUserData,
  setAuthorizationStep
}

// Export the reducer, either as a default or named export
export default reducer