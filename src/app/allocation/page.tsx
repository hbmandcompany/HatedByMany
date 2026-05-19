import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hated By Many',
  description: 'Treasury capital distribution across the Hated By Many ecosystem',
}

export default function AllocationPage() {
  return (
    <main className="min-h-screen bg-obsidian pt-24">
      <section className="border-b border-stone/15 bg-graphite/80">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-belarus-red/90">ALLOC-OPS</p>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-champagne">
            Treasury layer · Hated By Many LLC
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-parchment md:text-6xl">
            Allocation
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">
            Treasury capital distribution across the Hated By Many ecosystem
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 01</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Overview of allocation system</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Allocation is governed by treasury logic. It determines how capital is deployed across the
            ecosystem and ensures sustainability between output and funding.
          </p>
        </article>
        <article className="saas-window p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 02</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Allocation categories</h2>
          <ul className="mt-6 space-y-2 text-sm text-pearl">
            <li>Contributor allocation — writers, creators, output-based compensation</li>
            <li>Infrastructure allocation — engineering, lightra.in, platform maintenance</li>
            <li>Media allocation — editorial, distribution, michelangelo.agency creative systems</li>
            <li>Ecosystem incentives — rewards and participation instruments where defined</li>
            <li>Reserve allocation — risk capital and long-term stabilization</li>
          </ul>
        </article>
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 03</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Allocation principles</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Merit-based distribution, output-driven compensation, long-term sustainability over short-term
            growth, and alignment between contributors and ecosystem health.
          </p>
        </article>
        <article className="rounded-[1.75rem] border border-stone/10 bg-graphite/40 p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 04</p>
          <h2 className="mt-3 font-display text-2xl text-parchment">Allocation mechanism</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Allocation decisions follow treasury logic with governance input on structural changes. Cycles
            are defined quarterly unless policy specifies otherwise. Performance is measured against
            attributed output.
          </p>
        </article>
      </section>

      <section className="border-t border-stone/15 bg-graphite/30">
        <blockquote className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="passage-block font-display text-xl text-parchment md:text-2xl">
            Capital deployment is policy, not impulse. Allocation is how the institution honors production
            with resources.
          </p>
        </blockquote>
      </section>

      <div className="mx-auto flex max-w-5xl gap-6 px-4 py-8 text-[10px] uppercase tracking-widest sm:px-6 lg:px-8">
        <Link href="/wallet" className="text-champagne hover:text-parchment">Treasury</Link>
        <Link href="/" className="text-champagne hover:text-parchment">Home</Link>
      </div>
      <Footer />
    </main>
  )
}
