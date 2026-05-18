'use client'

import Link from 'next/link'
import { NightSkyBackground } from '@/components/home/NightSkyBackground'

const scriptureVerses = [
  'If you belonged to the world, it would love you as its own. Because you do not belong to the world, but I chose you out of it, the world hates you.',
  'Whoever hates me hates my Father as well.',
  'They hated me without reason.',
]

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center overflow-hidden text-center"
    >
      <NightSkyBackground />

      <div className="pointer-events-none absolute inset-0 bg-obsidian/50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-obsidian" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-20 pt-24 sm:px-10 sm:pt-28">
        <div className="flex items-center justify-center gap-4">
          <span className="hidden h-px w-12 bg-belarus-red/50 sm:block" />
          <p className="belarus-eyebrow text-[0.65rem] sm:text-xs">
            <span className="text-belarus-red">●</span> Мінск · Вільня · Нью-Ёрк
            <span className="mx-3 text-stone/40">|</span>
            Est. MMXXVI
          </p>
          <span className="hidden h-px w-12 bg-belarus-red/50 sm:block" />
        </div>

        <div className="mt-6 lg:mt-8">
          <p className="font-display text-sm uppercase tracking-[0.45em] text-champagne">
            Hated By Many Holdings
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.75rem,9vw,5.5rem)] leading-[0.95] tracking-tight text-parchment">
            Hated By Many.
          </h1>
          <p className="mt-2 font-display text-[clamp(1.5rem,3.5vw,2.25rem)] italic leading-tight text-pearl">
            For My names sake
          </p>
        </div>

        <blockquote className="glass-panel mx-auto mt-8 max-w-2xl border-l-2 border-belarus-red/50 px-8 py-6 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-belarus-red/90">
            John 15:18–25
          </p>
          <p className="manuscript mt-4 text-lg italic leading-snug text-champagne/90 md:text-xl">
            &ldquo;If the world hates you, keep in mind that it hated me first.&rdquo;
          </p>
          <div className="mt-3 space-y-2">
            {scriptureVerses.map((verse) => (
              <p key={verse} className="manuscript text-base leading-snug text-pearl md:text-lg">
                {verse}
              </p>
            ))}
          </div>
        </blockquote>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href="/about-us"
            className="inline-flex items-center justify-center rounded-full bg-frost px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-obsidian shadow-lux transition hover:bg-parchment"
          >
            The Company
          </Link>
          <Link
            href="/wallet"
            className="inline-flex items-center justify-center rounded-full border border-stone/30 bg-obsidian/40 px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-pearl backdrop-blur-sm transition hover:border-champagne/40 hover:text-champagne"
          >
            Treasury
          </Link>
          <Link
            href="/whitepaper"
            className="inline-flex items-center justify-center rounded-full border border-stone/30 bg-obsidian/40 px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-pearl backdrop-blur-sm transition hover:border-champagne/40 hover:text-champagne"
          >
            Governance
          </Link>
        </div>
      </div>
    </section>
  )
}
