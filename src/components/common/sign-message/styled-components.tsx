import styled from "styled-components"

export const Container = styled.div`
  padding: 16px;
  border-radius: 8px;
  font-size: 14px;
  border: 1px solid ${props => props.theme.primaryBorderColor};
  background: ${props => props.theme.additionalBackgroundColor};
`

export const Title = styled.h3`
  font-size: 14px;
  margin: 0 0 4px;
  color: ${props => props.theme.extraTextColor};
`