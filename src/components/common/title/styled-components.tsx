import styled from 'styled-components'

export const TitleComponent = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  letter-spacing: -0.9px;
  color: ${props => props.theme.primaryTextColor};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    font-size: 50px;
    line-height: 60px;
  }
`