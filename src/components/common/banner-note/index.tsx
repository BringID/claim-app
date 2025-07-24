import TProps from "./types"
import { FC } from 'react'
import {
  Container,
  Title
} from './styled-components'

const BannerNote: FC<TProps> = ({
  children,
  className,
  title,
  status
}) => {
  return <Container
    className={className}
    status={status}
  >
    {title && <Title>
      {
        title
      }
    </Title>}
    {children}
  </Container>
}

export default BannerNote