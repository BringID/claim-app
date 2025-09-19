import { TokenCounter } from "@/app/components";
import styled from "styled-components";
import { ExternalLinkIcon } from "@/components/icons";

export const TokenCounterStyled = styled(TokenCounter)`
  margin: 24px 0;
  background-color: ${props => props.theme.warningStatusBackgroundColor};
  border-color:  ${props => props.theme.warningStatusBorderColor};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: none;
  }
`

export const ExternalLinkIconStyled = styled(ExternalLinkIcon)`
  max-width: 16px;
`