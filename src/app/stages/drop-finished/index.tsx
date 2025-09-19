'use client'
import {
  FC
} from 'react'
import {
  WidgetStyled,
  OptionWidgetsStyled,
  ButtonStyled,
  SmallTextStyled
} from '../../content/styled-components'
import { 
  TokenCounterStyled,
  ExternalLinkIconStyled
} from './styled-components'
import { ShieldIcon } from '@/components/icons'
import { TOKEN_MAX_SUPPLY, TOKEN_SYMBOL } from '@/app/configs/app-token'
import tiers from '../../configs/tiers'
import TProps from './types'
import { xLink } from '@/app/configs'

const defineButton = () => {
  return <ButtonStyled
    appearance='action'
    href={xLink}
    target='_blank'
  >
    Follow @BringID on X <ExternalLinkIconStyled />
  </ButtonStyled> 
}


const DropFinished: FC<TProps> = ({ setStage }) => {
  const button = defineButton()

  return <WidgetStyled
    title="Prove You're Human & Claim BRING"
    image={<ShieldIcon />}
  >
    <SmallTextStyled>Start by installing our browser extension to enable verification</SmallTextStyled>
    <TokenCounterStyled
      currentValue={0n}
      finished
      max={TOKEN_MAX_SUPPLY}
      title='All Tokens Claimed'
      subtitle='The BRING token airdrop has ended. All tokens have been distributed to verified users.'
    />

    <OptionWidgetsStyled
      data={tiers.map(tier => ({
        title: tier.name,
        description: tier.description,
        subtitle: `${tier.min}+ pts.`,
        value: `${tier.value} ${TOKEN_SYMBOL}`,
        id: tier.id
      }))}
    />

    {button}
  </WidgetStyled>
}

export default DropFinished