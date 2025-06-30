'use client'

import { FC } from 'react'
import TProps from './types'
import {
  ButtonsContainer
} from './styled-components'

const ButtonsContainerComponent: FC<TProps> = ({
  children
}) => {
  return <ButtonsContainer>
    {children}
  </ButtonsContainer>
}

export default ButtonsContainerComponent