import {
  InstagramPreviewIcon,
  RedditPreviewIcon,
  UberPreviewIcon,
  SpotifyPreviewIcon,
  XPreviewIcon,
  EbayPreviewIcon,
  DiscordPreviewIcon,
  OnlyFansPreviewIcon
} from '@/components/icons/audience-preview-icons'
import {
  DropAudienceIcon
} from '@/components/icons'
import { toUtf8String } from 'ethers'

type TDefineAudiencePreviewIcon = (
  schemaId: string
) => (React.ReactNode | null)

const defineAudiencePreviewIcon: TDefineAudiencePreviewIcon = (
  schemaId
) => {
  switch (toUtf8String(schemaId)) {
    case 'f168c186d29648a2987994998b6616be':
      return <OnlyFansPreviewIcon />
    case 'f887f25a146d4e72a484eeac6888f4a1':
      return <SpotifyPreviewIcon />
    case 'ce96fc856ab242038fccf8aecc2070d7':
      return <DiscordPreviewIcon />
    case 'aad08c14f0a24759a077939ad2d0b829':
      return <XPreviewIcon />
    case '952719f43b084ceca547e3745f76348d':
      return <EbayPreviewIcon />
    case '526db2684fb7493fba9cf758ce892a71':
      return <UberPreviewIcon />
    case 'e3ed063579f9488293774bf37358cf06':
      return <RedditPreviewIcon />
    case 'd317d8d00da24f6aa5e1bf2789ac0821':
      return <InstagramPreviewIcon />
    
    default:
      return <DropAudienceIcon />
  }
}

export default defineAudiencePreviewIcon