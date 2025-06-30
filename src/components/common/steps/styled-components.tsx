import styled, { css } from "styled-components"
import { TStepStatus } from './types'

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`

export const Step = styled.div<{ status?: TStepStatus }>`
  min-width: 32px;
  height: 32px;
  border-radius: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 32px;
  font-size: 14px;
  color: ${props => props.theme.primaryTextColor};
  background-color: ${props => props.theme.additionalBackgroundColor};

  ${props => (props.status === 'active' || props.status === 'done') && css`
    background-color: ${props => props.theme.secondaryBackgroundColor};
    color: ${props => props.theme.secondaryTextColor};
  `}

  svg {
    max-width: 16px;
  }
`

export const Hr = styled.hr`
  flex: 1;
`