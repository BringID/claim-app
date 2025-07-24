export type TBannerNoteStatus = 'error' | 'default' | 'warning'

type TProps = {
  title?: string
  className?: string
  children?: React.ReactNode | React.ReactNode[]
  status?: TBannerNoteStatus
}

export default TProps