import {
  Title,
  Subtitle,
  IntroText,
  Text
} from "@/components/common"
import styled from "styled-components"
import {
  LockIcon,
  ShieldIcon,
  CodeIcon,
  KeyIcon,
  ArrowsIcon,
  CupIcon,
  PlanetIcon
} from '@/components/icons'

export const TitleStyled = styled(Title)`
  margin: 0 0 8px;
`

export const SubtitleStyled = styled(Subtitle)`
  margin: 0 0 16px;
`

export const IntroTextStyled = styled(IntroText)`
  margin-bottom: 16px!important;
  max-width: 672px;
`

export const Section = styled.section`
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 1px solid ${props => props.theme.primaryBorderColor};
`

export const TextStyled = styled(Text)`
  margin-bottom: 24px;
`

export const WidgetNumber = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: ${props => props.theme.secondaryBackgroundColor};
  line-height: 32px;
  font-size: 14px;
  text-align: center;
  color: ${props => props.theme.secondaryTextColor};
`



export const MainTag = styled.div`
  display: flex;
  padding-top: 10px;
  gap: 8px;
  font-family: 'Menlo', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  align-items: center;
  font-size: 14px;
  color: ${props => props.theme.extraTextColor};
  line-height: 1;
  margin-bottom: 16px;
`

export const PlanetIconStyled = styled(PlanetIcon)`
  max-width: 16px;
`

export const LockIconStyled = styled(LockIcon)`
    max-width: 16px;

`


export const CupIconStyled = styled(CupIcon)`
    max-width: 16px;

`

export const CodeIconStyled = styled(CodeIcon)`
  max-width: 16px;;
`

export const ShieldIconStyled = styled(ShieldIcon)`
  max-width: 16px;
  stroke: ${props => props.theme.primaryTextColor};
`

export const KeyIconStyled = styled(KeyIcon)`
  max-width: 16px;
  stroke: ${props => props.theme.primaryTextColor};
`