import { styled } from "styled-components"

export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.dropItemBackgroundColor};
  border: 2px solid ${props => props.theme.dropItemBorderColor};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    width: 64px;
    height: 64px;
    border-radius: 15px;

    svg {
      max-width: 35px;
    }
  }
`