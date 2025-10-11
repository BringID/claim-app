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
import { ShieldIcon } from '@/components/icons'
import { TOKEN_MAX_SUPPLY, TOKEN_SYMBOL } from '@/app/configs/app-token'
import tiers from '../../configs/tiers'
import { getTokensLeftCount, defineIfBrowserIsValid } from '@/utils'
import TProps from './types'
import { useRouter } from 'next/navigation'
import isMobile from 'is-mobile'
import getSDK from '@/app/sdk'

const defineButton = (
  extensionInstallationStarted: boolean,
  redirect: () => void
) => {
  return <ButtonStyled
    appearance='action'
    onClick={redirect}
    loading={extensionInstallationStarted}
  >
    Claim {TOKEN_SYMBOL} <LightningIconStyled />
  </ButtonStyled> 
}

const Start: FC<TProps> = ({ setStage }) => {
  const router = useRouter()
  const [
    extensionInstallationStarted,
    setExtensionInstallationStarted
  ] = useState<boolean>(false)

  const [ currentSupply, setCurrentSupply ] = useState<bigint>(TOKEN_MAX_SUPPLY)
  const button = defineButton(
    extensionInstallationStarted,
    async () => {

      if (isMobile()) {
        router.push('/wrong-device')
        return
      }
      const browserIsValid = defineIfBrowserIsValid()

      if (!browserIsValid) {
        router.push('/wrong-browser')
        return
      }

      setExtensionInstallationStarted(true)



      const bringIDSDK = getSDK()

      const isInstalled = await bringIDSDK.isExtensionInstalled()
      setExtensionInstallationStarted(false)

      if (isInstalled) {
        setStage('connect')
        return
      }

      setStage('install_extension')
    },
  )

  useEffect(() => {
    (async () => {
      const balanceLeft = await getTokensLeftCount()

      if (balanceLeft === 0n) {
        setStage('drop_finished')
        return
      }
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