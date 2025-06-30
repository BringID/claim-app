import React, { FC } from 'react'
import { ProgressBarContainer, Bar } from './styled-components'
import { TProps } from './types'

const ProgressBar: FC<TProps> = ({ className, current, max }) => {
  const value = (current / max) * 100
  return (
    <ProgressBarContainer className={className}>
      <Bar
        style={{
          width: `${value}%`,
        }}
      />
    </ProgressBarContainer>
  )
}

export default ProgressBar
