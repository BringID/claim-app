import { TTokenStandard } from "@/types"

export type TInitialState = {
  address: string | null
  decimals: number | null
  symbol: string | null
  image: string | null
  standard: TTokenStandard | null
  amount: string | null
}