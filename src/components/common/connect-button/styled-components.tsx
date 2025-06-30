import styled, { css } from 'styled-components'
import {
  ConnectWallet
  // @ts-ignore
} from 'zkbring-onchainkit/wallet'
import TProps from './types'

export const ConnectWalletStyled = styled(ConnectWallet)<TProps>`
  cursor: pointer;
  font-family: 'Geist', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 8px 16px;
  font-size: 14px;
  height: 40px;
  line-height: 1;
  display: flex;
  align-items: center;
  font-weight: 400;
  justify-content: center;
  border-radius: 12px;
  min-width: 50px;

  //default
  transition: color 0.3s, background-color 0.3s, border-color 0.3s;
  background-color: ${(props) =>
    props.theme && props.theme.buttonActionBackgroundColor};
  color: ${(props) => props.theme && props.theme.secondaryTextColor};
  border: 1px solid;
  border-color: ${(props) => props.theme && props.theme.buttonActionBorderColor};
  box-sizing: border-box;

  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        border-color: ${(props) =>
          (props.theme && props.theme.buttonActionBorderHoverColor)};
        background-color: ${(props) =>
          (props.theme && props.theme.buttonActionBackgroundHoverColor)};
      }
      &:active {
        border-color: ${(props) =>
          (props.theme && props.theme.buttonActionBorderActiveColor)};
        background-color: ${(props) =>
          (props.theme && props.theme.buttonActionBackgroundActiveColor)};
      }
    `}

  ${props => props.size === 'small' && css`
    padding: 4px 8px;
    height: 28px;
    font-size: 14px;
    border-radius: 8px;
  `}

  ${props => props.appearance === 'default' && css`
    span {
      color: ${(props) => props.theme && props.theme.additionalTextColor};
    }
  `}



  ${(props) =>
    props.size === 'small' &&
    css`
      padding: 12px 18px;
      height: 30px;
      min-width: 30px;
      font-size: 14px;
      border-radius: 8px;
    `}

  ${(props) =>
    props.appearance === 'action' &&
    css`
      border: none;
      background-color: ${(props) =>
        props.theme && props.theme.buttonActionBackgroundColor};
      color: ${(props) => props.theme && props.theme.additionalTextColor};

      ${!props.disabled &&
      css`
        &:hover {
          background-color: ${(props) =>
            props.theme && props.theme.buttonActionBackgroundHoverColor};
        }
        &:active {
          background-color: ${(props) =>
            props.theme && props.theme.buttonActionBackgroundActiveColor};
        }
      `}
    `}

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      color: ${(props) => props.theme && props.theme.buttonDisabledTextColor};
      border-color: ${(props) => props.theme && props.theme.buttonDisabledBorderColor};
      background-color: ${(props) => props.theme && props.theme.buttonDisabledBackgroundColor};
    `}

`