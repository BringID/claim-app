import styled, { css } from "styled-components"
import TProps from "./types"

export const TooltipContainer = styled.span<TProps>`
  position: relative;
  color: ${props => props.theme.primaryTextColor};

  &:before {
    content: '';
    width: 10px;
    height: 10px;
    background-color: ${props => props.theme.tooltipBackgroundColor};
    position: absolute;
    opacity: 0;
    top: calc(100% + 5px);
    right: 50%;
    transform: translateX(50%) rotate(45deg);
  
    ${props => props.position === 'top' && css`
      bottom: calc(100% + 7px);
      top: auto;
    `}
  
  }
  &:after {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    content: "${props => props.text}";
    right: 50%;
    transform: translateX(50%);
    top: calc(100% + 10px);
    border-radius: 8px;
    color: ${props => props.theme.tooltipTextColor};
    background-color: ${props => props.theme.tooltipBackgroundColor};
    z-index: 10;
    padding: 8px 16px;
    font-size: 13px;
    min-width: 128px;
    width: max-content;
    max-width: 300px;
    text-align: center;
    line-height: 1;
    transform: translateY(-20px);

    ${props => props.position === 'right' && css`
      right: auto;
      left: 0;
    `}

    ${props => props.position === 'top' && css`
      right: 50%;
      transform: translateX(50%);
      bottom: calc(100% + 10px);
      top: auto;
    `}
  }

  &:hover:after {
    opacity: 1;
  }
  &:hover:before {
    opacity: 1;
  }
`