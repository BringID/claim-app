import { TTaskServer, TSemaphoreProof } from "@/types"

type TAddClaimResponse = Promise<{
  success: boolean
  task: TTaskServer
}>

type TAddClaim = (
  proofs: TSemaphoreProof[],
  drop: string,
  to: string
) => Promise<TAddClaimResponse>

export type {
  TAddClaim,
  TAddClaimResponse
}