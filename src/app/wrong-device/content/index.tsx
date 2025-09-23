import {
  FC
} from 'react'
import {
  TitleStyled,
  Text,
  ButtonStyled,
  PixeledDropIconStyled,
  Container
} from './styled-components'
import TProps from './types'
import { useRouter } from 'next/navigation'

const WrongDevice: FC<TProps> = () => {
  const router = useRouter()
  return <Container>
    <TitleStyled>
      Bring is desktop-only (for now)
    </TitleStyled>
    <Text>
      We’re building mobile support 🤓. In the meantime, please switch to your desktop to claim tokens.
    </Text>
    <ButtonStyled
      appearance='default'
      onClick={() => router.back()}
    >
      Back
    </ButtonStyled>
  </Container>
}

export default WrongDevice