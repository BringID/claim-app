import styled from 'styled-components'
import { TProps } from './types'

export const LaunchWidgetComponent = styled.div<TProps>`
  background-color: ${props => props.theme.secondaryBackgroundColor};
  width: 100%;
  border-radius: 10px;
  padding: 70px 130px;
  max-width: 800px;
`

export const LaunchWidgetTitle = styled.h3`
  font-size: 50px;
  margin: 0 0 40px;
  font-family: 'Geist', Helvetica, Arial, sans-serif;
  font-weight: 400;
`

export const LaunchWidgetContent = styled.div`
  width: 100%;
`
