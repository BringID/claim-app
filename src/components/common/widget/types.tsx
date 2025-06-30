import { StaticImageData } from "next/image"

export type TProps = {
  className?: string
  title?: string
  children?: React.ReactNode

  finished?: boolean
  image?: string | React.ReactNode | StaticImageData
  iconBackground?: string
  iconPadding?: string
}