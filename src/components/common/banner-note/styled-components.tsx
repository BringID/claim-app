import styled, { css } from "styled-components"
import { TBannerNoteStatus } from "./types"

export const Container = styled.div<{
  status?: TBannerNoteStatus
}>`
  padding: 24px;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
  font-family: 'Menlo', monospace;
  border: 1px solid ${props => props.theme.successStatusBorderColor};
  background-color: ${props => props.theme.successStatusBackgroundColor};
  color: ${props => props.theme.successStatusTextColor};

  ${props => props.status === 'error' && css`
    background-color: ${props => props.theme.errorStatusBackgroundColor};
    border: 1px solid ${props => props.theme.errorStatusBorderColor};
    color: ${props => props.theme.errorStatusTextColor};
    svg {
      stroke: ${props => props.theme.errorStatusTextColor};
    }
  `}

  ${props => props.status === 'warning' && css`
    background-color: ${props => props.theme.warningStatusBackgroundColor};
    border: 1px solid ${props => props.theme.warningStatusBorderColor};
    color: ${props => props.theme.warningStatusTextColor};

    svg {
      stroke: ${props => props.theme.warningStatusTextColor};
    }
  `}
`

export const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
  margin: 0 0 8px;
  color: ${props => props.theme.successTextColor};
`

