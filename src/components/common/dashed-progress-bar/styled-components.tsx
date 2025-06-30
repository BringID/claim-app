import styled, { css } from 'styled-components'

export const ProgressBarContainer = styled.div<{
  dashCount: number
}>`
  height: 6px;
  position: relative;
  background: ${props => props.theme.blankColor};
  display: grid;
  gap: 2px;
  ${props => css`
    grid-template-columns: repeat(${props.dashCount}, auto);
  `}
`

export const Dash = styled.div<{
  filled?: boolean
}>`
  background: ${props => props.theme.primaryTextColor};
  height: 100%;
  background-color: ${props => props.theme.dashedProgressBarEmpty};

  ${props => props.filled && css`
    background-color: ${props => props.theme.dashedProgressBarFilled};
  `}
`
