import styled, { css } from 'styled-components'

export const DatePickerClassName = 'DatePickerClassName' 

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


export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  .${DatePickerClassName} {
    width: 100%;
    display: block;
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
  }

  .react-datepicker-wrapper {
    width: 100%;
  }
`

export const Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
  margin: 0 0 12px;
  color: ${(props) => (props.theme && props.theme.primaryTextColor)};
`
