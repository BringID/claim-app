import { api } from '@/utils'
import {
  TAddClaim,
  TAddClaimResponse
} from './types'
const TASK_MANAGER_API = 'https://task-manager-production-4062.up.railway.app';

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