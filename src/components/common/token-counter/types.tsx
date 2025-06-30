
type TProps = {
  value: number | bigint
  max: number | bigint
  action: (
    isStaked: boolean 
  ) => void
  isStaked: boolean
  actionTitle?: string
  tokenSymbol: string
  tokenIcon: React.ReactNode
}


export default TProps