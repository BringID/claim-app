import { FC } from 'react'
import {
  Title,
  Container
} from './styled-components'
import TProps from './types'

const SignMessage: FC<TProps> = ({
  title,
  className,
  children
}) => {
  return <Container className={className}>
    <Title>{title || 'Message to sign:'}</Title>
    {children}
  </Container>
}

export default SignMessage