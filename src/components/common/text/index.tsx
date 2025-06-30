'use client'

import React, { FC } from 'react'
import { TextComponent } from './styled-components'

import TProps from './types'

const Text: FC<TProps> = ({ children, className }) => {
  return <TextComponent className={className}>{children}</TextComponent>
}

export default Text