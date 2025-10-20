import { TProcessStage } from "@/types"

type TProps = {
  setStage: (stage: TProcessStage) => void
  claimAddress: string | null,
  setClaimAddress: (claimAddress: string,) => void,
}

export default TProps