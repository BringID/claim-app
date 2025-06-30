import { styled } from "styled-components"

export const Container = styled.ol`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 15px;
  line-height: 22px;
  color: ${props => props.theme.primaryTextColor};
`

export const ListItemIcon = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ListItemValue = styled.span`
  color: ${props => props.theme.secondaryTextColor};
`

export const ListItemText = styled.div``