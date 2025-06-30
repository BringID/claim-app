import styled from 'styled-components'

export const TableText = styled.span`
  font-size: 13px;
  margin: 0;
  color: ${props => props.theme.secondaryTextColor};
`

export const TableValue = styled(TableText)`
  color: ${props => props.theme.primaryTextColor};

  &:first-letter {
    text-transform: uppercase;
  }
`

export const TableRow = styled.div`
  padding: 6px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

