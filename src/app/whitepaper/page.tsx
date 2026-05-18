import type { Metadata } from 'next'
import { GovernancePage } from '@/components/pages/GovernancePage'

export const metadata: Metadata = {
  title: 'Hated By Many',
  description: 'HBM Governance — constitutional protocol, voting law, and code of conduct.',
}

export default function WhitepaperPage() {
  return <GovernancePage />
}
