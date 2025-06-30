import styled, { keyframes } from 'styled-components'
import Button from '../button'

const appearance = keyframes`
  0% {
    translate: -50% 100%;
  }
  100% {
    translate: -50% 0%;
  }
`

const overlay = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Title = styled.h3`
  font-family: 'Geist', Arial, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 12px;
  color: ${props => props.theme.primaryTextColor};
`

export const Subtitle = styled.p`
  font-family: 'Geist', Arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 24px;
  color: ${props => props.theme.primaryTextColor};
`

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, .4);
  position: fixed;
  inset: 0;
  opacity: 0;
  animation: ${overlay} .3s forwards;
`

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 50%;
  translate: -50% 100%;
  max-width: 420px;
  padding: 16px;
  background-color: ${props => props.theme.blankColor};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  animation: ${appearance} .3s forwards;
`

export const Content = styled.div`
`

export const Controls = styled.div`

`

export const ButtonStyled = styled(Button)`
  width: 100%;
  max-width: 100%;
`