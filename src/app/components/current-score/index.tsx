import { FC } from 'react'
import {
  WigetStyled,
  Texts,
  Title,
  Content,
  TextStyled,
  Value
} from './styled-components'
import TProps from './types'


const CurrentScore: FC<TProps> = ({
  points,
  className
}) => {
  return <WigetStyled className={className}>
    <Content>
      <Texts>
        <Title>
          Your Current Score
        </Title>
        <TextStyled>
          Complete verifications in the extension
        </TextStyled>
      </Texts>

      <Value>
        {points}
      </Value>
    </Content>

  </WigetStyled>
}

export default CurrentScore