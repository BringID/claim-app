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
  TextStyled
} from '../../styled-components'

import {
  WidgetStyled,
  ButtonStyled,
  SuccessNoteStyled
} from './styled-components'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { ShieldIcon } from '@/components/icons'
import {
  useAppSelector
} from '@/lib/hooks'
import {
  defineExplorerURL,
  shortenString
} from '@/utils'

const defineButton = (
  txHash: string,
  navigate: (location: string) => void
) => {
    return <ButtonStyled
      onClick={async () => {
        const txHashScannerUrl = defineExplorerURL(84532)
        window.open(`${txHashScannerUrl}/tx/${txHash}`)
        navigate('/get-started/claim-finished')
      }}
    >
      Check tx hash
    </ButtonStyled>
}

const Content: FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener("message", async (event) => {
      switch (event.data.type) {
        //  from client to extension
        case 'SET_PRIVATE_KEY':
          router.push(`/get-started/create-id`)
          break
      }
    })
  }, [])

  const {
    user: {
      address,
    },
    claim: {
      txHash
    }
  } = useAppSelector(state => (
    {
      user: state.user,
      claim: state.claim
    }
  ))

  console.log({ txHash })

  const button = defineButton(
    txHash as string,
    (
      location
    ) => {
      router.push(location)
    }
  )

  return <Page>
    <StepsContainer>
      <StepsStyled
        stepsCount={6}
        activeStep={5}
      />
    </StepsContainer>

    <WidgetStyled
      title='Claim Initiated!'
      image={<ShieldIcon />}
    >
      <TextStyled>
        Your Proof-of-Human NFT is scheduled for delivery
      </TextStyled>
      <SuccessNoteStyled
        title='Verified Human NFT'
        status='warning'
      >
        Will be sent to {shortenString(address as string)}
      </SuccessNoteStyled>
      {button}
    </WidgetStyled>
    
  </Page>
}

export default Content
