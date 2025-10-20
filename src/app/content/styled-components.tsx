import styled from "styled-components"
import { Widget } from "@/components/common"
import {
  Button,
  OptionWidgets,
  Text,
  Steps,
  Note,
  SmallText,
  ConnectButton,
  SuccessNote,
  Link
} from '@/components/common'
import { LightningIcon } from '@/components/icons'
import { TokenCounter } from '../components'

export const ConnectButtonStyled = styled(ConnectButton)`
  width: 100%;
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


export const StepsStyled = styled(Steps)`

`

export const StepsContainer = styled.div`
  padding: 0  0 16px 0;
`

export const WidgetStyled = styled(Widget)`
  margin-bottom: 16px;
`


export const TextStyled = styled(Text)`
  text-align: center;
`

export const NoteStyled = styled(Note)`
  margin: 24px 0;
`

export const SmallTextStyled = styled(SmallText)`
  text-align: center;
`

export const SuccessNoteStyled = styled(SuccessNote)`
  margin: 24px 0;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const LinkStyled = styled(Link)`
  color: ${props => props.theme.extraTextColor};
`