import tiers from "@/app/configs/tiers"

type TDefineCurrentTier = (
  score: number
) => string | null

const defineCurrentTier: TDefineCurrentTier = (score) => {
  for (let x = 0; x < tiers.length; x++) {
    if (score <= tiers[x].max && score >= tiers[x].min) {
      return tiers[x].id
    }
  }

  return null
}

export default defineCurrentTier
