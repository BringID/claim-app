import { TTokenStandard } from "@/types"

type TProps = {
  src: string
  amount: string
  decimals: number
  name: string
  claimed: boolean
  tokenStandard: TTokenStandard
  className?: string
}

export default TProps