import type { TInitialState } from '../types'
import { PayloadAction } from '@reduxjs/toolkit'

type TArgs = {
  title: string
  description: string
  expiration: number
}

const setDropData = (
  state: TInitialState,
  action: PayloadAction<TArgs>
) => {
  const {
    title,
    description,
    expiration
  } = action.payload


  return {
    ...state,
    expiration,
    title,
    description
  }
}

export default setDropData
