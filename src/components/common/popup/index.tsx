'use client'
import { FC } from 'react'
import {
  Overlay,
  Container,
  Title,
  Subtitle,
  Content,
  Controls,
  ButtonStyled
} from './styled-components'
import TProps from './types'

const Popup: FC<TProps> = ({
  children,
  title,
  subtitle,
  buttonAction,
  buttonTitle,
  buttonDisabled,
  onClose,
  buttonLoading
}) => {
  return <Overlay onClick={(evt) => {
    if (evt.target === evt.currentTarget) {
      onClose()
    }
  }}>
    <Container>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Content>
        {children}
      </Content>
      {buttonAction && <Controls>
        <ButtonStyled
          disabled={buttonDisabled}
          onClick={buttonAction}
          loading={buttonLoading}
          appearance='action'
        >
          {buttonTitle || 'OK'}
        </ButtonStyled>
      </Controls>}
    </Container>
  </Overlay>
}


export default Popup