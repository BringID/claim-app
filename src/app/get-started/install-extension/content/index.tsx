'use client'
import {
  FC,
  useEffect,
  useState
} from 'react'
import {
  Page,
  Button
} from '@/components/common'
import {
  StepsContainer,
  StepsStyled,
  TextStyled,
  NoteStyled,
  SmallTextStyled
} from '../../styled-components'
import {
  WidgetStyled,
  ButtonStyled
} from './styled-components'

import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { ShieldIcon } from '@/components/icons'

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

const LaunchTransaction: FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [
    extensionInstalled,
    setExtensionInstalled
  ] = useState<boolean | null>(null)
  const [
    extensionInstallationStarted,
    setExtensionInstallationStarted
  ] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      const bringId = (window as any).bringID
      setExtensionInstalled(Boolean(bringId))
    }, 1500)
  }, [])

  const button = defineButton(
    extensionInstalled,
    extensionInstallationStarted,
    () => {
      router.push(`/get-started/connect`)
    },
    () => {
      alert('INSTALL EXTENSION')
      setExtensionInstallationStarted(true)
    },
    () => {
      window.location.reload()
    }
  )

  return <Page>
    <StepsContainer>
      <StepsStyled
        stepsCount={6}
        activeStep={1}
      />
    </StepsContainer>

    <WidgetStyled
      title='Install Bring ID Extension'
      image={<ShieldIcon />}
    >
      <SmallTextStyled>Start by installing our browser extension to enable zkTLS verification</SmallTextStyled>
      <NoteStyled>
        The Bring ID extension creates zero-knowledge proofs of your web2 accounts without exposing your credentials. It runs locally in your browser and never sends your login information to our servers.
      </NoteStyled>
      {button}
    </WidgetStyled>
    
  </Page>
}

export default LaunchTransaction
