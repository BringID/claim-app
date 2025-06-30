type TStatItem = {
  title: string
  value: string
  limit?: string
  icon?: React.ReactNode
}

type TProps = {
  stats: TStatItem[]
  className?: string
}

export default TProps