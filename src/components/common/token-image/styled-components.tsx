import styled from 'styled-components'
import Image from 'next/image'

export const TokenImage = styled.img`
  width: 226px;
  height: 226px;
  background: ${props => props.theme.secondaryBackgroundColor};
  object-fit: cover;
  display: block; 
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;
`

export const TokenVideo = styled.video`
  width: 226px;
  height: 226px;
  object-fit: cover;
  display: block; 
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
`

export const TokenVideoSource = styled.source`
  
`

export const ImageStyled = styled(Image)`
  object-fit: cover;
  display: block; 
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;
`