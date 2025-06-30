import {
  DropAudienceIcon,
  XAudienceIcon
} from '@/components/icons'

type TDefineAudienceIcon = (
  schemaId: string
) => React.ReactNode

const defineAudienceIcon: TDefineAudienceIcon = (
  schemaId
) => {
  switch (schemaId) {
    case 'aad08c14f0a24759a077939ad2d0b829':
      return <XAudienceIcon />
    default:
      return <DropAudienceIcon />
  }
}

export default defineAudienceIcon