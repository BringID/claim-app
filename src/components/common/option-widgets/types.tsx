type TOnChange = (value: string) => void

type TDataItem = {
  title: string
  description: string
  subtitle: string
  value: string
  id: string
}

export type TProps = {
  data: TDataItem[]
  activeOption?: string | null
  onChange?: TOnChange
  className?: string
}