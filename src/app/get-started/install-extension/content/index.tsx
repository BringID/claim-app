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
  installedCallback: () => void,
  notInstalledCallback: () => void
) => {
  if (extensionInstalled === null) {
    return 'Loading...'
  }

  if (!extensionInstalled) {
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

  const [ extensionInstalled, setExtensionInstalled ] = useState<boolean | null>(null)

  useEffect(() => {
    if ((window as any).tlsn) {
      setExtensionInstalled(true)
    } else {
      setExtensionInstalled(false)
    }
  }, [])

  const button = defineButton(
    extensionInstalled,
    () => {
      router.push(`/get-started/connect`)
    },
    () => {
      alert('INSTALL EXTENSION')
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
