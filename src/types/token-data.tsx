import TTokenStandard from "./token-standard"

type TTokenData = {
  symbol: string,
  decimals: number,
  description?: string,
  address: string,
  id?: string
  amount?: string
  image?: string
  standard: TTokenStandard
}

export default TTokenData
