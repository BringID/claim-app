import styled from "styled-components"
import { TAccount } from './types'
import Link from '../link'
import Image from 'next/image'

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
  grid-template-columns: 1fr min-content max-content;
  display: grid;
  min-height: 48px;
  height: 100%;
  max-width: 896px;
`

export const LogoLink = styled(Link)`
  justify-self: start;
  font-size: 20px;
  gap: 8px;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: ${props => props.theme.primaryTextColor};
  line-height: 1;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.primaryTextColor};
  }
`

export const ImageStyled = styled(Image)`

`