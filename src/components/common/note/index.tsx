import TProps from "./types"
import { FC } from 'react'
import {
  Container,
  Content
} from './styled-components'
import { ExclimationIcon } from "@/components/icons"

const Note: FC<TProps> = ({
  children,
  className
}) => {
  return <Container
    className={className}
  >
    <ExclimationIcon />
    <Content>
      {children}
    </Content>
  </Container>
}

export default Note