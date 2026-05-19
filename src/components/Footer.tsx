'use client'

import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { footerColumns, footerUtilityLinks } from '@/lib/footerLinks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone/10 bg-graphite/90">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-1">
            <div className="font-display text-2xl tracking-[0.25em] text-parchment">HBM</div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
              Luxury enterprise SaaS holding — biblical conviction,
              and software built to endure audit and time.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-mist">
              <MapPin className="h-4 w-4 text-champagne" />
              Wyoming, USA
            </div>
            <Link
              href="/login"
              className="mt-6 inline-flex rounded-full border border-stone/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-parchment transition-colors hover:border-champagne/50"
            >
              Console login
            </Link>
          </div>

          {footerColumns.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href + link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-mist transition-colors hover:text-parchment"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-stone/10 pt-8">
          {footerUtilityLinks.map((link) => (
            <Link
              key={link.href + link.name}
              href={link.href}
              className="text-xs text-mist transition-colors hover:text-parchment"
              {...(link.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center text-xs text-mist sm:flex-row sm:text-left">
          <p>© {year} Hated By Many Holdings. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">
            Structured for audit · Built for permanence
          </p>
        </div>
      </div>
    </footer>
  )
}
