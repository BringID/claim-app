import styled from "styled-components"
import {
  Title,
  Subtitle,
  Button,
  Text
} from '@/components/common'
import Image from 'next/image'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 440px;
`

export const TitleStyled = styled(Title)`
  margin: 0 0 40px;
  font-size: 50px;
  line-height: 120%;
  color : ${props => props.theme.primaryTextColor};
`

export const ImageStyled = styled(Image)`
  margin: 0 auto 24px;
  display: block;
`

export const TextStyled = styled(Text)`
  margin-bottom: 30px;
  text-align: center;
  font-size: 16px;
  color : ${props => props.theme.secondaryTextColor};
`