import styled from 'styled-components'

export const TextComponent = styled.p`
  font-size: 18px;
  line-height: 28px;
  margin: 0;
  color: ${props => props.theme.extraTextColor};
`