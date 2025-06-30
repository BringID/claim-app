import { FC } from 'react'
import {
  Container,
  Step,
  Hr
} from './styled-components'
import TProps from './types'
import { CheckIcon } from '@/components/icons'

const defineStatus = (
  idx: number,
  activeStep: number
) => {
  if ((idx + 1) === activeStep) {
    return 'active'
  }

  if ((idx + 1) < activeStep) {
    return 'done'
  }

  return
}

const Steps: FC<TProps> = ({
  stepsCount,
  activeStep
}) => {
  return <Container>
    {new Array(stepsCount).fill(undefined).map((item, idx) => {
      const status = defineStatus(idx, activeStep)
      return <>
        <Step
          status={status}
        >
          {status === 'done' ? <CheckIcon /> : idx + 1}
        </Step>
        {idx < stepsCount - 1 ? <Hr /> : null}
      </>
    })}
  </Container>
}

export default Steps