'use client'
import {
  FC,
  useState
} from 'react'
import {
  Page
} from '@/components/common'
import { TProcessStage } from '@/types'
import {
  Start,
  Claim,
  ClaimFinished,
  ClaimStarted,
  Connect,
  CreateID,
  InstallExtension,
  ClaimFailed,
  DropFinished,
  WrongDevice,
  WrongBrowser
} from '../stages'
import PlausibleProvider from 'next-plausible'

const defineStage = (
  stage: TProcessStage,
  setStage: (stage: TProcessStage) => void
) => {
  switch (stage) {
    case 'start':
      return <Start setStage={setStage} />
    case 'install_extension':
      return <InstallExtension setStage={setStage} />
    case 'connect':
      return <Connect setStage={setStage} />
    case 'create_id':
      return <CreateID setStage={setStage} />
    case 'claim':
      return <Claim setStage={setStage} />
    case 'claim_started':
      return <ClaimStarted setStage={setStage} />
    case 'claim_failed':
      return <ClaimFailed setStage={setStage} />
    case 'claim_finished':
      return <ClaimFinished setStage={setStage} />
    case 'drop_finished':
      return <DropFinished setStage={setStage} />
    case 'wrong_device':
      return <WrongDevice setStage={setStage} />
    case 'wrong_browser':
      return <WrongBrowser setStage={setStage} />

  }
}

const LaunchTransaction: FC = () => {

  const [
    stage,
    setStage
  ] = useState<TProcessStage>('start')

  const content = defineStage(
    stage,
    setStage
  )

  return <PlausibleProvider domain='app.bringid.org'>
    <Page>
      {content}
    </Page>
  </PlausibleProvider>
}

export default LaunchTransaction
