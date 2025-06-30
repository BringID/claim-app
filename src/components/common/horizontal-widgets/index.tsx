import {
  FC
} from 'react'
import {
  WidgetStyled,
  SmallTextStyled,
  ExtraSubtitleStyled,
  List,
  WidgetStyledContent,
  IconWrapper
} from './styled-components'
import { TProps } from './types'

const HorizontalWidgets: FC<TProps> = ({
  data
}) => {
  return <List>
      {data.map(item => {
        const {
          icon,
          text,
          title
        } = item
        return <WidgetStyled>
          <WidgetStyledContent>
              <ExtraSubtitleStyled>
                <IconWrapper>
                  {icon}
                </IconWrapper>
                {title}
              </ExtraSubtitleStyled>
              <SmallTextStyled>
                {text}
              </SmallTextStyled>

          </WidgetStyledContent>
        </WidgetStyled>
      })}
    </List>
}

export default HorizontalWidgets