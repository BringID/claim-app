import { styled } from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  margin-bottom: 80px;
`

export const Card = styled.div`
  padding: 24px 24px 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border-radius: 20px;
  position: relative;
  z-index: 2;
  color: ${props => props.theme.additionalTextColor};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    padding: 14px;
    border-radius: 10px;
  }

  &:first-child {
    rotate: -10deg;
    translate: 10px 50px;
    z-index: 1;
  }

  &:last-child {
    rotate: 10deg;
    translate: -10px 50px;
    z-index: 1;
  }
`

export const CardTitle = styled.h3`
  margin: 0 0 20px;
  font-size: 22px;
  line-height: 24px;
  font-weight: 700;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    font-size: 16px;
    line-height: 18px;
  }
`

export const CardImageWrapper = styled.div`
  width: 84px;
  height: 84px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardText = styled.p`
  font-size: 13px;
  line-height: 18px;
`