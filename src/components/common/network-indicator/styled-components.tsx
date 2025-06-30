import styled from "styled-components"
import { TProps } from "./types"
import Image from 'next/image'

export const Container = styled(Image)<TProps>`
  display: block;
  cursor: pointer;
  border-radius: 16px;
  margin-left: 8px;
`
