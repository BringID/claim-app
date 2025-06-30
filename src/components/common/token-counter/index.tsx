import { FC } from 'react'
import {
  Container,
  AmountBar,
  Value,
  ValueLimit,
  TokenImage,
  ButtonStyled,
  Texts,
  ToggleStyled
} from './styled-components'
import TProps from './types'
import {
  TOKEN_BUY_ADDRESS
} from '@/app/configs/app-token'

const defineTexts = (
  valueBN: bigint,
  maxBN: bigint,
  tokenSymbol: string,
) => {
  const ratio: bigint = valueBN / maxBN * BigInt(100)
  if (ratio >= BigInt(100)) {
    return <Texts>
      <Value>{valueBN.toString()} {tokenSymbol}</Value>
    </Texts>
  }
  return <Texts>
    <Value>{valueBN.toString()}</Value>
    <ValueLimit>/ {maxBN.toString()} {tokenSymbol}</ValueLimit>
  </Texts>
}

const defineControl = (
  ratio: bigint,
  tokenSymbol: string,
  isStaked: boolean,
  action: (
    isStaked: boolean,
  ) => void
) => {
  const buttonTitle = tokenSymbol ? `+ Get ${tokenSymbol}` : '+ Get'

  if (ratio >= BigInt(100)) {
    return <ToggleStyled
      value={isStaked}
      size='small'
      disabled={isStaked}
      label='Feature drop'
      onChange={(value) => {
        action(value)
      }}
    />
  }

  return <ButtonStyled
    size='small'
    target='_blank'
    href={TOKEN_BUY_ADDRESS}
    appearance="additional"
  >
    {buttonTitle}
  </ButtonStyled>
}

const TokenCounter: FC<TProps> = ({
  value,
  max,
  action,
  tokenIcon,
  tokenSymbol,
  isStaked
}) => {
  const valueBN = BigInt(value)
  const maxBN = BigInt(max)
  const ratio: bigint = valueBN / maxBN * BigInt(100)

  const texts = defineTexts(
    valueBN,
    maxBN,
    tokenSymbol
  )

  const control = defineControl(
    ratio,
    tokenSymbol,
    isStaked,
    action
  )

  return <Container>
    <AmountBar style={{ width: `${ratio}%`}}/>
    <TokenImage>
      {tokenIcon}
    </TokenImage>
    {texts}
    {control}
  </Container>
}

export default TokenCounter