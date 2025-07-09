import { TTaskServer } from "@/types"

type TAddClaimResponse = Promise<{
  success: boolean
  task: TTaskServer
}>

type TAddClaim = (
  merkleTreeDepth: number,
  merkleTreeRoot: string,
  verificationId: string,
  nullifier: string,
  message: string,
  points: string[],
  scope: string,
  drop: string,
  to: string
) => Promise<TAddClaimResponse>

export type {
  TAddClaim,
  TAddClaimResponse
}