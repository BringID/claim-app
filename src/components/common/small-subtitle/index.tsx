'use client'

import { FC } from 'react'
import TProps from './types'
import { 
  SubtitleComponent
} from './styled-components'

const SmallSubtitle: FC<TProps> = ({
  children,
  className
}) => {
  return <SubtitleComponent className={className}>
    {children}
  </SubtitleComponent>
}

export default SmallSubtitle
