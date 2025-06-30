import React, { FC } from 'react'
import { ProgressBarContainer, Dash } from './styled-components'
import { TProps } from './types'

const DashedProgressBar: FC<TProps> = ({
  className,
  current,
  max,
  dashCount
}) => {
  const value = current / max // example - 0.03
  const dashesFilled = Math.ceil(dashCount * value) // 1
  return (
    <ProgressBarContainer className={className} dashCount={dashCount}>
      {new Array(dashCount).fill(null).map((item, idx) => {
        if ((idx + 1) <= dashesFilled) {
          return <Dash filled key={idx} />
        }
        return <Dash key={idx} />
      })}
    </ProgressBarContainer>
  )
}

export default DashedProgressBar
