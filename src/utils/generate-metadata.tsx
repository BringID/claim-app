import type { Metadata } from 'next'

type TGenerateMetadata = ({
  title,
  description,
  image
}: {
  title?: string
  description: string
  image?: string
}) => Metadata

const generateMetadataUtil: TGenerateMetadata = ({
  title,
  description,
  image
}) => {
  return {
    title: title || 'zkBring Platform',
    description,
    openGraph: {
      title: title || 'zkBring Platform',
      images: [image || '/meta-image.png'],
      description,
      type: 'website'
    },
    twitter: {
      title: title || 'zkBring Platform',
      images: [image || '/meta-image.png'],
      description,
      type: 'website',
      card: 'summary_large_image'
    }
  }
}

export default generateMetadataUtil