import styled from "styled-components"
import { TAccount } from './types'
import Link from '../link'

export const Header = styled.header<TAccount>`
  position: relative;
  width: 100%;
  background-color: ${props => props.theme.blankColor};
  border-bottom: 1px solid ${props => props.theme.primaryBorderColor};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    min-height: 30px;
    padding: 20px;
    margin-bottom: 0px;
    grid-template-columns: 1fr auto;
  }
`

export const Content = styled.div`
  padding: 0px 16px;
  margin: 0 auto;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  display: grid;
  min-height: 48px;
  height: 100%;
  max-width: 896px;
`

export const LogoLink = styled(Link)`
  justify-self: start;
  font-size: 14px;
  gap: 12px;
  display: flex;
  align-items: center;
  font-weight: 400;
  color: ${props => props.theme.primaryTextColor};
  line-height: 1;
  text-decoration: none;
`

export const Logo = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: ${props => props.theme.secondaryBackgroundColor};
`