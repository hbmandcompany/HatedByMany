import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { SecuritySection } from '@/components/home/SoftwareSections'

export const metadata: Metadata = {
  title: 'Hated By Many',
  description: 'Security and compliance — trust engineered into every layer.',
}

export default function SecurityCompliancePage() {
  return (
    <main className="min-h-screen bg-obsidian pt-24">
      <SecuritySection />
      <Footer />
    </main>
  )
}
