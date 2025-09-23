import styled from "styled-components"
import { Button } from "../.."
import { ExternalLinkIcon } from "@/components/icons"

export const Nav = styled.nav`
  margin-right: 10px;
`

export const ButtonStyled = styled(Button)`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const ExternalLinkIconStyled = styled(ExternalLinkIcon)`
  color: #FFF;
  max-width: 18px;
`