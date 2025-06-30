export type TStatus = 'initial' | 'finished'

type TProps = {
  src: string
  amount: string
  decimals: number
  name: string
  status?: TStatus
  className?: string
}

export default TProps