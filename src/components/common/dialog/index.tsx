'use client'

import React,
{
  FC,
  UIEvent,
  useEffect
} from 'react'
import {
  DialogWrapper,
  Dialog,
  DialogTitle,
  IconWrapper,
  CloseButtonStyled
} from './styled-components'
import { TProps } from './types'

const DialogComponent: FC<TProps> = ({
  title,
  onClose,
  children,
  className,
  wrapperClassName,
  icon
}) => {

  useEffect(() => {
    document.body.style.overflowY = 'hidden'

    return () => {
      document.body.style.overflowY = ''
    }
  }, [])

  const onClick = (e: UIEvent<HTMLElement>) => {
    const target = e.target as HTMLElement
    const currentTarget = e.currentTarget as HTMLElement
    if (target === currentTarget) {
      onClose && onClose()
    }
  }

  return (
    <DialogWrapper
      onClick={onClick}
      className={wrapperClassName}
    >
      <Dialog className={className}>
        <CloseButtonStyled onClick={onClose}/>
        {icon && <IconWrapper>
          {icon}  
        </IconWrapper>}
        {title && <DialogTitle>{title}</DialogTitle>}
        {children}
      </Dialog>
    </DialogWrapper>
  )
}

export default DialogComponent
