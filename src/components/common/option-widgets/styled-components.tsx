import styled, { css } from "styled-components"
import { ExtraSubtitle, Widget, SmallText } from ".."

export const WidgetStyled = styled(Widget)<{
  active: boolean
}>`
  padding: 16px 24px 24px;
  opacity: 0.6;

  ${props => props.active && css`
    opacity: 1;
    border-color: ${props => props.theme.secondaryBorderColor};
  `}

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    padding: 16px;
  }
`

export const WidgetStyledContent = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr max-content;
  align-items: center;
  gap: 12px;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-template-columns: 32px 1fr max-content;
  }
`

export const WidgetStyledTexts = styled.div``



export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    margin-top: 16px!important;
  }
`

export const SmallTextStyled = styled(SmallText)`
`

export const Title = styled(ExtraSubtitle)`
  margin: 0px;
`

export const Subtitle = styled(ExtraSubtitle)`
  margin: 0px 0 4px;
  font-size: 12px;
  line-height: 1;
  font-family: SFMono-Regular, Menlo, "Courier New", monospace;
`

export const IdWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-size: 32px;
  min-width: 64px;
  height: 64px;
  border-radius: 64px;
  background-color: ${props => props.theme.additionalBackgroundColor};


  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    font-size: 20px;
    min-width: 32px;
    min-height: 32px;
    height: 32px;
  }
  
`

export const Value = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin: 0;
  font-family: SFMono-Regular, Menlo, "Courier New", monospace;
`