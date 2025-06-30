import { FC } from 'react'

type TProps = {
  className?: string
}

const TwitchPreviewIcon: FC<TProps> = ({
  className
}) => {
  return <svg className={className} width="50" height="54" viewBox="0 0 50 54" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.8955 3L9.38798 5.49995L5 33.6249L18.1642 40.4999L20.0448 43L32.5821 38.625L46.373 27.9999L47 18L46.373 3.62499L44.4925 3H11.8955Z" fill="white"/>
  <path d="M10.4167 0L0 9.64286V44.3571H12.5V54L22.9167 44.3571H31.25L50 26.9999V0H10.4167ZM45.8333 25.0714L37.5 32.7856H29.1667L21.8751 39.5356V32.7856H12.5V3.85704H45.8333V25.0714Z" fill="#9146FF"/>
  <path d="M39.5846 10.6069H35.4179V22.1783H39.5846V10.6069Z" fill="#9146FF"/>
  <path d="M28.128 10.6069H23.9613V22.1783H28.128V10.6069Z" fill="#9146FF"/>
  </svg>
}

export default TwitchPreviewIcon
