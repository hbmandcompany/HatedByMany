import type { Metadata } from 'next'
import { PlatformBrandPage } from '@/components/pages/PlatformBrandPage'
import { vanityBrand } from '@/lib/platformBrandContent'

export const metadata: Metadata = {
  title: 'Hated By Many',
  description:
    'Vanity — research and intelligence for the Hated By Many platform. System design and economic modeling.',
}

export default function VanityPage() {
  return <PlatformBrandPage brand={vanityBrand} />
}
