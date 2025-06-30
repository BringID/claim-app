import {
  ImageContainer
} from './styled-components'
import { FC } from 'react'
import TProps from './types'

const Component: FC<TProps> = ({
  icon,
  color
}) => {

  return <ImageContainer
    style={{ backgroundColor: color}}
  >
    {icon}
  </ImageContainer>
}

export default Component