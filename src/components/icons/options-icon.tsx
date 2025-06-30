import { FC } from 'react'

type TProps = {
  className?: string
}

const OptionsIcon: FC<TProps> = ({
  className
}) => {
  return <svg className={className} width="13" height="3" viewBox="0 0 13 3" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect opacity="0.34" width="3" height="3" rx="1.5" fill="#D9D9D9"/>
    <rect opacity="0.34" x="5" width="3" height="3" rx="1.5" fill="#D9D9D9"/>
    <rect opacity="0.34" x="10" width="3" height="3" rx="1.5" fill="#D9D9D9"/>
  </svg>
}

export default OptionsIcon
