'use client'

import React, { FC } from 'react'
import {
  Button,
  ExternalLink,
  InternalLink,
  SpinnerStyled
} from './styled-components'
import { TProps } from './types'

const defineContent = (
  loading: boolean,
  children: React.ReactNode | React.ReactNode[],
  title?: string
) => {
  if (loading) {
    if (title) return <>
      <SpinnerStyled />
      {title}
    </>

    if (children) return <>
      <SpinnerStyled />
      {children}
    </>
  }

  if (title) return title

  if (children) return children
}

const ButtonOriginalComponent: FC<TProps> = ({
  title,
  disabled = false,
  loading,
  onClick,
  appearance = 'default',
  className,
  size = 'default',
  children,
}) => {
  return (
    <Button
      disabled={disabled}
      onClick={() => {
        if (loading || !onClick || disabled) {
          return
        }
        onClick()
      }}
      appearance={appearance}
      loading={loading}
      className={className}
      size={size}
      data-testid='button'
    >
      {defineContent(
        Boolean(loading),
        children,
        title
      )}
    </Button>
  )
}


const ButtonComponent: FC<TProps> = (props) => {
  const {
    href,
    to,
    target,
    className,
    size
  } = props
  if (href) {
    return (
      <ExternalLink href={href} target={target}>
        <ButtonOriginalComponent {...props} size={size} className={className} />
      </ExternalLink>
    )
  }

  if (to) {
    return <InternalLink to={to}>
      <ButtonOriginalComponent {...props} size={size} />
    </InternalLink>
  }

  return <ButtonOriginalComponent {...props} size={size} className={className} />
}

export default ButtonComponent



