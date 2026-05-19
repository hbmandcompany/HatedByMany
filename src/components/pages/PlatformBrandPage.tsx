'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Footer } from '@/components/Footer'
import { MetricCard } from '@/components/home/ImmersivePrimitives'
import type { PlatformBrand } from '@/lib/platformBrandContent'

export function PlatformBrandPage({ brand }: { brand: PlatformBrand }) {
  return (
    <main className="min-h-screen bg-obsidian">
      <section className="immersive-section relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-stone/15 pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,26,45,0.12),transparent_55%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-belarus-red/90">
            {brand.code}
          </p>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-champagne">
            {brand.layer}
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,5rem)] leading-[0.95] text-parchment">
            {brand.name}
          </h1>
          <p className="mt-4 max-w-2xl font-display text-xl italic text-pearl md:text-2xl">
            {brand.tagline}
          </p>
          <p className="manuscript mt-8 max-w-2xl text-lg leading-relaxed text-mist md:text-xl">
            {brand.heroBody}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={brand.domainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-frost px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-obsidian transition hover:bg-parchment"
            >
              {brand.externalCta}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              href="/economy"
              className="inline-flex items-center gap-2 rounded-full border border-stone/30 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-pearl transition hover:border-champagne/40 hover:text-champagne"
            >
              Economy layer
            </Link>
          </div>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-widest text-mist">
            {brand.domain}
          </p>
        </div>
      </section>

      <section className="border-b border-stone/15 bg-graphite/40 py-20 lg:py-28">
        <div
          className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 sm:px-10"
        >
          {brand.metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
      </section>

      {brand.capabilities.map((cap, i) => (
        <section
          key={cap.title}
          className={`immersive-section border-b border-stone/15 py-24 lg:py-32 ${
            i % 2 === 0 ? 'bg-obsidian' : 'bg-graphite/30'
          }`}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <p className="chapter-label">
                {String(i + 1).padStart(2, '0')} · Capability
              </p>
              <h2 className="mt-4 font-display text-3xl text-parchment md:text-4xl">
                {cap.title}
              </h2>
              <p className="manuscript mt-6 text-base leading-relaxed text-mist md:text-lg">
                {cap.body}
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {cap.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-stone/20 bg-obsidian/50 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-champagne"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`glass-panel flex min-h-[280px] items-center justify-center rounded-[2rem] border border-stone/10 p-10 ${
                i % 2 === 1 ? 'lg:order-1' : ''
              }`}
            >
              <span
                aria-hidden
                className="font-display text-[clamp(4rem,12vw,8rem)] leading-none text-stone/20"
              >
                {brand.name.slice(0, 1)}
              </span>
            </div>
          </div>
        </section>
      ))}

      <section className="border-b border-stone/15 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <p className="saas-eyebrow">Production pipeline</p>
          <h2 className="mt-4 font-display text-3xl text-parchment md:text-4xl">
            How {brand.name} ships
          </h2>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brand.pipeline.map((step, i) => (
              <li
                key={step.step}
                className="saas-window relative p-6 md:p-8"
              >
                <span className="font-mono text-[10px] text-belarus-red">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-xl text-parchment">{step.step}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-graphite/50 py-24 lg:py-32">
        <blockquote className="mx-auto max-w-4xl px-6 text-center sm:px-10">
          <p className="passage-block font-display text-2xl leading-relaxed text-parchment md:text-3xl">
            {brand.integration}
          </p>
          <footer className="mt-8 text-xs uppercase tracking-[0.3em] text-champagne">
            Hated By Many LLC · Platform integration
          </footer>
        </blockquote>
      </section>

      <section className="border-t border-stone/15 py-12">
        <div
          className="mx-auto flex max-w-6xl flex-wrap gap-6 px-6 text-[10px] uppercase tracking-widest sm:px-10"
        >
          <Link href="/" className="text-champagne hover:text-parchment">
            Home
          </Link>
          <Link href="/three-wise-men" className="text-champagne hover:text-parchment">
            Three Wise Men
          </Link>
          <Link href="/wallet" className="text-champagne hover:text-parchment">
            Treasury
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
