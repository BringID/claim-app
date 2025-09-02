import {
  TitleStyled,
  Container,
  ImageStyled
} from '../../styled-components'
import Image from '@/images/connect-image.png'

const WrongDevice = () => {
  return <Container>
    <ImageStyled
      src={Image}
      width={153}
      height={117}
      alt='Connection image'
    />
    <TitleStyled>Please, use desktop browser</TitleStyled>
  </Container>
}

export default WrongDevice