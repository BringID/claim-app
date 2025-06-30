"use client"
import { FC } from 'react'
import { ButtonStyled } from './styled-components'
import { defineExplorerURL } from '@/utils'
import TProps from './types'

const ExplorerButton: FC<TProps> = ({
  chainId,
  hash
}) => {
  if (!chainId) { return null }
  const explorerUrl = chainId && hash ? <ButtonStyled
    onClick={() => {
      window.open(`${defineExplorerURL(chainId)}/tx/${hash}`, '_blank')
    }}
    title='View in Explorer'
  /> : null

  return explorerUrl
}

export default ExplorerButton
