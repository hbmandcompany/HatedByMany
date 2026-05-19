import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hated By Many',
  description: 'The foundational rationale of the Hated By Many ecosystem',
}

export default function ThesisPage() {
  return (
    <main className="min-h-screen bg-obsidian pt-24">
      <section className="border-b border-stone/15 bg-graphite/80">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-belarus-red/90">THESIS-0</p>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-champagne">
            Foundational · Hated By Many LLC
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-parchment md:text-6xl">
            Thesis
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">
            The foundational rationale of the Hated By Many ecosystem
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 01</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Core premise</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            The internet is a financial and cultural coordination system. Media is a productive economic
            asset. Attention converts into capital. Contributors are economic participants in production
            systems — not audience alone.
          </p>
        </article>
        <article className="saas-window p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 02</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">System thesis</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            The ecosystem unifies treasury, economy, allocation, governance, media (hbmandcompany.com),
            infrastructure (lightra.in), and creative production (michelangelo.agency). The design converts
            cultural production into structured economic output.
          </p>
        </article>
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 03</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Contribution theory</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Value is generated through output — articles, media, research, creative assets. Contributors are
            independent operators. Output is tracked, attributed, and rewarded; reputation compounds over
            time.
          </p>
        </article>
        <article className="rounded-[1.75rem] border border-stone/10 bg-graphite/40 p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 04</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Treasury logic</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Treasury is the central coordination mechanism. It allocates capital to media, infrastructure,
            and contributors and stabilizes the network across cycles.
          </p>
        </article>
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 05</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Long-term vision</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            The system evolves into a self-sustaining economic media network — where cultural production is
            measurable, fundable, and persistent as digital infrastructure.
          </p>
        </article>
      </section>

      <section className="border-t border-stone/15 bg-graphite/30">
        <blockquote className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="passage-block font-display text-xl text-parchment md:text-2xl">
            This thesis is why the institution exists: to make conviction, craft, and capital legible in
            one coherent architecture.
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
