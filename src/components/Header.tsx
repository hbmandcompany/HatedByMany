'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-start px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-2xl font-medium tracking-[0.2em] text-parchment"
        >
          HBM
        </Link>
      </div>
    </header>
  )
}
