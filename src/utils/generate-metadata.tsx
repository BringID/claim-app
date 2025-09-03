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
    title: title || 'BringID Platform',
    description,
    openGraph: {
      title: title || 'BringID Platform',
      images: [image || '/meta-image.png'],
      description,
      type: 'website'
    },
    twitter: {
      title: title || 'BringID Platform',
      images: [image || '/meta-image.png'],
      description,
      type: 'website',
      card: 'summary_large_image'
    }
  }
}

export default generateMetadataUtil