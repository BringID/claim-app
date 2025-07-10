import { TSemaphoreProof } from "@/types"

type TAddClaimResponse = Promise<{
  success: boolean
  tx_hash: string
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