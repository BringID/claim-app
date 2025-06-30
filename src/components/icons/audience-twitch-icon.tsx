
import { FC } from 'react'

type TProps = {
  className?: string
}

const AudienceTwitchIcon: FC<TProps> = ({
  className
}) => {
  return <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M3.37613 0L0 8.23875V41.91H12.0002V48H18.7501L25.1255 41.91H34.8755L48 29.373V0H3.37613ZM43.5003 27.225L35.999 34.3875H23.9996L17.6242 40.4775V34.3875H7.49973V4.2975H43.4987V27.225H43.5003ZM35.999 12.537V25.074H31.5001V12.537H35.999ZM23.9988 12.537V25.074H19.4999V12.537H23.9988Z" fill="white"/>
  </svg>
}

export default AudienceTwitchIcon
