import type { Metadata } from 'next'
import { CompanyBriefingPage } from '@/components/pages/CompanyBriefingPage'

export const metadata: Metadata = {
  title: 'Hated By Many',
  description: 'The HBM Briefing — company intelligence in top-news format.',
}

export default function AboutUsPage() {
  return <CompanyBriefingPage />
}
