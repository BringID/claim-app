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
  TextStyled,
  WidgetStyled,
  ButtonStyled
} from '../../content/styled-components'
import {
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
  shortenString,
  checkIfTokenIsClaimed,
  checkTransactionReceipt
} from '@/utils'
import { BrowserProvider, JsonRpcProvider, JsonRpcSigner } from 'ethers'

const defineButton = (
  txHash: string
) => {
    return <ButtonStyled
      onClick={async () => {
        const txHashScannerUrl = defineExplorerURL(84532)
        window.open(`${txHashScannerUrl}/tx/${txHash}`)
      }}
    >
      Check tx hash
    </ButtonStyled>
}

const Content: FC = () => {
  const router = useRouter()

  const {
    user: {
      address,
      signer,
      provider
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
    txHash as string
  )

  useEffect(() => {
    const interval = window.setInterval(async () => {
      const isClaimed = await checkIfTokenIsClaimed(
        address as string,
        signer as JsonRpcSigner
      )
      if (isClaimed) {
        window.clearInterval(interval)
        router.push('/claim-finished')

        return 
      } else {
        const transactionSuccess = await checkTransactionReceipt(
          provider as BrowserProvider,
          txHash as string
        )

        console.log({ transactionSuccess })

        if (transactionSuccess === false) {
          router.push('/claim-failed')
          window.clearInterval(interval)
        }
      }
    }, 3000)


    return () => {
      window.clearInterval(interval)
    }

  }, [])

  return  <WidgetStyled
    title='Claim Initiated!'
    image={<ShieldIcon />}
  >
    <TextStyled>
      Your tokens is scheduled for delivery
    </TextStyled>
    <SuccessNoteStyled
      title='Bring tokens'
      status='warning'
    >
      Will be sent to {shortenString(address as string)}
    </SuccessNoteStyled>
    {button}
  </WidgetStyled>    
}

export default Content
