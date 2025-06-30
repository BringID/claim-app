import TProps from "./types"
import { FC } from 'react'
import {
  Container,
  Title
} from './styled-components'

const SuccessNote: FC<TProps> = ({
  children,
  className,
  title
}) => {
  return <Container
    className={className}
  >
    {title && <Title>
      {
        title
      }
    </Title>}
    {children}
  </Container>
}

export default SuccessNote