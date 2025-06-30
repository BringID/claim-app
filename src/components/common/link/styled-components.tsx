import styled from "styled-components"
import Link from 'next/link'


export const LinkExternal = styled.a`
  color: ${props => props.theme.primaryTextColor};
  text-decoration: none;
  transition: color .3s;

  svg {
    path {
      transition: fill .3s;
    }
  }

  &:hover {
    color: ${props => props.theme.hoverLinkTextColor};

    svg {
      path {
        fill: ${props => props.theme.hoverLinkTextColor};
      }
    }
  }
`

export const LinkInternal = styled(Link)`
  color: ${props => props.theme.primaryTextColor};
  text-decoration: underline;

  svg {
    path {
      transition: fill .3s;
    }
  }

  &:hover {
    color: ${props => props.theme.hoverLinkTextColor};

    svg {
      path {
        fill: ${props => props.theme.hoverLinkTextColor};
      }
    }
  }
`