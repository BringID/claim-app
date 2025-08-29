'use client'

import {
  FC,
} from 'react'
import {
  Container,
  Title,
  LinkStyled,
  Content,
  ImageStyled,
  ImageContainer,
  AudienceUsers,
  TitleContainer
} from './styled-components'  
import { TProps } from './types'
import {
  formatTokensAmount
} from '@/utils'
import { toUtf8String } from 'ethers'
import {
  AudienceBlock,
  DropData
} from './components'
import ZKBringLogo from '@/images/zkbring-logo.png'
import {
  defineAudiencePreviewIcon
} from '@/utils'
import {
  environment
} from '@/app/configs/index'
import { TEnvironment } from '@/types'

const Drop: FC<TProps> = ({
  drop
}) => {
  const {
    title,
    address,
    maxClaims,
    amount,
    symbol,
    decimals
  } = drop

  const amountFormatted = formatTokensAmount(amount, decimals)
  const Icon = defineAudiencePreviewIcon(drop.zkPassSchemaId)

  return null
}

export default Drop
