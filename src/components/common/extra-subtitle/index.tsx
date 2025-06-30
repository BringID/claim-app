'use client'

import { FC } from 'react'
import TProps from './types'
import { 
  ExtraSubtitleComponent
} from './styled-components'

const Subtitle: FC<TProps> = ({
  children,
  className
}) => {
  return <ExtraSubtitleComponent className={className}>
    {children}
  </ExtraSubtitleComponent>
}

export default Subtitle
