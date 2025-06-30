import styled from 'styled-components'
import {
  InputCoinIcon
} from '@/components/icons'

export const Container = styled.div`
  display: flex;
  gap: 20px;
  color: ${props => props.theme.secondaryTextColor};
  line-height: 1;
  font-size: 13px;
  align-items: center;
  margin: 0;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    font-size: 10px;
  }
`

export const Claimed = styled.div`
  display: flex;
  align-items: center;
`

export const ClaimedText = styled.p`
  margin-left: 5px;
  margin-right: 10px;
`

export const InputCoinIconStyled = styled(InputCoinIcon)`
  max-width: 12px;
`

export const Expiration = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`