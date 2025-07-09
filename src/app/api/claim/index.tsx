import { api } from '@/utils'
import {
  TAddClaim,
  TAddClaimResponse
} from './types'
const TASK_MANAGER_API = 'https://zkbring-task-manager-5000565ab7bd.herokuapp.com'

const addClaim: TAddClaim = (
  proofs,
  drop,
  to
) => api<TAddClaimResponse>(
  `${TASK_MANAGER_API}/api/v1/tasks/claim`,
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