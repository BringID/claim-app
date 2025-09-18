'use client'
import {
  FC,
  useEffect,
  useState
} from 'react'
import {
  WidgetStyled,
  OptionWidgetsStyled,
  TokenCounterStyled,
  ButtonStyled,
  LightningIconStyled,
  SmallTextStyled
} from '../../content/styled-components'
import { useRouter } from 'next/navigation'
import { ShieldIcon } from '@/components/icons'
import { TOKEN_MAX_SUPPLY, TOKEN_SYMBOL } from '@/app/configs/app-token'
import tiers from '../../configs/tiers'
import { getTokensLeftCount } from '@/utils'
import TProps from './types'

const defineButton = (
  currentSupply: bigint,
  redirect: () => void
) => {
  if (currentSupply <= 0) {
    return <ButtonStyled
      appearance='action'
      onClick={redirect}
    >
      Claim {TOKEN_SYMBOL} <LightningIconStyled />
    </ButtonStyled> 
  }
  return <ButtonStyled
    appearance='action'
    onClick={redirect}
  >
    Claim {TOKEN_SYMBOL} <LightningIconStyled />
  </ButtonStyled> 
}


const Start: FC<TProps> = ({ setStage }) => {


  const [ currentSupply, setCurrentSupply ] = useState<bigint>(TOKEN_MAX_SUPPLY)
  const button = defineButton(
    currentSupply,
    () => {
      setStage('install_extension')
    },
  )

  useEffect(() => {
    (async () => {
      const balanceLeft = await getTokensLeftCount()
      setCurrentSupply(balanceLeft)
    })()
  }, [])

  return <WidgetStyled
    title="Prove You're Human & Claim BRING"
    image={<ShieldIcon />}
  >
    <SmallTextStyled>Start by installing our browser extension to enable verification</SmallTextStyled>

    <TokenCounterStyled
      currentValue={currentSupply}
      max={TOKEN_MAX_SUPPLY}
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

export default Start