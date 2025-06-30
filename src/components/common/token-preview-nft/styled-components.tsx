
import styled from 'styled-components'
import TokenImage from '../token-image'
import { DoneIcon } from '@/components/icons'

export const Container = styled.div`
  position: relative;
  padding: 12px 12px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
`

export const TokenImageStyled = styled(TokenImage)`
  margin-bottom: 24px;
`

export const DoneIconStyled = styled(DoneIcon)`
  position: absolute;
  border: 6px solid ${props => props.theme.primaryBackgroundColor};
  border-radius: 100%;
  top: 0px;
  right: 0px;
  background: ${props => props.theme.primaryBackgroundColor};
`