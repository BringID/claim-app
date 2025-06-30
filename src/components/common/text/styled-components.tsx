import styled from 'styled-components'

export const TextComponent = styled.p`
  font-size: 16px;
  line-height: 20px;
  margin: 0;
  color: ${props => props.theme.extraTextColor};
`