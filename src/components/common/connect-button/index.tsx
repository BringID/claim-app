import { FC } from 'react'
import {
  ConnectWalletStyled
} from './styled-components'
import Button from '../button'
import TProps from './types'

const ConnectButton: FC<TProps> = ({
  children,
  size = 'default',
  appearance = 'action',
  disabled,
  onConnect,
  className
}) => {
  if (disabled) {
    return <Button
      className={className}
      appearance={appearance}
      disabled
      size={size}
    >
      {children || 'Connect wallet'}
    </Button>
  }

  return <ConnectWalletStyled
    size={size}
    className={className}
    disabled={disabled}
    text={children || 'Connect wallet'}
    appearance={appearance}
    onConnect={onConnect}
  />
}

export default ConnectButton