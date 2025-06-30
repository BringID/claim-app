'use client'

import { FC } from 'react'
import {
  TokenAmount,
  SymbolERC20,
  Container,
  ImageStyled,
  SubtitleStyled,
  TextStyled
} from './styled-components'
import { CoinIcon } from '@/components/icons'
import {
  formatTokensAmount
} from '@/utils'
import { ethers } from 'ethers'
import TProps, { TStatus } from './types'

const defineText = (status?: TStatus) => {
  switch (status) {
    case 'finished':
      return null
    default:
      return <>The tokens are waiting for you.<br/>Claim them now, it’s free.</>
  }
}

const defineTitle = (status?: TStatus) => {
  switch (status) {
    case 'finished':
      return 'You have received'
    default:
      return 'You were sent'
  }
}

const ERC20TokenPreview: FC<TProps> = ({
  src,
  amount,
  decimals,
  name,
  status
}) => {
  return <Container> 
    <SubtitleStyled>
      {defineTitle(status)} 
      <CoinIcon />
      <SymbolERC20>{name}</SymbolERC20>
    </SubtitleStyled>
    
    <TokenAmount>
      {formatTokensAmount(amount as string, decimals)} 
    </TokenAmount>
    <TextStyled>
      {defineText(status)}
    </TextStyled>
  </Container>
}

export default ERC20TokenPreview