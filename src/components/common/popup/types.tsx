type TProps = {
  children?: React.ReactNode

  title?: string
  subtitle?: string

  buttonAction?: () => void
  buttonTitle?: string
  buttonDisabled?: boolean
  buttonLoading?: boolean
  onClose: () => void
}

export default TProps