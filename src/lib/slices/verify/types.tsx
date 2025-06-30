import {
  TWebproof
} from '@/types'

export interface TInitialState {
  webproof: TWebproof | null
  ephemeralKey: string | null
  verified: boolean
  loading: boolean
}
