import type { Metadata } from 'next'
import { PlatformBrandPage } from '@/components/pages/PlatformBrandPage'
import { michelangeloBrand } from '@/lib/platformBrandContent'

export const metadata: Metadata = {
  title: 'Hated By Many',
  description:
    'Michelangelo — creative production for the Hated By Many platform. 3D, motion, and licensable digital assets.',
}

export default function MichelangeloPage() {
  return <PlatformBrandPage brand={michelangeloBrand} />
}
