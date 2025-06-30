'use server'

import {
  generateMetadataUtil
} from '@/utils'
import type { Metadata } from 'next'
import Content from './content'

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataUtil({
    title: `Explore Active Token Drops Secured by zkTLS | zkBring`,
    description: 'Authorize to claim tokens by verifying your access to supported web platforms. Safe, seamless, and on-chain.'
  })
}

export default async function CreateID () {
  // const headersList = await headers()
  return <Content />
}

