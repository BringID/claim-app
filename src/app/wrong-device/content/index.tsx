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
    <PixeledDropIconStyled />
    <TitleStyled>
      Use desktop
    </TitleStyled>
    <Text>
      This experience is not available on mobile yet. Please switch to a desktop to claim or launch drops.
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