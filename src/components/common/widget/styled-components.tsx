import styled, { css } from 'styled-components'
import { TProps } from './types'
import Image from 'next/image'

export const WidgetComponent = styled.div<TProps>`
  background-color: ${props => props.theme.blankColor};
  width: 100%;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.primaryBorderColor};
`

export const WidgetTitle = styled.h3`
  font-size: 24px;
  margin: 0;
  font-family: 'Menlo', Helvetica, Arial, sans-serif;
  font-weight: 700;
  text-align: center;
  width: 100%;
  

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    font-size: 18px;
    line-height: 24px;
  }
`

export const WidgetContent = styled.div<{ title?: string }>`
  width: 100%;
  ${props => props.title && css`
    margin-top: 6px;
  `}
`

export const FinishedIndicator = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  text-align: center;
  line-height: 32px;
  font-size: 18px;
  border: 1px solid ${props => props.theme.successBorderColor};
  background: ${props => props.theme.successBackgroundColor};
  color: ${props => props.theme.successTextColor};
  margin-left: auto;
`

export const WidgetTitleImageContainer = styled.div<{
  iconBackground?: string,
  iconPadding?: string
}>`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px auto 16px;
  padding: ${props => props.iconPadding || '8px'};
  background-color: ${props => props.iconBackground || props.theme.secondaryBackgroundColor};

  svg {
    width: 100%;
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    min-width: 20px;
    min-height: 20px;
  }
`


export const WidgetTitleImage = styled(Image)`
  display: block;
  object-fit: cover;
  object-position: center;
`