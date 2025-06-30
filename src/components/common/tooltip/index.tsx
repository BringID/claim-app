import { FC } from 'react'
import TProps from './types'
import { TooltipContainer } from './styled-components'

const Tooltip: FC<TProps> = ({
  text,
  children,
  position = 'top'
}) => {
  return <TooltipContainer position={position} text={text}>{children}</TooltipContainer>
}

export default Tooltip