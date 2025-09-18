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
  StepsStyled
} from './styled-components'
import { TProcessStage } from '@/types'
import {
  Start,
  Claim,
  ClaimFinished,
  ClaimStarted,
  Connect,
  CreateID,
  InstallExtension,
  ClaimFailed
} from '../stages'
import { useSearchParams } from 'next/navigation'

const defineStageNumber = (stage: TProcessStage) => {
  switch (stage) {
    case 'start':
      return 1
    case 'install_extension':
      return 2
    case 'connect':
      return 3
    case 'create_id':
      return 4
    case 'claim':
      return 5
    case 'claim_started':
      return 6
    case 'claim_failed':
    case 'claim_finished':
      return 7
  }
}

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
  }
}

const LaunchTransaction: FC = () => {
  const searchParams = useSearchParams()
 
  const initialStage: TProcessStage = searchParams.get('stage') as TProcessStage || 'start'

  const [
    stage,
    setStage
  ] = useState<TProcessStage>(initialStage)

  const stageNumber = defineStageNumber(stage)

  const content = defineStage(
    stage,
    setStage
  )

  return <Page>
    <StepsContainer>
      <StepsStyled
        stepsCount={7}
        activeStep={stageNumber}
      />
    </StepsContainer>
    {content}
  </Page>
}

export default LaunchTransaction
