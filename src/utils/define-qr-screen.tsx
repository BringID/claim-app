type TDefineQRScreen = (
  error: number | null
) => any

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