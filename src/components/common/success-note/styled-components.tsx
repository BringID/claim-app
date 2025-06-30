import styled from "styled-components"

export const Container = styled.div`
  padding: 24px;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
  border: 1px solid ${props => props.theme.successBorderColor};
  background-color: ${props => props.theme.successBackgroundColor};
  color: ${props => props.theme.successTextColor};
`

export const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
  margin: 0 0 8px;
  color: ${props => props.theme.successTextColor};
`

