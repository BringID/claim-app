import { FC } from 'react'

type TProps = {
  className?: string
}

const WarpcastIcon: FC<TProps> = ({
  className
}) => {
  return <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.4" y="0.4" width="15.2" height="15.2" rx="4.6" stroke="#BCBCBC" strokeWidth="0.8"/>
    <path d="M5.57741 11L3.88423 5.18182H5.43821L6.31605 8.99432H6.36435L7.36719 5.18182H8.63423L9.63707 9.00284H9.68537L10.5661 5.18182H12.1172L10.4268 11H9.07173L8.02344 7.47159H7.97798L6.92969 11H5.57741Z" fill="#BCBCBC"/>
  </svg>
}

export default WarpcastIcon
