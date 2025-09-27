import styled from 'styled-components'
import {
  Title,
  Text,
  Subtitle,
  List,
  Link
} from '@/components/common'


export const TitleStyled = styled(Title)`
  font-size: 50px;
  line-height: 120%;
  margin: 0 0 20px;
  text-align: center;
`

export const TextStyled = styled(Text)`
  margin-bottom: 10px;
`

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 40px;
`

export const SubtitleStyled = styled(Subtitle)`
  margin-bottom: 16px;
  margin-top: 30px;
`

export const ListStyled = styled(List)`
  list-style: decimal;
  color: ${props => props.theme.extraTextColor};
`

export const LinkStyled = styled(Link)`
  
`