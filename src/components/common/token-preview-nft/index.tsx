'use client'

import { FC } from 'react'
import {
  Container,
  DoneIconStyled,
  TokenImageStyled
} from './styled-components'
import TProps from './types'

const TokenPreviewNFT: FC<TProps> = ({
  src,
  name,
  claimed
}) => {
  return <Container>
    {claimed && <DoneIconStyled />}
    <TokenImageStyled
      src={src}
      alt={name}
    />
  </Container>
}

export default TokenPreviewNFT