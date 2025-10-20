'use client'
import {
  FC,
  useState,
  useEffect
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
import {
  useAppSelector
} from '@/lib/hooks'

const defineStage = (
  stage: TProcessStage,
  setStage: (stage: TProcessStage) => void,
  claimAddress: string | null,
  setClaimAddress: (claimAddress: string,) => void,
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
      return <Claim
        setStage={setStage}
        claimAddress={claimAddress}
        setClaimAddress={setClaimAddress}
      />
    case 'claim_started':
      return <ClaimStarted
        claimAddress={claimAddress}
        setStage={setStage}
      />
    case 'claim_failed':
      return <ClaimFailed
        setStage={setStage}
        claimAddress={claimAddress}
      />
    case 'claim_finished':
      return <ClaimFinished
        setStage={setStage}
        claimAddress={claimAddress}
      />
    case 'drop_finished':
      return <DropFinished setStage={setStage} />
    case 'wrong_device':
      return <WrongDevice setStage={setStage} />
    case 'wrong_browser':
      return <WrongBrowser setStage={setStage} />

  }
}

const LaunchTransaction: FC = () => {

  const {
    user: {
      address,
    },
  } = useAppSelector(state => (
    {
      user: {
        address: state.user.address,
      }
    }
  ))

  const [
    stage,
    setStage
  ] = useState<TProcessStage>('start')


  const [
    claimAddress,
    setClaimAddress
  ] = useState<string | null>(null)

  useEffect(() => {
    setClaimAddress(address)
  }, [
    address
  ])

  const content = defineStage(
    stage,
    setStage,
    claimAddress,
    setClaimAddress
  )

  return <PlausibleProvider domain='app.bringid.org'>
    <Page>
      {content}
    </Page>
  </PlausibleProvider>
}

export default LaunchTransaction
