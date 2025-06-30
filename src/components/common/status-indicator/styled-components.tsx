import styled, { css } from 'styled-components'
import TProps from './types'

export const StatusIndicator = styled.span<TProps>`
  width: 6px;
  display: block;
  height: 6px;
  border-radius: 50%;
  background-color: ${props => props.theme.successStatusColor};

  ${props => props.status === 'error' && css`
    background-color: ${props => props.theme.errorStatusColor};
  `}
`