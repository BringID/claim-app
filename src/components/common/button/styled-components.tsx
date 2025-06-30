import styled, { css } from 'styled-components'
import Loader from '../loader'
import { TProps } from './types'
import Link from '../link'
import Spinner from '../spinner'

export const ButtonLoader = styled(Loader)`
  margin-right: 8px;
`

export const Button = styled.button.attrs((props) => ({
  className: props.className,
}))<TProps>`
  cursor: pointer;
  font-family: 'Menlo', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 8px 16px;
  font-size: 14px;
  height: 40px;
  line-height: 1;
  display: flex;
  align-items: center;
  font-weight: 400;
  justify-content: center;
  border-radius: 6px;
  min-width: 50px;
  position: relative;
  //default
  transition: color 0.3s, background-color 0.3s, border-color 0.3s;
  background-color: ${(props) =>
    props.theme && props.theme.buttonDefaultBackgroundColor};
  color: ${(props) => props.theme && props.theme.additionalTextColor};
  border: 1px solid;
  border-color: ${(props) => props.theme && props.theme.buttonDefaultBorderColor};
  box-sizing: border-box;

  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        border-color: ${(props) =>
          (props.theme && props.theme.buttonDefaultBorderHoverColor)};
        background-color: ${(props) =>
          (props.theme && props.theme.buttonDefaultBackgroundHoverColor)};
      }
      &:active {
        border-color: ${(props) =>
          (props.theme && props.theme.buttonDefaultBorderActiveColor)};
        background-color: ${(props) =>
          (props.theme && props.theme.buttonDefaultBackgroundActiveColor)};
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
      color: ${(props) => props.theme && props.theme.secondaryTextColor};

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
    props.appearance === 'additional' &&
    css`
      background-color: ${(props) =>
        (props.theme && props.theme.buttonAdditionalBackgroundColor)};
      border-color: ${(props) =>
        (props.theme && props.theme.buttonAdditionalBorderColor)};
      color: ${(props) => (props.theme && props.theme.secondaryTextColor)};
      ${!props.disabled &&
      css`
        &:hover {
          background-color: ${(props) =>
            (props.theme && props.theme.buttonAdditionalBackgroundHoverColor)};
          color: ${(props) => (props.theme && props.theme.primaryTextColor)};
          border-color: ${(props) => (props.theme && props.theme.buttonAdditionalBorderHoverColor)};
        }
        &:active {
          background-color: ${(props) =>
            (props.theme && props.theme.buttonAdditionalBackgroundActiveColor)};
          color: ${(props) => (props.theme && props.theme.primaryTextColor)};
          border-color: ${(props) => (props.theme && props.theme.buttonAdditionalBorderHoverColor)};
        }
      `}
    `}

  ${(props) =>
    props.loading &&
    css`

      cursor: not-allowed;
      color: transparent!important;
      

      ${!props.disabled &&
      css`
        &:hover {
          background-position: right top;
        }
        &:active {
          background-position: center center;
          transform: scale(1.01);
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

export const ExternalLink = styled.a`
  text-decoration: none;
  width: max-content;
  display: inline-block;
`

export const InternalLink = styled(Link)`
  text-decoration: none;
  width: max-content;
  display: inline-block;
`

export const SpinnerStyled = styled(Spinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
`
