import type { TInitialState } from '../types'
import { PayloadAction } from '@reduxjs/toolkit'

const setZKTLSOptionsAction = (state: TInitialState, action: PayloadAction<{
  zkPassAppId: string,
  zkPassSchemaId: string
}>) => {
  const {
    zkPassAppId,
    zkPassSchemaId
  } = action.payload

   return {
    ...state,
    loading: false,
    zkPassAppId,
    zkPassSchemaId
   }
}

export default setZKTLSOptionsAction
