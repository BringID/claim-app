import {
  Claimed,
  ClaimedText,
  Container,
  InputCoinIconStyled,
  Expiration
} from './styled-components'
import TProps from './types'
import {
  StatusIndicator
} from '@/components/common'
import {
  formatExpiration
} from '@/utils'
import {
  FC,
  useState,
  useEffect
} from 'react'

const DropData: FC<TProps> = ({
  drop
}) => {

  const claimedPercentage = Number((drop.claimsCount * BigInt(100)) / drop.maxClaims)
  
  const {
    expiration
  } = drop

  const [
    timeLeft,
    setTimeLeft
  ] = useState<number>(0)

  useEffect(() => {

    const updateExpiration = () => {
      const timeLeft = expiration - (Math.round(+(new Date) / 1000))
      setTimeLeft(timeLeft)
    }

    updateExpiration()
    
    const interval = setInterval(() => {
      updateExpiration()

      if (timeLeft < 0) {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [

  ])

  return <Container>
    <Claimed>
      <InputCoinIconStyled />
      <ClaimedText>
        {claimedPercentage}% claimed
      </ClaimedText>
    </Claimed>

    <Expiration>
      <StatusIndicator status={timeLeft <= 0 ? 'error' : 'active'} />
      {timeLeft <= 0 ? 'Expired' : formatExpiration(timeLeft)}
    </Expiration>
  </Container>
}
export default DropData