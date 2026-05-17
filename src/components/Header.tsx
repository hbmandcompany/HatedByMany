'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const nav = [
  { label: 'Chapter I', href: '/#chapter-i' },
  { label: 'Chapter II', href: '/#chapter-ii' },
  { label: 'Chapter III', href: '/#chapter-iii' },
  { label: 'Whitepaper', href: '/whitepaper' },
]

export function Header() {
  return (
    <motion.header
      initial={false}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-2xl font-medium tracking-[0.2em] text-pearl"
        >
          HBM
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-mist transition hover:text-pearl"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/download"
            className="hidden rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-pearl transition hover:border-champagne/60 hover:text-champagne sm:inline-flex"
          >
            Clients
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center rounded-full bg-pearl/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-obsidian shadow-lux transition hover:bg-pearl"
          >
            Console
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
