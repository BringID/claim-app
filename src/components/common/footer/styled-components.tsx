import { styled } from "styled-components"
import {
  Link,
  SmallText
} from '@/components/common'

export const Footer = styled.footer`
  padding: 32px 16px;
  color: ${props => props.theme.primaryTextColor};
  max-width: 896px;
  margin: 0 auto;
`

export const FooterDescription = styled.div`
  font-size: 14px;
  text-align: center;
  margin-bottom: 24px;
`

export const FooterMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 0 0 24px;
  justify-content: center;
`

export const FooterMenuItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 1;
`


export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${props => props.theme.primaryBorderColor};
  padding: 16px 0 0;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    gap: 20px;
  }
`

export const FooterContentMain = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
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

