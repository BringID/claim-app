'use client'
import {
  FC,
  useState
} from 'react'
import {
  Header,
  LogoLink,
  Content,
  ImageStyled
} from './styled-components'
import LogoImage from '@/images/bring-logo.png'

import Account from './account'
import Menu from './menu'

const PageHeader: FC = () => {
  return <Header>
    <Content>
      <LogoLink to='/'>
        <ImageStyled src={LogoImage} alt='bring' width={32} height={32}/>
        BringID
      </LogoLink>

      <Menu />
      <Account />
    </Content>
  </Header>
}

export default PageHeader