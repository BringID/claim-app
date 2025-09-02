import {
  FC
} from 'react'
import {
  WidgetStyled,
  SmallTextStyled,
  Title,
  Subtitle,
  List,
  WidgetStyledContent,
  WidgetStyledTexts,
  IdWrapper,
  Value
} from './styled-components'
import { TProps } from './types'

const OptionWidgets: FC<TProps> = ({
  data,
  activeOption,
  className
}) => {
  return <List className={className}>
      {data.map(item => {
        const {
          description,
          value,
          title,
          id,
          subtitle
        } = item
        return <WidgetStyled
          key={id}
          active={id === activeOption}
        >
          <WidgetStyledContent>
            <IdWrapper>
              {id === activeOption ? '✓' : id}
            </IdWrapper>

            <WidgetStyledTexts>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
              <SmallTextStyled>
                {description}
              </SmallTextStyled>
            </WidgetStyledTexts>

            <Value>
              {value}
            </Value>

          </WidgetStyledContent>
        </WidgetStyled>
      })}
    </List>
}

export default OptionWidgets