import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hated By Many',
  description: 'The Story of Jesus Christ — Chapter I.',
}

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return children
}
