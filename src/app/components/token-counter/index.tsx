import { FC } from 'react'
import {
  Texts,
  WidgetStyled,
  Value,
  Title,
  ProgressBarStyled,
  UsersIconStyled
} from './styled-components'
import { TOKEN_SYMBOL } from '@/app/configs/app-token'
import TProps from './types'
import { convertNumber } from '../../../utils'

const TokenCounter: FC<TProps> = ({
  className,
  currentValue,
  max,
}) => {

  const percentage = (currentValue * BigInt(100))  / max

  return <WidgetStyled className={className}>
    <Texts>
      <UsersIconStyled />
      <Title>
        First Come First Served
      </Title>
      <Value>
        {convertNumber(currentValue)} / {convertNumber(max)} {TOKEN_SYMBOL} remaining
      </Value>
    </Texts>
    <ProgressBarStyled
      current={Number(percentage)}
      max={100}
    />
  </WidgetStyled>
}

export default TokenCounter