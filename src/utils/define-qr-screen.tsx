import {
  TQRScreen
} from '@/types'

type TDefineQRScreen = (
  error: number | null
) => TQRScreen

const defineQRScreen: TDefineQRScreen = (
  error
) => {
  if (error) {
    if (error === 404) {
      return 'qr_not_found'
    }
  }


  return 'qr_not_found'
}

export default defineQRScreen