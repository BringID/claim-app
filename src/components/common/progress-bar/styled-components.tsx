import styled from 'styled-components'

export const ProgressBarContainer = styled.div`
  height: 8px;
  border-radius: 2px;
  position: relative;
  background: ${props => props.theme.extraBackgroundColor};
`

export const Bar = styled.div`
  position: absolute;
  top: 0;
  background: ${props => props.theme.primaryTextColor};
  left: 0;
  border-radius: 999px;
  height: 100%;
`
