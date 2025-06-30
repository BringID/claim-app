'use client'

import React, { FC, useEffect, useState } from 'react'
import { IProps } from './types'
import {
  Container,
  Title,
  DatePickerClassName,
  InputFieldContainer,
  InputPrefix
} from './styled-components'
import { InputPenIcon } from '@/components/icons'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const DatePickerComponent: FC<IProps> = ({
  note,
  dateFormat,
  title,
  disabled,
  onChange,
  className,
  value,
  minDate,
}) => {
  const [dateValue, setDateValue] = useState<Date | null>(value || new Date())

  return (
    <Container className={className}>
      {title && <Title>{title}</Title>}
      <InputFieldContainer>
        <InputPrefix>
          <InputPenIcon />
        </InputPrefix>
        <DatePicker
          selected={dateValue}
          disabled={disabled}
          className={DatePickerClassName}
          minDate={minDate}
          dateFormat={dateFormat}
          onChange={(date) => {
            setDateValue(date)
            onChange && onChange(date)
          }}
        />
      </InputFieldContainer>
      
    </Container>
  )
}

export default DatePickerComponent
