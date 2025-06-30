import {
  TClaimScreen,
  TLinkItemStatus,
  TClaimError
} from '@/types'

type TDefineInitialClaimScreen = (
  error: number | null,
  expiration?: number | null, 
  status?: TLinkItemStatus,
) => (TClaimScreen | TClaimError)

const defineInitialClaimScreen: TDefineInitialClaimScreen = (
  error,
  expiration,
  status,
) => {
  if (error) {
    if (error === 404) {
      return 'link_not_found'
    }
  }

  if (expiration) {
    if (Number(expiration) < +new Date()) {
      return 'link_expired'
    }
  }

  if (error === 500) {
    return 'server_error'
  }

  if (status === 'redeemed') {
    return 'already_claimed'
  }

  return 'initial'
}

export default defineInitialClaimScreen