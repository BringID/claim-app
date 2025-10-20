import { TProcessStage } from "@/types"

type TProps = {
  setStage: (stage: TProcessStage) => void
  claimAddress: string | null,
}

export default TProps