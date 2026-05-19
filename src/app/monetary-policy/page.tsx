import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hated By Many',
  description: 'Issuance and economic control framework of the Hated By Many ecosystem',
}

export default function MonetaryPolicyPage() {
  return (
    <main className="min-h-screen bg-obsidian pt-24">
      <section className="border-b border-stone/15 bg-graphite/80">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-belarus-red/90">MP-I</p>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-champagne">
            Chapter I · Hated By Many LLC
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-parchment md:text-6xl">
            Chapter I · Monetary Policy
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">
            Issuance and economic control framework of the Hated By Many ecosystem
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 01</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Monetary policy overview</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Monetary policy governs how value is created and introduced into the system. It ensures
            stability across media, contributors, and infrastructure, aligning economic output with
            ecosystem growth.
          </p>
        </article>
        <article className="saas-window p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 02</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Issuance model</h2>
          <p className="mt-6 text-sm text-mist">Value enters the system through defined channels only:</p>
          <ul className="mt-4 space-y-2 text-sm text-pearl">
            <li>Contributor-based issuance — output-driven rewards</li>
            <li>Treasury-controlled distribution</li>
            <li>Ecosystem incentive programs tied to measurable activity</li>
            <li>Media revenue reinvestment cycles</li>
          </ul>
        </article>
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 03</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Supply logic</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Where protocol instruments exist, total supply may be fixed or dynamically managed under
            treasury policy. Emissions are controlled; distribution is tied to participation. This
            framework does not constitute investment advice, profit guarantees, or equity offerings.
          </p>
        </article>
        <article className="rounded-[1.75rem] border border-stone/10 bg-graphite/40 p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 04</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Treasury role in monetary policy</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            The treasury acts as the central stabilizing mechanism. It regulates capital flow to
            contributors, infrastructure, media production, and reserves — preventing imbalance in
            system growth.
          </p>
        </article>
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 05</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Contribution-based value creation</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Value is issued in response to measurable output through hbmandcompany.com, michelangelo.agency,
            and lightra.in. Issuance is reactive, not speculative.
          </p>
        </article>
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 06</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Stability mechanisms</h2>
          <ul className="mt-6 space-y-2 text-sm text-pearl">
            <li>Treasury reserves and reserve-ratio policy</li>
            <li>Controlled emissions and allocation balancing</li>
            <li>Output-based distribution logic</li>
            <li>Long-term sustainability bias over short-term extraction</li>
          </ul>
        </article>
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 07</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Relationship to other system layers</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Economy defines value creation flow. Allocation defines capital distribution. Governance
            defines rule changes. Thesis defines system philosophy. Monetary policy is the mechanical
            engine of the system economy.
          </p>
        </article>
      </section>

      <section className="border-t border-stone/15 bg-graphite/30">
        <blockquote className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="passage-block font-display text-xl text-parchment md:text-2xl">
            Issuance is sovereign, structural, and subordinate to production — the supply side of Hated
            By Many LLC serves the institution, not the reverse.
          </p>
        </blockquote>
      </section>

      <div className="mx-auto flex max-w-5xl gap-6 px-4 py-8 text-[10px] uppercase tracking-widest sm:px-6 lg:px-8">
        <Link href="/investor-relations" className="text-champagne hover:text-parchment">Investor Relations</Link>
        <Link href="/" className="text-champagne hover:text-parchment">Home</Link>
      </div>
      <Footer />
    </main>
  )
}
