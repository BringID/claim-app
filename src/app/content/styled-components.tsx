import styled from "styled-components"
import { Widget } from "@/components/common"
import {
  Button,
  OptionWidgets
} from '@/components/common'
import { LightningIcon } from '@/components/icons'
import { TokenCounter } from '../components'
export const WidgetStyled = styled(Widget)`

`

export const ButtonStyled = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const OptionWidgetsStyled = styled(OptionWidgets)`
  margin: 0 0 24px;
`

export const LightningIconStyled = styled(LightningIcon)`
  max-width: 16px;
`

export const TokenCounterStyled = styled(TokenCounter)`
  margin: 24px 0;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: none;
  }
`