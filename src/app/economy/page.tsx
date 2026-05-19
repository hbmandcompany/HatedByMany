import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hated By Many',
  description: 'The value creation system of the Hated By Many ecosystem',
}

export default function EconomyPage() {
  return (
    <main className="min-h-screen bg-obsidian pt-24">
      <section className="border-b border-stone/15 bg-graphite/80">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-belarus-red/90">ECO-CORE</p>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-champagne">
            System layer · Hated By Many LLC
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-parchment md:text-6xl">
            Economy
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">
            The value creation system of the Hated By Many ecosystem
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 01</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Economic overview</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            The ecosystem is a multi-layer value production network. Media, infrastructure, and creative
            output generate economic activity; contributors participate as independent producers within
            that network.
          </p>
        </article>
        <article className="saas-window p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 02</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Value creation system</h2>
          <ul className="mt-6 space-y-2 text-sm text-pearl">
            <li>Media production — journalism and commentary via hbmandcompany.com</li>
            <li>Creative production — 3D, motion, digital media via michelangelo.agency</li>
            <li>Financial infrastructure — treasury, lending, APIs via lightra.in</li>
            <li>Research & intelligence — analysis and system design via vanity.company</li>
          </ul>
        </article>
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 03</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Value flow model</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Attention is generated → content is produced → distribution occurs → revenue is created →
            treasury accumulates capital → capital is allocated → contributors are compensated. This
            closed loop defines the operating economy.
          </p>
        </article>
        <article className="rounded-[1.75rem] border border-stone/10 bg-graphite/40 p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 04</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Network effects</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            More contributors increase content volume; more content increases attention; more attention
            increases revenue; revenue strengthens treasury; treasury enables expansion. The loop is
            self-reinforcing when governed by allocation discipline.
          </p>
        </article>
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 05</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Economic principles</h2>
          <ul className="mt-6 space-y-2 text-sm text-pearl">
            <li>Output-based value creation</li>
            <li>Merit-driven contribution</li>
            <li>Treasury-backed sustainability</li>
            <li>Long-term compounding over short-term extraction</li>
          </ul>
        </article>
      </section>

      <section className="border-t border-stone/15 bg-graphite/30">
        <blockquote className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="passage-block font-display text-xl text-parchment md:text-2xl">
            The economy is production-first. Cultural and financial output are the same circuit —
            measured, attributed, and redeployed.
          </p>
        </blockquote>
      </section>

      <div className="mx-auto flex max-w-5xl gap-6 px-4 py-8 text-[10px] uppercase tracking-widest sm:px-6 lg:px-8">
        <Link href="/allocation" className="text-champagne hover:text-parchment">Allocation</Link>
        <Link href="/" className="text-champagne hover:text-parchment">Home</Link>
      </div>
      <Footer />
    </main>
  )
}
