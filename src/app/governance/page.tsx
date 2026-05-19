import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hated By Many',
  description: 'Decision-making architecture of the Hated By Many ecosystem',
}

export default function GovernanceChapterPage() {
  return (
    <main className="min-h-screen bg-obsidian pt-24">
      <section className="border-b border-stone/15 bg-graphite/80">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-belarus-red/90">GOV-II</p>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-champagne">
            Chapter II · Hated By Many LLC
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-parchment md:text-6xl">
            Chapter II · Governance
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">
            Decision-making architecture of the Hated By Many ecosystem
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 01</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Governance overview</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Governance defines how system-level decisions are made. It governs treasury behavior,
            ecosystem rules, and structural updates — ensuring alignment between contributors and the
            broader network.
          </p>
        </article>
        <article className="saas-window p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 02</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Governance scope</h2>
          <ul className="mt-6 space-y-2 text-sm text-pearl">
            <li>Treasury allocation rules (policy, not day-to-day execution)</li>
            <li>Contributor eligibility frameworks</li>
            <li>Ecosystem policy updates</li>
            <li>Infrastructure evolution guidelines</li>
            <li>Protocol-level adjustments where applicable</li>
          </ul>
        </article>
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 03</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">What governance does not control</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Day-to-day operations, individual contributor output decisions (unless specified in policy),
            and external legal structures outside Hated By Many LLC remain outside governance scope.
          </p>
        </article>
        <article className="rounded-[1.75rem] border border-stone/10 bg-graphite/40 p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 04</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Governance structure</h2>
          <ul className="mt-6 space-y-2 text-sm text-pearl">
            <li>Treasury authority layer — overseen by Hated By Many LLC</li>
            <li>Operational layer — hbmandcompany.com, lightra.in, michelangelo.agency</li>
            <li>Contributor layer — independent 1099 operators</li>
          </ul>
        </article>
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 05</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Governance principles</h2>
          <ul className="mt-6 space-y-2 text-sm text-pearl">
            <li>Stability over volatility</li>
            <li>Contribution-based legitimacy</li>
            <li>Long-term alignment</li>
            <li>Transparency in system structure</li>
            <li>Separation of creation vs. control</li>
          </ul>
        </article>
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 06</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Ecosystem alignment</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Governance ensures media economy, financial infrastructure, creative production, and research
            remain aligned under one institutional charter.
          </p>
        </article>
      </section>

      <section className="border-t border-stone/15 bg-graphite/30">
        <blockquote className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="passage-block font-display text-xl text-parchment md:text-2xl">
            Control is structured, legible, and deliberate. Governance exists so the institution outlives
            any single operator or product cycle.
          </p>
        </blockquote>
      </section>

      <div className="mx-auto flex max-w-5xl gap-6 px-4 py-8 text-[10px] uppercase tracking-widest sm:px-6 lg:px-8">
        <Link href="/whitepaper" className="text-champagne hover:text-parchment">Protocol charter</Link>
        <Link href="/" className="text-champagne hover:text-parchment">Home</Link>
      </div>
      <Footer />
    </main>
  )
}
