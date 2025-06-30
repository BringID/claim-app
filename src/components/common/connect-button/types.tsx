import {
  TButtonAppearance
} from '@/types'

type TProps = {
  children?: React.ReactNode | React.ReactNode[]
  appearance?: TButtonAppearance
  size?: 'default' | 'small'
  disabled?: boolean
  onConnect?: () => void
  className?: string
}

export default TProps