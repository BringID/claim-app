import styled from "styled-components"
import Image from 'next/image'
import {
  Subtitle,
  Text
} from '@/components/common'

export const TokenAmount = styled.div`
  font-size: 60px;
  font-weight: 400;
  margin: 0 0 30px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.secondaryTextColor};
  font-family: 'Geist', 'Inter', sans-serif;
`


export const SymbolERC20 = styled.span`
  color: ${props => props.theme.primaryTextColor};
`

export const Container = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 32px;
`

export const ImageStyled = styled(Image)`
  margin-right: 4px;
`

export const SubtitleStyled = styled(Subtitle)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
  margin: 0 0 36px;
  font-family: 'Geist', 'Helvetica', sans-serif;
`

export const TextStyled = styled(Text)`

`


