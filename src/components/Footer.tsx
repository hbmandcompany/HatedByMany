'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const footerSections = [
  {
    title: 'Company',
    links: [
      { name: 'Whitepaper', href: '/whitepaper' },
      { name: 'Collections', href: '/collections' },
      { name: 'Wallet', href: '/wallet' },
    ],
  },
  {
    title: 'Community',
    links: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Careers', href: '/careers' },
      { name: 'News', href: '/news' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Customer Service', href: '/customer-service' },
      { name: 'Legal', href: '/legal' },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-graphite/80">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-display text-2xl tracking-[0.25em] text-pearl">
              HBM
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
              If the work invites scrutiny, we accept it. We build software for
              teams who measure time in decades, not quarters.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-mist">
              <MapPin className="h-4 w-4 text-champagne" />
              Wyoming, USA
            </div>
          </motion.div>
          {footerSections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-mist transition hover:text-pearl"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-mist sm:flex-row sm:text-left">
          <p>
            © {year} Hated By Many Holdings. All rights reserved. Crafted with
            precision.
          </p>
          <div className="flex gap-6">
            <Link href="/network" className="hover:text-pearl">
              Network
            </Link>
            <Link href="/solutions" className="hover:text-pearl">
              Solutions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
