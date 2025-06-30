import styled from "styled-components"
import { ExtraSubtitle, Widget, SmallText } from ".."

export const WidgetStyled = styled(Widget)`
  padding: 24px;
`

export const WidgetStyledContent = styled.div`
  display: flex;
  gap: 20px;
`

export const WidgetStyledTexts = styled.div``



export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const SmallTextStyled = styled(SmallText)`

`

export const ExtraSubtitleStyled = styled(ExtraSubtitle)`
  margin-bottom: 6px;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  border-radius: 6px;
  background-color: ${props => props.theme.additionalBackgroundColor};
`