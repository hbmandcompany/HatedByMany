import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { covenantTenets } from '@/lib/homeContent'
import { StakingTiersSection } from '@/components/home/StakingTiersSection'

export const metadata: Metadata = {
  title: 'Hated By Many',
  description: 'Chapter III · The Covenant of Craft — staking tiers and charter.',
}

export default function ChapterThreePage() {
  return (
    <main className="min-h-screen bg-obsidian pt-24">
      <section className="border-b border-stone/10 bg-graphite pb-8">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="chapter-label">Раздзел III · Chapter III</p>
            <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight text-parchment">
              The Covenant of
              <span className="text-champagne"> Craft</span>
            </h1>
            <p className="manuscript mt-8 text-lg leading-[1.9] text-mist md:text-xl">
              Transform. Do not conform. We publish this charter so customers, regulators, and our own
              engineers know the spine beneath our interfaces — a professional SaaS discipline that
              refuses to sever ethics from architecture.
            </p>
          </div>

          <ul className="mx-auto mt-14 grid max-w-3xl gap-4">
            {covenantTenets.map((tenet, i) => (
              <li
                key={tenet}
                className="flex gap-4 rounded-2xl border border-stone/10 bg-graphite/[0.03] px-6 py-5 text-left"
              >
                <span className="font-display text-lg text-champagne/80">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="manuscript text-base leading-[1.8] text-mist">{tenet}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <StakingTiersSection />

      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-10">
        <Link href="/" className="text-xs uppercase tracking-widest text-champagne hover:text-parchment">
          ← Home
        </Link>
      </div>

      <Footer />
    </main>
  )
}
