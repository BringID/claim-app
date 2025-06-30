'use client'

import { FC } from 'react'
import { TProps } from './types'
import {
  Loader
} from './styled-components'

const LoaderComponent: FC<TProps> = ({ size = 'default', className = '' }) => {
  return <Loader className={className} size={size} />
}

export default LoaderComponent