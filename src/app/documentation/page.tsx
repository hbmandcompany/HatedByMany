import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hated By Many',
  description: 'System specification and operational reference for the Hated By Many ecosystem',
}

export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-obsidian pt-24">
      <section className="border-b border-stone/15 bg-graphite/80">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-belarus-red/90">DOC-REF</p>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-champagne">
            System reference · Hated By Many LLC
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-parchment md:text-6xl">
            Documentation
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">
            System specification and operational reference for the Hated By Many ecosystem
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 01</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">System overview</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Hated By Many LLC is a multi-layer institutional media and financial system: media
            (hbmandcompany.com), financial infrastructure (lightra.in), creative production
            (michelangelo.agency), research (vanity.company), and visual assets (kiss.photography).
          </p>
        </article>
        <article className="saas-window p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 02</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Media system</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            hbmandcompany.com operates article publishing, contributor-driven content pipeline, and
            revenue generation through media distribution.
          </p>
        </article>
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 03</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Financial infrastructure</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            lightra.in provides lending and liquidity systems, treasury infrastructure, and financial APIs
            for ecosystem integrations.
          </p>
        </article>
        <article className="rounded-[1.75rem] border border-stone/10 bg-graphite/40 p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 04</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Creative production system</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            michelangelo.agency delivers 3D content, motion graphics, Unity and Three.js workflows, and
            digital asset generation for the network.
          </p>
        </article>
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 05</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Treasury system</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Treasury is the central capital coordination layer. It receives ecosystem revenue and
            distributes to contributors, infrastructure, media production, and reserves per allocation
            policy.
          </p>
        </article>
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 06</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Data & attribution model</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Content and contributions are recorded in a persistent attribution ledger. Contribution
            history may influence participation eligibility where policy defines such linkage.
          </p>
        </article>
      </section>

      <section className="border-t border-stone/15 bg-graphite/30">
        <blockquote className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="passage-block font-display text-xl text-parchment md:text-2xl">
            This documentation is the technical truth layer — implementation detail for operators,
            integrators, and institutional reviewers.
          </p>
        </blockquote>
      </section>

      <div className="mx-auto flex max-w-5xl gap-6 px-4 py-8 text-[10px] uppercase tracking-widest sm:px-6 lg:px-8">
        <Link href="/economy" className="text-champagne hover:text-parchment">Economy</Link>
        <Link href="/" className="text-champagne hover:text-parchment">Home</Link>
      </div>
      <Footer />
    </main>
  )
}
