import { FC } from 'react'

type TProps = {
  className?: string
}

const ExternalLinkIcon: FC<TProps> = ({
  className
}) => {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 3h6v6" stroke="currentColor"></path><path stroke="currentColor" d="M10 14 21 3"></path><path stroke="currentColor" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
  </svg>
}

export default ExternalLinkIcon
