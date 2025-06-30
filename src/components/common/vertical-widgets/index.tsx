import {
  FC
} from 'react'
import {
  WidgetStyled,
  SmallTextStyled,
  ExtraSubtitleStyled,
  List,
  WidgetStyledContent,
  WidgetStyledTexts,
  IconWrapper
} from './styled-components'
import { TProps } from './types'

const VerticalWidgets: FC<TProps> = ({
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
            <IconWrapper>
              {icon}
            </IconWrapper>

            <WidgetStyledTexts>
              <ExtraSubtitleStyled>{title}</ExtraSubtitleStyled>
              <SmallTextStyled>
                {text}
              </SmallTextStyled>
            </WidgetStyledTexts>

          </WidgetStyledContent>
        </WidgetStyled>
      })}
    </List>
}

export default VerticalWidgets