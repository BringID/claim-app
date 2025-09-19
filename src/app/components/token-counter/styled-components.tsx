import {
  Widget,
  ProgressBar,
  SmallText
} from "@/components/common"
import styled, { css } from "styled-components"
import { UsersIcon } from '@/components/icons'

export const WidgetStyled = styled(Widget)`
  padding: 16px;
`

export const ProgressBarStyled = styled(ProgressBar)<{
  finished?: boolean
}>`
  margin-top: 8px;

  ${props => props.finished && css`
    
    
      background-color: ${props => props.theme.progressBarWarningColor};
    
  `}
`

export const Texts = styled.div<{
  finished?: boolean
}>`
  display: grid;
  grid-template-columns: 20px 1fr max-content;
  column-gap: 8px;
  margin: 0 0 8px;

  ${props => props.finished && css`
    color: ${props.theme.warningStatusTextColor}
  `}
`

export const Title = styled.h3`
  font-size: 16px;
  margin: 0;
  font-weight: 600;
  font-family: Inter, Arial, Helvetica, sans-serif;
`

export const Value = styled.p`
  font-family: SFMono-Regular, Menlo, "Courier New", monospace;
  margin: 0;
  font-size: 14px;
`

export const UsersIconStyled = styled(UsersIcon)`
  max-width: 16px;
`

export const SmallTextStyled = styled(SmallText)`
  color: ${props => props.theme.warningStatusTextColor};
  margin-top: 8px;
`