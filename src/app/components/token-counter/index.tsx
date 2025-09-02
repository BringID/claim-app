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

const TokenCounter: FC<TProps> = ({
  className
}) => {
  return <WidgetStyled className={className}>
    <Texts>
      <UsersIconStyled />
      <Title>
        First Come First Served
      </Title>
      <Value>
        848M / 1000M {TOKEN_SYMBOL} remaining
      </Value>
    </Texts>
    <ProgressBarStyled
      current={84}
      max={100}
    />
  </WidgetStyled>
}

export default TokenCounter