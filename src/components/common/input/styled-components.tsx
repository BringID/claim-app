import styled, {
  css
} from 'styled-components'
import {
  TInputContainerProps,
  TInputFieldProps,
  TInputTitleProps
} from './types'

export const InputContainer = styled.div.attrs((props) => ({
  className: props.className,
}))<TInputContainerProps>`
  margin-bottom: 24px;
  box-sizing: border-box;
`

export const InputTitle = styled.h3<TInputTitleProps>`
  margin-bottom: 4px;
  font-weight: 600;
  font-size: 16px;
  margin: 0 0 12px;
  color: ${(props) => (props.theme && props.theme.primaryTextColor)};

  ${(props) =>
    props.error &&
    css`
      color: ${(props) => (props.theme && props.theme.dangerTextColor)};
    `}
`

export const InputFieldContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  border: 1px solid ${props => props.theme.secondaryBorderColor};
  border-radius: 8px;
  overflow: hidden;
`

export const InputPrefix = styled.div`
  display: flex;
  padding: 13px 16px;
  align-items: center;
  justify-content: cetner;
  border-right: 1px solid ${props => props.theme.secondaryBorderColor};
  background-color: ${props => props.theme.inputIconZoneBackgroundColor};
`


export const InputField = styled.input<TInputFieldProps>`
  color: ${(props) => (props.theme && props.theme.primaryTextColor)};
  font-size: 16px;
  width: 100%;
  line-height: 20px;
  font-weight: 500;
  padding: 11px 16px;
  border-radius: 0;
  border: none;
  outline: none;
  margin: 0;
  background-color: ${props => props.theme.widgetBackgroundColor};

  &::placeholder {
    color: ${(props) => (props.theme && props.theme.placeholderTextColor)};
  }

  &:focus {
    outline: none;
    font-size: 16px;
  }

  ${(props) =>
    props.error &&
    css`
      &:focus {
        outline: none;
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background: ${(props) =>
        (props.theme && props.theme.inputDisabledBackgroundColor)};
    `}
  &:hover:not(:focus) {
    ${(props) =>
      !props.error &&
      !props.disabled &&
      css`
        outline: none;
      `}
  }
`

export const InputAdditionalText = styled.div<{ type: 'error' | 'note' }>`
  margin-top: 6px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.theme && props.theme.primaryTextColor)};

  ${(prosp) =>
    prosp.type === 'error' &&
    css`
      color: ${(props) => (props.theme && props.theme.dangerTextColor)};
    `}
`
