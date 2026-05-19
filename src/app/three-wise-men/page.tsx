import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { ProductsSection } from '@/components/home/SoftwareSections'

export const metadata: Metadata = {
  title: 'Hated By Many',
  description: 'Three Wise Men — crypto-backed gifting with NFT levels on Base L2.',
}

export default function ThreeWiseMenPage() {
  return (
    <main className="min-h-screen bg-obsidian pt-24">
      <ProductsSection />
      <Footer />
    </main>
  )
}
