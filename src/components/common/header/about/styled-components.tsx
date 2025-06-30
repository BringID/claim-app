import styled from 'styled-components'
import {
  Dialog
} from '@/components/common'


export const DialogStyled = styled(Dialog)`
  max-width: 690px;
  padding: 30px 87px;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    padding: 50px 25px;
  }
`

export const DialogContent = styled.div`
`

export const DialogTitle = styled.h3`
  margin: 0 0 20px;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`

export const DialogList = styled.ul`
  padding: 0 0 0 20px;
  margin: 0 0 30px;
  display: flex;
  list-style: disc;
  flex-direction: column;
  gap: 20px;
`

export const DialogListItem = styled.li`
`

export const DialogListItemText = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  line-height: 22px;
  color: ${props => props.theme.primaryTextColor};
`

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 13px;

  button {
    width: 100%;
  }
`

