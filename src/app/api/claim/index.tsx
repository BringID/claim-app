import { api } from '@/utils'
import {
  TAddClaim,
  TAddClaimResponse
} from './types'
const TASK_MANAGER_API = 'https://task-manager-base-sepolia.bringid.org';

const addClaim: TAddClaim = (
  proofs,
  drop,
  to
) => api<TAddClaimResponse>(
  `${TASK_MANAGER_API}/api/v1/claim/tasks`,
  'POST',
  {},
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