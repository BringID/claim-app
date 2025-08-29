
'use server'
import {
  generateMetadataUtil,
  createSDK,
} from '@/utils'
import type { Metadata } from 'next'
import { cache } from 'react'
import { dropsAmountPerPage } from '@/app/configs'
import Content from './content'

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataUtil({
    title: `Explore Active Token Drops Secured by zkTLS | zkBring`,
    description: 'Browse all active zkTLS-secured token drops on zkBring. Claim tokens by verifying your access to supported web platforms. Safe, seamless, and on-chain.'
  })
}

const defaultLimit = String(dropsAmountPerPage)

export default async function HomePage() {
  return <Content />
}

