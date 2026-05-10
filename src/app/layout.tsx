import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Header } from '@/components/Header'
import './globals.css'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
})

const sans = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hbm.example.com'),
  title: {
    default: 'HBM Holdings — Luxury Software Group',
    template: '%s · HBM Holdings',
  },
  description:
    'Hated By Many Holdings builds sovereign enterprise SaaS, capital infrastructure, and creator platforms — composed as a single luxury software group.',
  icons: { icon: '/fav.png' },
  openGraph: {
    title: 'HBM Holdings — Luxury Software Group',
    description:
      'A luxury software holding company for enterprises that require calm, precision, and durable systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-obsidian">
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
