import type { Metadata } from 'next'
import { PlatformBrandPage } from '@/components/pages/PlatformBrandPage'
import { kissBrand } from '@/lib/platformBrandContent'

export const metadata: Metadata = {
  title: 'Hated By Many',
  description:
    'Kiss — visual assets and photography for the Hated By Many platform. Editorial and institutional imagery.',
}

export default function KissPage() {
  return <PlatformBrandPage brand={kissBrand} />
}
