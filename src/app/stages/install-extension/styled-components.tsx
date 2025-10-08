import { LinkStyled } from "@/app/content/styled-components";
import styled from "styled-components";
import { ExternalLinkIcon } from "@/components/icons";

export const Link = styled(LinkStyled)`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 14px;
  gap: 6px;
  margin: 20px auto 0;

  &:hover {
    svg path {
      fill: transparent!important;
    }
  }

`

export const ExternalLinkIconStyled = styled(ExternalLinkIcon)`
  max-width: 16px;
`