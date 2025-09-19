import { FC } from 'react'
import {
  Texts,
  WidgetStyled,
  Value,
  Title,
  ProgressBarStyled,
  UsersIconStyled,
  SmallTextStyled
} from './styled-components'
import { TOKEN_SYMBOL } from '@/app/configs/app-token'
import TProps from './types'
import { convertNumber } from '../../../utils'

const TokenCounter: FC<TProps> = ({
  className,
  currentValue,
  max,
  subtitle,
  title,
  finished
}) => {

  const percentage = (currentValue * BigInt(100))  / max

  return <WidgetStyled className={className}>
    <Texts finished={finished}>
      <UsersIconStyled />
      <Title>
        {title || 'First Come First Served'}
      </Title>
      <Value>
        {convertNumber(currentValue)} / {convertNumber(max)} {TOKEN_SYMBOL} remaining
      </Value>
    </Texts>
    <ProgressBarStyled
      current={Number(percentage)}
      max={100}
      finished={finished}
    />

    {subtitle && <SmallTextStyled>{subtitle}</SmallTextStyled>}
  </WidgetStyled>
}

export default TokenCounter