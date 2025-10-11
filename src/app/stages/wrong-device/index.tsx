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
      Bring is desktop-only (for now)
    </TitleStyled>
    <Text>
      We’re building mobile support 🤓. In the meantime, please switch to your desktop to claim tokens.
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