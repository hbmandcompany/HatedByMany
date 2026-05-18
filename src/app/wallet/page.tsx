import type { Metadata } from 'next'
import { TreasuryPage } from '@/components/pages/TreasuryPage'

export const metadata: Metadata = {
  title: 'Hated By Many',
  description: 'HBM Treasury — acquire, stake, and understand tokenomics and banking structure.',
}

export default function WalletPage() {
  return <TreasuryPage />
}
