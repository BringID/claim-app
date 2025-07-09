import { api } from '@/utils'
import {
  TAddClaim,
  TAddClaimResponse
} from './types'
const TASK_MANAGER_API = 'https://zkbring-task-manager-5000565ab7bd.herokuapp.com'

const addClaim: TAddClaim = (
  merkleTreeDepth,
  merkleTreeRoot,
  verificationId,
  nullifier,
  message,
  points,
  scope,
  drop,
  to
) => api<TAddClaimResponse>(
  `${TASK_MANAGER_API}/api/v1/tasks/claim`,
  'POST',
  {},
  {
    verification_id: verificationId,
    merkle_tree_depth: merkleTreeDepth,
    merkle_tree_root: merkleTreeRoot,
    nullifier,
    message,
    points,
    scope,
    drop,
    to
  }
)

const taskManager = {
  addClaim
}

export default taskManager