import styled, { css } from 'styled-components'
import {
  Text,
  Widget,
  SmallSubtitle
} from 'components/common'

export const WidgetStyled = styled(Widget)`

` 

export const SmallSubtitleStyled = styled(SmallSubtitle)`

`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const TextStyled = styled(Text)`

`

export const EditButton = styled.div`
  cursor: pointer;
`

export const ShowMore = styled.span`
  color: ${props => props.theme.primaryTextColor};
  cursor: pointer;
`

