'use client'
import { FC } from 'react'
import tokenSymbol from '@/images/token-placeholder.png'
import {
  TokenVideo,
  TokenVideoSource,
  ImageStyled,
  TokenImage
} from './styled-components'
import TProps from './types'

const defineSrcURL = (
  src: string
) => {
  // current solution
  if (!src.includes('ucarecdn.com')) {
    return src
  }

  return `${src}-/preview/452x452/-/format/auto/-/quality/smart/`
}

const TokenImageComponent: FC<TProps> = ({ src, alt, className }) => {
  if (!src) {
    return <ImageStyled
      alt={alt}
      src={tokenSymbol}
      width={226}
      height={226}
      className={className}
    />
  }

  if (src.includes('.mp4') || src.includes('video/mp4')) {
    return <TokenVideo muted autoPlay className={className} loop playsInline>
      <TokenVideoSource src={src} type="video/mp4"/>
      Your browser does not support the video tag.
    </TokenVideo>
  }

  const finalSrcURL = defineSrcURL(src)
  return <TokenImage
    src={finalSrcURL}
    alt={alt}
    className={className}
  />
}

export default TokenImageComponent