import {
  Widget,
  ExtraSubtitle,
  SmallText
} from "@/components/common"
import styled from "styled-components"

export const WigetStyled = styled(Widget)`
  padding: 16px 24px 24px;
  background-color: ${props => props.theme.additionalBackgroundColor};
`

export const Title = styled(ExtraSubtitle)`
  font-weight: 700;
`


export const TextStyled = styled(SmallText)`
  
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Texts = styled.div`
  
`


export const Value = styled.div`
  font-family: SFMono-Regular, Menlo, "Courier New", monospace;
  font-weight: 700;
  font-size: 24px;
  color: ${props => props.theme.primaryTextColor};
`