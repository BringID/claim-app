
import { TTier } from "@/types"
import tiers from "@/app/configs/tiers"

type TDefineTierData = (
  tierId: string | null
) => TTier | null

const defineTierData: TDefineTierData = (tierId) => {
  return tiers.find(tier => tier.id === tierId) || null
}

export default defineTierData
