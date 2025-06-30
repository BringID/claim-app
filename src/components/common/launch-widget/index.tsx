'use client'
import React, { FC } from 'react'
import {
  LaunchWidgetComponent,
  LaunchWidgetContent,
  LaunchWidgetTitle
} from './styled-components'
import { TProps } from './types'

const LaunchWidget: FC<TProps> = ({
  children,
  className,
  title
}) => {
  return <LaunchWidgetComponent className={className}>
    {title && <LaunchWidgetTitle>{title}</LaunchWidgetTitle>}
    <LaunchWidgetContent>
      {children}
    </LaunchWidgetContent>
  </LaunchWidgetComponent>
}

export default LaunchWidget