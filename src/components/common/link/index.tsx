
"use client"
import { FC } from 'react'
import TProps from './types'
import { 
  LinkExternal,
  LinkInternal
} from './styled-components'

const LinkComponent: FC<TProps> = ({
  children,
  className,
  href,
  target,
  to
}) => {
  if (to) {
    return <LinkInternal
      className={className}
      target={target}
      href={to}
    >
      {children}
    </LinkInternal>
  }
  return <LinkExternal
    className={className}
    target={target}
    href={href}
  >
    {children}
  </LinkExternal>
}

export default LinkComponent
