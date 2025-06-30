'use client'

import { FC } from 'react'
import TProps from './types'
import TokenPreviewNFT from '../token-preview-nft'
import TokenPreviewERC20 from '../token-preview-erc20'

const TokenPreview: FC<TProps> = ({
  tokenStandard,
  name,
  src,
  className,
  decimals,
  amount,
  claimed
}) => {
  if (tokenStandard === 'ERC20') {
    return <TokenPreviewERC20
      className={className}
      src={src}
      name={name}
      decimals={decimals}
      amount={amount}
    />
  }
  return <TokenPreviewNFT
    src={src}
    claimed={claimed}
    name={name}
    className={className}
  />
}

export default TokenPreview