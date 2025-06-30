import {
  TWebproof
} from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TInitialState } from './types'
// import {

// } from './actions'
// import {

// } from './async-actions'

const initialState: TInitialState = {
  webproof: null,
  ephemeralKey: null,
  verified: false,
  loading: false
}

const verifySlice = createSlice({
  name: 'velify',
  initialState,
  reducers: {
    setWebproof: (state, action: PayloadAction<TWebproof>) => ({
      ...state, webproof: action.payload
    }),

    setEphemeralKey: (state, action: PayloadAction<string>) => ({
      ...state,
      ephemeralKey: action.payload
    }),

    setVerifyLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      loading: action.payload
    }),
    setVerified: (state, action: PayloadAction<boolean>) => ({
      ...state,
      verified: action.payload
    }),
   
  },
  extraReducers: (builder) => {
    
  },
})

// Extract the action creators object and the reducer
const { actions, reducer } = verifySlice
// Extract and export each action creator by name
const {
  setVerifyLoading,
  setEphemeralKey,
  setWebproof,
  setVerified
} = actions

export {
  setVerifyLoading,
  setEphemeralKey,
  setWebproof,
  setVerified
}

// Export the reducer, either as a default or named export
export default reducer