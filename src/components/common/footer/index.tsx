import { FC } from 'react'
import {
  Footer,
  FooterContent,
  FooterMeta,
  FooterLicense,
  LinkStyled,
  FooterMetaItem
} from './styled-components'

import {
  zkBringLink
} from '@/app/configs'

const FooterComponent = () => {
  return <Footer>
    <FooterContent>
      <LinkStyled href={zkBringLink} target='_blank'>
        bring-id
      </LinkStyled>
      <FooterLicense>
        MIT License
      </FooterLicense>
    </FooterContent>

    <FooterMeta>
      <FooterMetaItem>
        Built with shadcn/ui
      </FooterMetaItem>
      <FooterMetaItem>
        Privacy-first
      </FooterMetaItem>
    </FooterMeta>
  </Footer>
}

export default FooterComponent