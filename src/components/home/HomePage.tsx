'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Building2,
  Globe2,
  Layers,
  ShieldCheck,
} from 'lucide-react'
import { Footer } from '@/components/Footer'

const pillars = [
  {
    title: 'Holding OS',
    body: 'Shared governance, procurement, and design tokens for every studio in the portfolio.',
    icon: Building2,
  },
  {
    title: 'Sovereign SaaS',
    body: 'Multi-tenant control planes with regional isolation and tactile, rounded interfaces.',
    icon: Layers,
  },
  {
    title: 'Trust fabric',
    body: 'Attested builds, signer choreography, and evidence packs auditors can replay.',
    icon: ShieldCheck,
  },
]

export function HomePage() {
  return (
    <div className="snap-scroll noise text-pearl">
      <section
        id="hero"
        className="snap-panel relative flex items-center overflow-hidden bg-gradient-to-b from-graphite to-obsidian"
      >
        <div className="orb -left-32 top-20 h-72 w-72 bg-ribbon animate-drift" />
        <div className="orb right-0 bottom-10 h-96 w-96 bg-grove animate-drift" />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-28 lg:grid-cols-2 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-champagne">
              Luxury software holding company
            </p>
            <h1 className="font-display text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
              hated
              <span className="text-mist"> by many.</span>
              <br />
              built for the few.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-mist md:text-lg">
              Full-screen clarity, Minsk–Warsaw–New York craft roots, and enterprise
              depth — a portfolio operating system for teams who treat software as
              permanent infrastructure.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/download"
                className="inline-flex items-center justify-center rounded-full bg-pearl px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-obsidian shadow-lux transition hover:bg-champagne"
              >
                Client downloads
              </Link>
              <Link
                href="/learn-more"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-pearl transition hover:border-champagne/60 hover:text-champagne"
              >
                Request briefing
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="glass-panel relative overflow-hidden rounded-[2.5rem] p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src="/globe.png"
                  alt="Global network visualization"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-obsidian/70 px-4 py-3 text-xs uppercase tracking-[0.2em] backdrop-blur-xl">
                <span className="text-mist">Mesh status</span>
                <span className="text-pearl">Nominal</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="ecosystem"
        className="snap-panel relative flex items-center bg-obsidian"
      >
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">
              Section 02 — ecosystem
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Full-bleed storytelling, stitched to enterprise rigor.
            </h2>
            <p className="mt-4 text-mist md:text-lg">
              Belarusian and Baltic atelier influence — disciplined grids, bold
              vertical rhythm, generous breathing room between statements. Each
              venture keeps its voice; HBM supplies the geometry.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="glass-panel flex flex-col gap-4 rounded-[2rem] p-8"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04]">
                  <item.icon className="h-6 w-6 text-champagne" />
                </div>
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="text-sm leading-relaxed text-mist">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="platform"
        className="snap-panel relative flex items-center bg-gradient-to-b from-obsidian via-graphite to-obsidian"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 lg:grid-cols-2 sm:px-6 lg:px-8 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">
              Section 03 — platform
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              Rounded surfaces, sharp contracts.
            </h2>
            <p className="text-mist md:text-lg">
              The HBM canvas layers CRM-grade workflows with editorial polish.
              Motion is restrained; contrast is intentional; every control is sized
              for gloved hands and boardrooms alike.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Deployments / yr', value: '48' },
                { label: 'Median latency', value: '312ms' },
                { label: 'Regions', value: '11' },
                { label: 'Customer NPS', value: '68' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-4"
                >
                  <div className="text-3xl font-display">{stat.value}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-mist">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-champagne"
            >
              Explore solutions
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-panel overflow-hidden rounded-[2.5rem] p-4">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem]">
                <Image
                  src="/phonelines.jpeg"
                  alt="Network operations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="network"
        className="snap-panel flex items-center bg-obsidian"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-24 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="flex-1 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">
              Section 04 — network
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              Interconnects that respect jurisdiction.
            </h2>
            <p className="text-mist md:text-lg">
              Private connectors for banks, public relays for creators, and a
              documentation spine shared across every collection in the holding
              group.
            </p>
            <Link
              href="/network"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-pearl transition hover:border-champagne/50"
            >
              <Globe2 className="h-4 w-4 text-champagne" />
              Topology brief
            </Link>
          </div>
          <div className="flex-1 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-10 shadow-lux">
            <ul className="space-y-6 text-sm text-mist">
              <li className="flex gap-4">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent-rose" />
                Edge attestation with offline break-glass procedures.
              </li>
              <li className="flex gap-4">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent-pine" />
                Regional data residencies mirrored with cold storage escrow.
              </li>
              <li className="flex gap-4">
                <span className="mt-1 h-2 w-2 rounded-full bg-champagne" />
                Unified observability with partner-ready audit exports.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="charter"
        className="snap-panel flex items-center bg-graphite"
      >
        <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-champagne">
            Section 05 — charter
          </p>
          <blockquote className="mt-8 font-display text-3xl leading-snug md:text-4xl">
            Transform. Do not conform. Software should feel like inherited
            wealth — heavy with intent, light in the hand.
          </blockquote>
          <p className="mt-6 text-sm text-mist">
            Internal design charter · shared across Atlas, Meridian, and Nocturne
            collections.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="snap-panel flex min-h-screen flex-col justify-end bg-obsidian"
      >
        <Footer />
      </section>
    </div>
  )
}
