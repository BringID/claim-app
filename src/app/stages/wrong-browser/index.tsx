import {
  FC
} from 'react'
import {
  TitleStyled,
  Text,
  ButtonStyled,
  Container
} from './styled-components'
import TProps from './types'

const WrongDevice: FC<TProps> = ({
  setStage
}) => {
  return <Container>
    <TitleStyled>
      Browser Not Supported
    </TitleStyled>
    <Text>
      Please use Google Chrome or Brave for the best experience. Your current browser is not supported by this application.
    </Text>
    <ButtonStyled
      appearance='default'
      onClick={() => setStage('start')}
    >
      Back
    </ButtonStyled>
  </Container>
}

export default WrongDevice