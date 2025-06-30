'use client'

import { FC } from 'react'
import TProps from './types'
import {
  Container,
  ButtonStyled
} from './styled-components'
import { useRouter } from 'next/navigation'
import { 
  dropsAmountPerPage
} from '@/app/configs'

const defineIfNextButtonIsDisabled = (
  total:number,
  limit: number,
  offset: number
) => {
  return total <= (offset + limit)
}

const Pagination: FC<TProps> = ({
  limit, // 10
  offset,
  className,
  baseUrl,
  count,
  total // 125
}) => {

  const nextDisabled = defineIfNextButtonIsDisabled(
    total,
    limit,
    offset
  )

  if (nextDisabled) {
    return null
  }

  return <Container className={className}>
    <ButtonStyled
      disabled={nextDisabled}
      size='small'
      appearance='additional'
      href={`${baseUrl}?limit=${limit + dropsAmountPerPage}&offset=${offset}`}
    >
      Show more
    </ButtonStyled>

  </Container>
}

export default Pagination