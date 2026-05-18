'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const nav = [
  { label: 'Platform', href: '/#platform' },
  { label: 'Products', href: '/#products' },
  { label: 'Security', href: '/#security' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Chapters', href: '/#chapter-i' },
]

export function Header() {
  const [hidden, setHidden] = useState(false)
  const lastScroll = useRef(0)

  useEffect(() => {
    const getScrollEl = () => document.getElementById('main-scroll')

    const onScroll = () => {
      const el = getScrollEl()
      const y = el ? el.scrollTop : window.scrollY

      if (y > lastScroll.current && y > 72) {
        setHidden(true)
      } else if (y < lastScroll.current) {
        setHidden(false)
      }

      lastScroll.current = y
    }

    const el = getScrollEl()
    const target: HTMLElement | Window = el ?? window

    target.addEventListener('scroll', onScroll, { passive: true })
    return () => target.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-stone/10 bg-obsidian/90 backdrop-blur-xl transition-transform duration-300 ease-out ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-2xl font-medium tracking-[0.2em] text-parchment"
        >
          HBM
        </Link>
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.18em] text-mist transition-colors hover:text-parchment"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/whitepaper"
            className="text-xs font-medium uppercase tracking-[0.18em] text-mist transition-colors hover:text-parchment"
          >
            Whitepaper
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/download"
            className="hidden rounded-full border border-stone/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-parchment transition-colors hover:border-champagne/60 hover:text-champagne sm:inline-flex"
          >
            Clients
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center rounded-full bg-frost/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-obsidian shadow-lux transition-colors hover:bg-frost"
          >
            Console
          </Link>
        </div>
      </div>
    </header>
  )
}
