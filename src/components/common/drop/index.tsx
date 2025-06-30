'use client'

import {
  FC,
} from 'react'
import {
  Container,
  Title,
  LinkStyled,
  Content,
  ImageStyled,
  ImageContainer,
  AudienceUsers,
  TitleContainer
} from './styled-components'  
import { TProps } from './types'
import {
  formatTokensAmount
} from '@/utils'
import { toUtf8String } from 'ethers'
import {
  AudienceBlock,
  DropData
} from './components'
import ZKBringLogo from '@/images/zkbring-logo.png'
import {
  defineAudiencePreviewIcon
} from '@/utils'
import {
  environment
} from '@/app/configs/index'
import { TEnvironment } from '@/types'

const Drop: FC<TProps> = ({
  drop
}) => {
  const {
    title,
    address,
    maxClaims,
    amount,
    symbol,
    decimals
  } = drop

  const amountFormatted = formatTokensAmount(amount, decimals)
  const Icon = defineAudiencePreviewIcon(drop.zkPassSchemaId)

  // const schema = configForZKTLS.schemas.find(schema => schema.schemaId === toUtf8String(drop.zkPassSchemaId))
  // const description = schema ? `For ${schema.serviceName} users` : 'For service users'
  // return <LinkStyled href={`/drops/${address}`}>
  //   <Container>
  //     <AudienceBlock
  //       icon={Icon}
  //       color={schema?.color || '#1C1C1C'}
  //     />
  //     <Content>
  //       <AudienceUsers>
  //         {description}
  //       </AudienceUsers>

  //       <TitleContainer>
  //         <Title>
  //           {amountFormatted} {symbol}
  //         </Title>

  //         <ImageContainer>
  //           <ImageStyled
  //             src={ZKBringLogo}
  //             width={18}
  //             height={18}
  //             alt="Token"
  //           />
  //         </ImageContainer>
  //       </TitleContainer>
  //       <DropData drop={drop}/>
  //     </Content>
      
  //   </Container>
  // </LinkStyled>

  return null
}

export default Drop
