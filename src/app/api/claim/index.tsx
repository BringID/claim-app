import { api, defineZuploNetworkName } from '@/utils'
import {
  TAddClaim,
  TAddClaimResponse
} from './types'
import {
  zuploApiUrl,
  zuploKey,
  networkId
} from '@/app/configs'

const addClaim: TAddClaim = (
  proofs,
  drop,
  to
) => {
  const networkName = networkId ? defineZuploNetworkName(networkId) : 'base'

  return api<TAddClaimResponse>(
    `${zuploApiUrl}/v1/task-manager/${networkName}/claim/tasks`,
    'POST',
    {
      'Authorization': `Bearer ${zuploKey}`,
    },
    {
      proofs,
      drop,
      to
    }
  )}
const taskManager = {
  addClaim
}

export default taskManager