export interface IProps {
  title?: string
  disabled?: boolean
  onChange?: (value: any) => void
  className?: string
  value?: Date
  note?: string
  minDate?: Date
  dateFormat?: string | string[] | undefined
}
