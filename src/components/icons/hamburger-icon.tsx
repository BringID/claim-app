import { FC } from 'react'

type TProps = {
  className?: string
  onClick?: () => void
}

const HamburgerIcon: FC<TProps> = ({
  className,
  onClick
}) => {
  return <svg
    className={className}
    width="24"
    height="18"
    viewBox="0 0 24 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <rect width="24" height="2" fill="#696868"/>
    <rect y="8" width="24" height="2" fill="#696868"/>
    <rect y="16" width="24" height="2" fill="#696868"/>
  </svg>
}

export default HamburgerIcon
