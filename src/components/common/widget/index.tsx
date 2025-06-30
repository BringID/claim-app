import React, { FC, isValidElement } from 'react'
import {
  WidgetComponent,
  WidgetContent,
  WidgetTitle,
  FinishedIndicator,
  WidgetTitleImage,
  WidgetTitleImageContainer
} from './styled-components'
import { TProps } from './types'
import { StaticImageData } from "next/image"


const defineImage = (
  image?: string | React.ReactNode | StaticImageData,
  iconBackground?: string,
  iconPadding?: string
) => {
  if (!image) {
    return
  }

  if (
    typeof image === 'string'
  ) {
    return <WidgetTitleImageContainer iconBackground={iconBackground} iconPadding={iconPadding}>
      <WidgetTitleImage
        src={image as string}
        alt='title'
        width={38}
        height={38}
      />
    </WidgetTitleImageContainer>
  }

  if (isValidElement(image)) {
    return <WidgetTitleImageContainer iconBackground={iconBackground} iconPadding={iconPadding}>
      {image}
    </WidgetTitleImageContainer>
  }

  return <WidgetTitleImageContainer iconBackground={iconBackground} iconPadding={iconPadding}>
    <WidgetTitleImage
      src={image as StaticImageData}
      alt='title'
      width={38}
      height={38}
    />
  </WidgetTitleImageContainer>

}

const Widget: FC<TProps> = ({
  children,
  className,
  title,
  finished,
  image,
  iconBackground,
  iconPadding
}) => {

  return <WidgetComponent className={className}>
    {defineImage(image, iconBackground, iconPadding)}
    {title && <WidgetTitle>
      {title}
      {finished && <FinishedIndicator>✓</FinishedIndicator>}
    </WidgetTitle>}
    {children && <WidgetContent title={title}>
      {children}
    </WidgetContent>}
  </WidgetComponent>
}

export default Widget