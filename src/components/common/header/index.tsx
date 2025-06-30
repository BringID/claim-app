'use client'
import {
  FC,
  useState
} from 'react'
import {
  Header,
  LogoLink,
  Content,
  Logo
} from './styled-components'

import Account from './account'

const PageHeader: FC = () => {
  return <Header>
    <Content>
      <LogoLink to='/'>
        <Logo />
        bring-id
      </LogoLink>
      <Account />
    </Content>
  </Header>
}

export default PageHeader