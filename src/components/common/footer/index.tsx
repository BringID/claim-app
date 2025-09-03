import { FC } from 'react'
import {
  Footer,
  FooterContent,
  FooterMeta,
  FooterLicense,
  LinkStyled,
  FooterMetaItem,
  FooterDescription,
  FooterMenu,
  FooterMenuItem,
  FooterContentMain
} from './styled-components'

import {
  bringIDLink
} from '@/app/configs'

const FooterComponent = () => {
  return <Footer>
    <FooterDescription>
      BringID - privacy-focused antisybil solution, powered by zero-knowledge proofs
    </FooterDescription>

    <FooterMenu>
      <FooterMenuItem>
        <LinkStyled href='/'>
        GitHub
        </LinkStyled>
      </FooterMenuItem>

      <FooterMenuItem>
        <LinkStyled href='/'>
        X / Twitter
        </LinkStyled>
      </FooterMenuItem>

      <FooterMenuItem>
        <LinkStyled href='/'>
        Warpcast
        </LinkStyled>
      </FooterMenuItem>

      <FooterMenuItem>
        <LinkStyled href='/'>
        $BRING Token
        </LinkStyled>
      </FooterMenuItem>

      <FooterMenuItem>
        <LinkStyled href='/'>
        Whitepaper
        </LinkStyled>
      </FooterMenuItem>

      <FooterMenuItem>
        <LinkStyled href='/'>
        Telegram
        </LinkStyled>
      </FooterMenuItem>
    </FooterMenu>


    <FooterContent>
      <FooterContentMain>
        <LinkStyled href={bringIDLink} target='_blank'>
          bring-id
        </LinkStyled>
        <FooterLicense>
          MIT License
        </FooterLicense>
      </FooterContentMain>

      <FooterMeta>
        <FooterMetaItem>
          Built with TLSNotary
        </FooterMetaItem>
        <FooterMetaItem>
          Privacy-first
        </FooterMetaItem>
      </FooterMeta>
      
    </FooterContent>

    
  </Footer>
}

export default FooterComponent