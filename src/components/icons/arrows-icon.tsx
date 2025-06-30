import { FC } from 'react'

type TProps = {
  className?: string
}

const ArrowsIcon: FC<TProps> = ({
  className
}) => {
  return <svg className={className} width="43" height="12" viewBox="0 0 43 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.72869 12.0004L6.25284 11.4827L1.40767 6.64391H22.1562V5.90243H1.40767L6.25284 1.06365L5.72869 0.545898L0.00141907 6.27317L5.72869 12.0004Z" fill="#80858F"/>
    <path d="M36.4276 12.0004L35.9034 11.4827L40.7486 6.64391H20V5.90243H40.7486L35.9034 1.06365L36.4276 0.545898L42.1548 6.27317L36.4276 12.0004Z" fill="#80858F"/>
  </svg>
}

export default ArrowsIcon

