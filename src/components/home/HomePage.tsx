'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { ArrowDown, ArrowUpRight, Check } from 'lucide-react'
import { Footer } from '@/components/Footer'
import {
  covenantTenets,
  gospelPassages,
  heroMetrics,
  platformPillars,
  services,
  trustSignals,
} from '@/lib/homeContent'
import {
  MetricCard,
  ParallaxImage,
  PassageBlock,
  SectionShell,
} from '@/components/home/ImmersivePrimitives'
import {
  ConsoleDashboardSection,
  IntegrationsSection,
  PricingSection,
  ProductsSection,
  SecuritySection,
  WorkflowSection,
} from '@/components/home/SoftwareSections'

export function HomePage() {
  const rootRef = useRef<HTMLDivElement>(null)

  return (
    <div
      id="main-scroll"
      ref={rootRef}
      className="immersive-scroll noise text-pearl"
    >
      {/* ——— Hero ——— */}
      <section
        id="hero"
        className="relative flex min-h-screen flex-col justify-end overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/smartwatch-hero.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/60 to-obsidian" />
        <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6 pb-16 pt-32 sm:px-10 lg:pb-24 lg:pt-40">
          <p
            className="belarus-eyebrow text-[0.65rem] sm:text-xs"
          >
            <span className="text-belarus-red">●</span> Мінск · Вільня · Нью-Ёрк
            <span className="mx-3 text-white/20">|</span>
            Enterprise SaaS holding · Est. MMXX
          </p>

          <div
            className="mt-10 max-w-5xl"
          >
            <h1 className="font-display text-[clamp(2.85rem,9vw,6rem)] leading-[0.98] tracking-tight">
              hated
              <span className="text-champagne/90"> by many.</span>
              <br />
              <span className="italic text-pearl/90">faithful to One.</span>
            </h1>
            <div className="mt-10 h-px w-32 bg-white/15" />
            <p className="manuscript mt-10 max-w-3xl text-lg leading-[1.9] text-mist md:text-xl">
              Hated By Many Holdings is a luxury software atelier — Belarusian
              discipline, biblical conviction, and enterprise rigor composed into
              a single portfolio operating system. We underwrite platforms for
              capital markets, regulated desks, and creator economies that must
              remain legible under audit, elegant under pressure, and durable
              beyond the tenure of any single team.
            </p>
            <p className="manuscript mt-6 max-w-3xl text-base leading-[1.85] text-mist/90">
              This is not marketing copy set atop a generic dashboard. It is the
              public face of a covenant: we build as stewards, document as
              witnesses, and ship as artisans who believe excellence is an act of
              worship — slow where wisdom demands, swift where mercy requires.
            </p>
          </div>

          <div
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="#platform"
              className="inline-flex items-center justify-center rounded-full bg-pearl px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-obsidian shadow-lux transition hover:bg-champagne"
            >
              Explore platform
            </Link>
            <Link
              href="#chapter-i"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-pearl transition hover:border-champagne/50 hover:text-champagne"
            >
              Read chapters
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-mist transition hover:text-champagne"
            >
              Enter console
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/learn-more"
              className="inline-flex items-center gap-2 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-mist transition hover:text-champagne"
            >
              Diligence kit
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div
            className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {heroMetrics.map((m) => (
              <div
                key={m.label}
              >
                <MetricCard {...m} />
              </div>
            ))}
          </div>
        </div>

        <a
          href="#platform"
          className="absolute bottom-8 right-8 z-20 hidden flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.35em] text-mist transition-colors hover:text-champagne md:flex"
        >
          Scroll
          <ArrowDown className="h-4 w-4" />
        </a>
      </section>

      <ConsoleDashboardSection />
      <ProductsSection />
      <WorkflowSection />
      <SecuritySection />
      <IntegrationsSection />
      <PricingSection />

      {/* ——— Chapter I ——— */}
      <SectionShell
        id="chapter-i"
        watermark="I"
        className="bg-obsidian"
      >

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
          <div className="max-w-4xl">
            <p className="chapter-label">Раздзел I · Chapter I</p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight">
              The Story of
              <span className="text-champagne"> Jesus Christ</span>
            </h2>
            <p className="manuscript mt-8 text-lg leading-[1.9] text-mist md:text-xl">
              The Gospel is not a slide in our pitch deck — it is the narrative
              that judges our roadmaps. What follows is told slowly, as one would
              read Scripture at candlelight: not to perform piety, but to anchor
              a software house that otherwise could drift into the arrogance of
              our industry.
            </p>
          </div>

          <div className="mt-20 grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="space-y-12 lg:space-y-14">
              {gospelPassages.map((p, i) => (
                <PassageBlock key={p.marker} {...p} index={i} />
              ))}
              <blockquote
               
                className="glass-panel border-l-2 border-belarus-red/70 p-8 md:p-10"
              >
                <p className="font-display text-2xl italic leading-snug text-pearl/95 md:text-3xl">
                  &ldquo;For God so loved the world that He gave His only Son,
                  that whoever believes in Him should not perish but have
                  eternal life.&rdquo;
                </p>
                <footer className="mt-6 text-xs uppercase tracking-[0.3em] text-champagne">
                  John 3:16 · Public domain of heaven
                </footer>
              </blockquote>
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start">
              <div
               
                className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/10 shadow-lux"
              >
                <Image
                  src="/_ (36).jpeg"
                  alt="Light breaking through darkness"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                  <p className="text-xs uppercase tracking-[0.35em] text-champagne">
                    Meditation
                  </p>
                  <p className="mt-3 font-display text-3xl leading-snug text-pearl">
                    The Lamb who was slain — and lives
                  </p>
                  <p className="manuscript mt-4 text-sm leading-relaxed text-mist">
                    We do not decorate with crosses; we orient our craft toward
                    the One who bore them. Every sprint retrospective asks a
                    question uncommon in SaaS: did we serve truth, or merely
                    velocity?
                  </p>
                </div>
              </div>
              <div
               
                className="mt-6 glass-panel p-6 text-sm leading-relaxed text-mist"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
                  Internal charter · excerpt
                </p>
                <p className="manuscript mt-3">
                  Employees, contractors, and partners are expected to treat
                  customers, data, and one another with the gravity Scripture
                  assigns to bearing God&apos;s name — not as a HR policy, but
                  as a design constraint on how we ship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* ——— Chapter II ——— */}
      <SectionShell id="chapter-ii" watermark="II" className="overflow-hidden">
        <ParallaxImage
          src="/phonelines.jpeg"
          alt=""
          className="absolute inset-0"
          overlay="from-obsidian/95 via-obsidian/88 to-obsidian"
        />
        <div className="grid-overlay pointer-events-none absolute inset-0 opacity-30" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="chapter-label">Раздзел II · Chapter II</p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight">
              Our Services to
              <span className="text-champagne"> our Savior</span>
            </h2>
            <p className="manuscript mt-8 text-lg leading-[1.9] text-mist md:text-xl">
              We are a software house — yet we do not worship the machine. What
              we offer below is incense: enterprise platforms, capital rails, and
              publishing meshes described in the language of diligence rooms,
              framed by the fear of the Lord and the love of neighbor.
            </p>
            <p className="manuscript mt-6 text-base leading-[1.85] text-mist/90">
              Engagements begin with architecture, not aesthetics — though our
              aesthetics are deliberate. We partner with founders, CIOs, and
              allocators who treat software as fiduciary infrastructure: latency
              matters because people wait; clarity matters because auditors read;
              beauty matters because humans deserve dignity in every click.
            </p>
          </div>

          <div className="mt-20 space-y-8">
            {services.map((item) => (
              <article
                key={item.id}
                className="glass-panel overflow-hidden rounded-[2rem]"
              >
                <div className="h-px bg-white/10" />
                <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:p-10 lg:grid-cols-[1.2fr_0.8fr_auto] lg:gap-12">
                  <div>
                    <p className="text-xs italic leading-relaxed text-champagne/90">
                      {item.verse}
                    </p>
                    <h3 className="mt-4 font-display text-3xl text-pearl md:text-4xl">
                      {item.title}
                    </h3>
                    <p className="manuscript mt-5 text-base leading-[1.85] text-mist md:text-lg">
                      {item.summary}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {item.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex gap-3 text-sm leading-relaxed text-mist"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-pine" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden lg:block">
                    <div className="h-full w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
                  </div>
                  <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:min-w-[12rem]">
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.28em] text-mist">
                        {item.metric.label}
                      </p>
                      <p className="mt-2 font-display text-4xl text-pearl">
                        {item.metric.value}
                      </p>
                    </div>
                    <Link
                      href="/solutions"
                      className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-champagne hover:text-pearl"
                    >
                      Briefing
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-24">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-champagne">
              Platform pillars
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {platformPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
                >
                  <h4 className="font-display text-xl text-pearl">{pillar.title}</h4>
                  <p className="manuscript mt-3 text-sm leading-[1.8] text-mist">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p
           
            className="manuscript mx-auto mt-16 max-w-3xl text-center text-base leading-[1.9] text-mist md:text-lg"
          >
            Like the tabernacle artisans of old, we measure twice and ship once.
            Atlas governs capital operations; Meridian, editorial revenue;
            Nocturne, creator-owned distribution — collections united by one
            design language, divided only where sovereignty and residency
            demand. Request a briefing; we answer as servants, not sovereigns.
          </p>
        </div>
      </SectionShell>

      {/* ——— Chapter III ——— */}
      <SectionShell
        id="chapter-iii"
        watermark="III"
        className="flex flex-col bg-gradient-to-b from-graphite via-obsidian to-obsidian"
      >

        <div className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-6 py-24 sm:px-10 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="chapter-label">Раздзел III · Chapter III</p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight">
              The Covenant of
              <span className="text-champagne"> Craft</span>
            </h2>
            <p className="manuscript mt-8 text-lg leading-[1.9] text-mist md:text-xl">
              Transform. Do not conform. We publish this charter so customers,
              regulators, and our own engineers know the spine beneath our
              interfaces — a professional SaaS discipline that refuses to sever
              ethics from architecture.
            </p>
          </div>

          <ul
           
            className="mx-auto mt-14 grid max-w-3xl gap-4"
          >
            {covenantTenets.map((tenet, i) => (
              <li
                key={tenet}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-left"
              >
                <span className="font-display text-lg text-champagne/80">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="manuscript text-base leading-[1.8] text-mist">{tenet}</p>
              </li>
            ))}
          </ul>

          <div className="mt-16">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-mist">
              Trust & compliance surface
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {trustSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-mist"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>

          <blockquote
           
            className="mx-auto mt-16 max-w-3xl text-center"
          >
            <p className="font-display text-2xl italic leading-snug text-pearl/95 md:text-4xl">
              Let every deployment be an act of obedience — software that
              outlives its makers because it was built in fear of the Lord and
              love of neighbor.
            </p>
          </blockquote>

          <div
           
            className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/learn-more"
              className="inline-flex items-center justify-center rounded-full bg-pearl px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-obsidian transition hover:bg-champagne"
            >
              Request briefing
            </Link>
            <Link
              href="/download"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-pearl transition hover:border-champagne/50"
            >
              Client downloads
            </Link>
            <Link
              href="/whitepaper"
              className="inline-flex items-center gap-2 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-champagne hover:text-pearl"
            >
              Read whitepaper
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-12 text-center text-xs uppercase tracking-[0.35em] text-mist">
            Hated By Many Holdings · Wyoming, USA
          </p>
        </div>

        <Footer />
      </SectionShell>
    </div>
  )
}
