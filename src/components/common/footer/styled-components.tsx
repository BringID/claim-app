import { styled } from "styled-components"
import {
  Link,
  SmallText
} from '@/components/common'

export const Footer = styled.footer`
  display: flex;
  padding: 32px 16px;
  color: ${props => props.theme.primaryTextColor};
  max-width: 896px;
  margin: 0 auto;
`

export const FooterContent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    gap: 20px;
  }
`

export const FooterMeta = styled.div`
  display: flex;
  margin-left: auto;
  gap: 40px;
  align-items: center;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: none;
  }
`

export const FooterLicense = styled.span`
  font-size: 12px;
  display: inline-block;
  line-height: 1;
  color: ${props => props.theme.primaryTextColor};
  border: 1px solid ${props => props.theme.primaryBorderColor};
  padding: 4px 10px;
  font-weight: 700;
  border-radius: 999px;
`

export const FooterMetaItem = styled(SmallText)`
  
`

export const LinkStyled = styled(Link)`
  font-size: 14px;
  color: ${props => props.theme.primaryTextColor};
`

