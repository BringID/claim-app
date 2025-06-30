import { FC } from 'react'

type TProps = {
  className?: string
}

const AudienceXIcon: FC<TProps> = ({
  className
}) => {
  return <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.5665 20.3247L46.4356 0H42.2012L26.6855 17.6477L14.2931 0H0L18.7397 26.6864L0 48H4.23464L20.6196 29.3635L33.7069 48H48L28.5655 20.3247H28.5665ZM22.7666 26.9215L20.8679 24.2642L5.76044 3.11923H12.2646L24.4565 20.1839L26.3552 22.8412L42.2032 45.0226H35.699L22.7666 26.9225V26.9215Z" fill="white"/>
  </svg>
}

export default AudienceXIcon
