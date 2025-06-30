import { StatusIndicator } from './styled-components'
import { FC } from 'react'
import TProps from './types'

const Component: FC<TProps> = ({
  status
}) => {
  return <StatusIndicator status={status} />
}

export default Component