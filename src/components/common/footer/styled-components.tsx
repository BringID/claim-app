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

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    flex-direction: column;
    align-items: start;
    gap: 16px;
    font-size: 12px;
  }
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
  justify-content: center;
  border-top: 1px solid ${props => props.theme.primaryBorderColor};
  padding: 16px 0 0;
  font-size: 14px;
  text-align: center;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    gap: 20px;
  }
`

export const LinkStyled = styled(Link)`
  font-size: 14px;
  color: ${props => props.theme.primaryTextColor};
`

