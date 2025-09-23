import React, { FC } from "react"
import { Nav, ButtonStyled, ExternalLinkIconStyled } from './styled-components'

const Menu: FC = () => {
  return <Nav>
    <ButtonStyled size="small" appearance="action" href="https://dexscreener.com/base/0xceb9ce741dc04e87366198c7dc96d76ed74dce6c" target="_blank">
      $bring <ExternalLinkIconStyled />
    </ButtonStyled>
  </Nav>
}

export default Menu