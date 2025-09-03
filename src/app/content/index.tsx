'use client'
import {
  FC,
  useEffect,
  useState
} from 'react'
import {
  Page
} from '@/components/common'
import {
  StepsContainer,
  StepsStyled,
  SmallTextStyled
} from '../styled-components'
import {
  WidgetStyled,
  ButtonStyled,
  OptionWidgetsStyled,
  LightningIconStyled,
  TokenCounterStyled
} from './styled-components'
import { useRouter } from 'next/navigation'
import { ShieldIcon } from '@/components/icons'
import { TokenCounter } from '../components'
import { TOKEN_MAX_SUPPLY, TOKEN_SYMBOL } from '@/app/configs/app-token'
import tiers from '../configs/tiers'
import { getTokensLeftCount } from '@/utils'

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

const LaunchTransaction: FC = () => {
  const router = useRouter()




  const [ currentSupply, setCurrentSupple ] = useState<bigint>(TOKEN_MAX_SUPPLY)
  const button = defineButton(
    currentSupply,
    () => {
      router.push(`/install-extension`)
    },
  )

  useEffect(() => {
    (async () => {
      const balanceLeft = await getTokensLeftCount()
      setCurrentSupple(balanceLeft)
    })()
  }, [])


  return <Page>
    <StepsContainer>
      <StepsStyled
        stepsCount={7}
        activeStep={1}
      />
    </StepsContainer>

    <WidgetStyled
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
    
  </Page>
}

export default LaunchTransaction
