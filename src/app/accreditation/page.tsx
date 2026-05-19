import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hated By Many',
  description: 'Standards for participation in the Hated By Many ecosystem',
}

export default function AccreditationPage() {
  return (
    <main className="min-h-screen bg-obsidian pt-24">
      <section className="border-b border-stone/15 bg-graphite/80">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-belarus-red/90">ACCR-STD</p>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-champagne">
            Standards · Hated By Many LLC
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-parchment md:text-6xl">
            Accreditation
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">
            Standards for participation in the Hated By Many ecosystem
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 01</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">What accreditation means</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Accreditation is an internal trust and eligibility system. It defines who may contribute,
            publish, or integrate into the ecosystem. It is not external regulatory certification.
          </p>
        </article>
        <article className="saas-window p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 02</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Contributor accreditation</h2>
          <ul className="mt-6 space-y-2 text-sm text-pearl">
            <li>Output-based qualification for writers and media contributors</li>
            <li>Reputation tracking against published contribution ledger</li>
            <li>Policy adherence and attribution integrity</li>
          </ul>
        </article>
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 03</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Ecosystem accreditation</h2>
          <ul className="mt-6 space-y-2 text-sm text-pearl">
            <li>Developers integrating lightra.in</li>
            <li>Creatives operating via michelangelo.agency</li>
            <li>Researchers contributing through vanity.company</li>
            <li>Media contributors across the network</li>
          </ul>
        </article>
        <article className="rounded-[1.75rem] border border-stone/10 bg-graphite/40 p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 04</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Identity & verification layer</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Wallet-based identity linking where applicable, persistent contribution history, and reputation
            tracking form the verification layer for accredited participation.
          </p>
        </article>
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 05</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Access tiers</h2>
          <ul className="mt-6 space-y-2 text-sm text-pearl">
            <li>Accredited Contributor — verified output and policy compliance</li>
            <li>Accredited Partner — integration and institutional alignment</li>
            <li>Ecosystem Participant — governed access to defined system surfaces</li>
          </ul>
        </article>
      </section>

      <section className="border-t border-stone/15 bg-graphite/30">
        <blockquote className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="passage-block font-display text-xl text-parchment md:text-2xl">
            Accreditation is the gate of trust — serious, sovereign, and oriented toward decades of
            institutional operation.
          </p>
        </blockquote>
      </section>

      <div className="mx-auto flex max-w-5xl gap-6 px-4 py-8 text-[10px] uppercase tracking-widest sm:px-6 lg:px-8">
        <Link href="/documentation" className="text-champagne hover:text-parchment">Documentation</Link>
        <Link href="/" className="text-champagne hover:text-parchment">Home</Link>
      </div>
      <Footer />
    </main>
  )
}
