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
      Browser Not Supported
    </TitleStyled>
    <Text>
      Please use Google Chrome or Brave for the best experience. Your current browser is not supported by this application.
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