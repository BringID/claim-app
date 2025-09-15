import { styled, css } from "styled-components"
import {
  Button
} from '@/components/common'

export const Main = styled.main`
  margin: 0 auto 40px;
  max-width: 896px;
  padding: 20px 16px;
  min-height: calc(100vh - 190px - 40px);

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    padding: 20px;
    min-height: calc(100vh - 140px - 40px);
  }
`

export const ButtonStyled = styled(Button)`
  ${props => props.appearance === 'additional' && css`
    border-color: ${props.theme.additionalBorderColor};
    color: ${props.theme.additionalTextColor};
    background-color: rgba(255, 255, 255, .07);
    min-width: 112px;

    &:hover {
      border-color: ${props.theme.additionalBorderColor};
      color: ${props.theme.additionalTextColor};
    }
  `}
`