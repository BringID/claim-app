"use client"
import {
  FC,
  // useEffect,
  // useState
} from 'react'

import {
  ButtonStyled,
  // LoaderStyled
} from './styled-components'
import TProps from './types' 
// import { useConnect } from 'wagmi'


const CustomRedirectButton: FC<TProps> = ({
  claimingFinishedButtonTitle,
  claimingFinishedButtonURL,
  // claimingFinishedAutoRedirect
  claimingFinishedButtonOn
}) => {

  if (!claimingFinishedButtonOn) {
    return null
  }

  if (claimingFinishedButtonURL) {
    return <ButtonStyled
      onClick={() => {
        window.open(claimingFinishedButtonURL, '_blank')
      }}
      appearance='action'
    >
      {claimingFinishedButtonTitle || 'About drop'}
    </ButtonStyled>
  }

  return null
}

export default CustomRedirectButton
