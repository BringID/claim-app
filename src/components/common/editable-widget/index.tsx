'use client'

import {
  FC,
  useState
} from 'react'

import {
  WidgetStyled,
  TextStyled,
  EditButton,
  ShowMore,
  Header,
  SmallSubtitleStyled
} from './styled-components'
import {
  TProps
} from './types'
import {
  InputPenIcon
} from '@/components/icons'

const VALUE_LENGTH = 240

const defineValue = (
  value: string,
  shortened: boolean
) => {
  if (value.length <= VALUE_LENGTH) {
    return value
  }
  const valueFormatted = shortened ? `${value.slice(0, VALUE_LENGTH)}...` : value
  return valueFormatted
}

const EditableWidget: FC<TProps> = ({
  action,
  title,
  value
}) => {

  const [
    shortened,
    setShortened
  ] = useState<boolean>(true)

  const valueFormatted = defineValue(
    value,
    shortened
  )

  return <WidgetStyled>
    <Header>
      <SmallSubtitleStyled>
      {title}
      </SmallSubtitleStyled>
      
      <EditButton onClick={action}>
        <InputPenIcon />
      </EditButton>
    </Header>
    <TextStyled>
      {valueFormatted}
      {
        shortened &&
        value.length > VALUE_LENGTH && 
        <ShowMore
          onClick={() => setShortened(false)}
        >show more</ShowMore>
      }
    </TextStyled>
  </WidgetStyled>
}

export default EditableWidget 