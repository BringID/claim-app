'use client'
import {
  FC,
  useEffect 
} from 'react'
import {
  TextStyled,
  WidgetStyled,
  ButtonStyled
} from '../../content/styled-components'
import {
  SuccessNoteStyled
} from './styled-components'

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
import { BrowserProvider, JsonRpcSigner } from 'ethers'
import TProps from './types'
import { networkId } from '@/app/configs'
import { usePlausible } from 'next-plausible'

const defineButton = (
  txHash: string,
  plausible: any
) => {
    return <ButtonStyled
      onClick={async () => {
      const txHashScannerUrl = defineExplorerURL(Number(networkId))
        plausible('go_to_explorer', {
          props: {
            from: 'claim_started_screen',
          }
        })
        window.open(`${txHashScannerUrl}/tx/${txHash}`)
      }}
    >
      Check tx hash
    </ButtonStyled>
}

const ClaimStarted: FC<TProps> = ({ setStage, claimAddress }) => {

  const {
    user: {
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
  const plausible = usePlausible()

  const button = defineButton(
    txHash as string,
    plausible
  )


  useEffect(() => {
    const interval = window.setInterval(async () => {
      const isClaimed = await checkIfTokenIsClaimed(
        claimAddress as string,
        signer as JsonRpcSigner
      )
      if (isClaimed) {
        window.clearInterval(interval)
        plausible('claim_finished', {
          props: {
            from: 'claim_started_screen',
          }
        })
        setStage('claim_finished')

        return 
      } else {
        const transactionSuccess = await checkTransactionReceipt(
          provider as BrowserProvider,
          txHash as string
        )

        console.log({ transactionSuccess })

        if (transactionSuccess === false) {
          plausible('claim_failed', {
            props: {
              from: 'claim_started_screen',
            }
          })
          setStage('claim_failed')
          window.clearInterval(interval)
        }

        if (transactionSuccess) {
          plausible('claim_finished', {
            props: {
              from: 'claim_started_screen',
            }
          })
          setStage('claim_finished')
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
      Will be sent to {shortenString(claimAddress as string)}
    </SuccessNoteStyled>
    {button}
  </WidgetStyled>    
}

export default ClaimStarted
