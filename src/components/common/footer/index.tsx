import { FC } from 'react'
import {
  Footer,
  FooterContent,
  LinkStyled,
  FooterDescription,
  FooterMenu,
  FooterMenuItem
} from './styled-components'

import {
  bringIDLink,
  xLink,
  telegramChatLink,
  whitepaperLink,
  githubLink,
  bringTokenUrl
} from '@/app/configs'

const FooterComponent = () => {
  return <Footer>

    <FooterMenu>
      <FooterMenuItem>
        <LinkStyled href='https://www.bringid.org/' target='_blank'>
        About us
        </LinkStyled>
      </FooterMenuItem>

      <FooterMenuItem>
        <LinkStyled href={bringTokenUrl} target='_blank'>
        $bring
        </LinkStyled>
      </FooterMenuItem>

      <FooterMenuItem>
        <LinkStyled href={githubLink} target='_blank'>
        GitHub
        </LinkStyled>
      </FooterMenuItem>

      <FooterMenuItem>
        <LinkStyled href={whitepaperLink} target='_blank'>
        Whitepaper
        </LinkStyled>
      </FooterMenuItem>

      <FooterMenuItem>
        <LinkStyled href={xLink} target='_blank'>
        X / Twitter
        </LinkStyled>
      </FooterMenuItem>

      <FooterMenuItem>
        <LinkStyled href={telegramChatLink} target='_blank'> 
        Telegram
        </LinkStyled>
      </FooterMenuItem>
    </FooterMenu>


    <FooterContent>
      © 2025 BringID. Powered by zero knowledge proofs. Deployed on Base.
      
    </FooterContent>

    
  </Footer>
}

export default FooterComponent