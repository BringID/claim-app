import { Strong } from './styled-components'
import { FC } from 'react'
import TProps from './types'

const StrongContainer: FC<TProps> = ({
  children
}) => {
  return <Strong>
    {children}
  </Strong>
}

export default StrongContainer