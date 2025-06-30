
import styled, { css } from 'styled-components'
import {
  TAccount
} from '../types'

export const Account = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${props => props.theme.additionalTextColor};
  font-size: 14px;
`

export const Address = styled.div<TAccount>`
  color: ${props => props.theme.primaryTextColor};
  display: flex;
  gap: 3px;
  align-items: center;
`

export const Profile = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: end;
  font-size: 12px;
  margin-left: auto;
  color: ${props => props.theme.additionalTextColor};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: none;
  }
`

export const Logout = styled.div`
  cursor: pointer;
  transition: all .3s;
  height: auto;
  &:hover {
    ${props => {
      return css`
        border-color: transparent;
        background-color: ${props.theme.tagDefaultColor};
      `
    }};
  }
`
