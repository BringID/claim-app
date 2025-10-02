import { api } from '@/utils'
import {
  TAddClaim,
  TAddClaimResponse
} from './types'
import {
  zuploApiUrl,
  zuploKey
} from '@/app/configs'

const addClaim: TAddClaim = (
  proofs,
  drop,
  to
) => api<TAddClaimResponse>(
  `${zuploApiUrl}/v1/task-manager/base-sepolia/claim/tasks`,
  'POST',
  {
    'Authorization': `Bearer ${zuploKey}`,
  },
  {
    proofs,
    drop,
    to
  }
)

const taskManager = {
  addClaim
}

export default taskManager