'use client'
import {
  FC,
  useEffect,
  useState
} from 'react'
import {
  WidgetStyled,
  NoteStyled,
  SmallTextStyled,
  ButtonStyled
} from '../../content/styled-components'
import { ShieldIcon } from '@/components/icons'
import getSDK from '@/app/sdk'
import TProps from './types'
import { extensionDownloadLink } from '@/app/configs'

const defineButton = (
  extensionInstalled: boolean | null,
  extensionInstallationStarted: boolean,
  installedCallback: () => void,
  notInstalledCallback: () => void,
  reloadCallback: () => void
) => {
  if (extensionInstalled === null) {
    return <ButtonStyled
      appearance='action'
      loading
    >
      Install Extension
    </ButtonStyled>
  }

  if (!extensionInstalled) {

    if (extensionInstallationStarted) {
      return <ButtonStyled
        appearance='action'
        onClick={reloadCallback}
      >
        Reload after installation
      </ButtonStyled>
    }
    return <ButtonStyled
      appearance='action'
      onClick={notInstalledCallback}
    >
      Install Extension
    </ButtonStyled>
  }

  return <ButtonStyled
    appearance='action'
    onClick={installedCallback}
  >
    Next step
  </ButtonStyled> 
}

const InstallExtension: FC<TProps> = ({ setStage }) => {

  const [
    extensionInstalled,
    setExtensionInstalled
  ] = useState<boolean | null>(null)

  const [
    extensionInstallationStarted,
    setExtensionInstallationStarted
  ] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      const bringIDSDK = getSDK()

      console.log({ bringIDSDK })
      const isInstalled = await bringIDSDK.isExtensionInstalled()
      setExtensionInstalled(isInstalled)
    })()
  }, [])

  const button = defineButton(
    extensionInstalled,
    extensionInstallationStarted,
    () => {
      setStage('connect')
    },
    () => {
      window.open(extensionDownloadLink, '_blank')
      setExtensionInstallationStarted(true)
    },
    () => {
      window.location.reload()
    }
  )

  return <WidgetStyled
    title='Install Bring ID Extension'
    image={<ShieldIcon />}
  >
    <SmallTextStyled>Start by installing our browser extension to enable verification</SmallTextStyled>
    <NoteStyled>
      The Bring ID extension creates proofs of your web2 accounts without exposing your credentials. It runs locally in your browser and never sends your login information to our servers.
    </NoteStyled>
    {button}
  </WidgetStyled>
}

export default InstallExtension