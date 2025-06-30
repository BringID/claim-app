import { styled } from "styled-components"

export const Container = styled.div`
  border-radius: 8px;
  width: 32px;
  height: 32px;
  background-color: ${props => props.theme.extraBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`