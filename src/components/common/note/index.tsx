import TProps from "./types"
import { FC } from 'react'
import { Container } from './styled-components'
import { ExclimationIcon } from "@/components/icons"

const Note: FC<TProps> = ({
  children,
  className
}) => {
  return <Container
    className={className}
  >
    <ExclimationIcon />
    {children}
  </Container>
}

export default Note