import { FC } from 'react'
import TProps from './types'
import {
  Container,
  Subtitle,
  Value,
  WidgetComponent,
  Limit
} from './styled-components'

const Stats: FC<TProps> = ({
  stats,
  className
}) => {
  return <Container className={className}>
    {stats.map(statItem => {
      const {
        value,
        limit,
        icon,
        title
      } = statItem
      return  <WidgetComponent key={title}>
        <Subtitle>{title}</Subtitle>
        <Value>
          {icon} {value || 0} {limit && <Limit>/ {limit}</Limit>}
        </Value>
      </WidgetComponent>
    })}
  </Container>
}

export default Stats
