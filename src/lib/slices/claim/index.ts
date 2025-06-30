import { TWalletName } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TInitialState } from './types'

const initialState: TInitialState = {
  claimed: false,
  txHash: null
}

const claimSlice = createSlice({
  name: 'claim',
  initialState,
  reducers: {
    setClaimed: (state, action: PayloadAction<boolean>) => ({
      ...state, claimed: action.payload
    }),

    setTxHash: (state, action: PayloadAction<string | null>) => ({
      ...state, txHash: action.payload
    }),
  },
  extraReducers: () => {
    
  }
})

// Extract the action creators object and the reducer
const { actions, reducer } = claimSlice
// Extract and export each action creator by name
export const {
  setClaimed,
  setTxHash,
} = actions
// Export the reducer, either as a default or named export
export default reducer