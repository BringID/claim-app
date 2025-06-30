import styled from 'styled-components'

export const TextComponent = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  color: ${props => props.theme.extraTextColor};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    font-size: 9px;
    line-height: 12px;
  }
`