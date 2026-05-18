'use client'

import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { NightSkyBackground } from '@/components/home/NightSkyBackground'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center"
    >
      <NightSkyBackground />

      <div className="pointer-events-none absolute inset-0 bg-obsidian/50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-obsidian" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-28 sm:px-10 lg:py-36">
        <div className="flex items-center justify-center gap-4">
          <span className="hidden h-px w-12 bg-belarus-red/50 sm:block" />
          <p className="belarus-eyebrow text-[0.65rem] sm:text-xs">
            <span className="text-belarus-red">●</span> Мінск · Вільня · Нью-Ёрк
            <span className="mx-3 text-stone/40">|</span>
            Est. MMXX
          </p>
          <span className="hidden h-px w-12 bg-belarus-red/50 sm:block" />
        </div>

        <div className="mt-14 lg:mt-16">
          <p className="font-display text-sm uppercase tracking-[0.45em] text-champagne">
            Hated By Many Holdings
          </p>
          <h1 className="mt-6 font-display text-[clamp(3rem,10vw,6.5rem)] leading-[0.95] tracking-tight text-parchment">
            hated
            <span className="text-champagne"> by many.</span>
          </h1>
          <p className="mt-4 font-display text-[clamp(1.75rem,4vw,3rem)] italic leading-tight text-pearl">
            faithful to One.
          </p>
        </div>

        <div className="mt-12 max-w-2xl">
          <p className="manuscript text-lg leading-[1.9] text-pearl md:text-xl">
            A luxury software atelier — biblical conviction and enterprise rigor in
            one portfolio operating system.
          </p>
          <p className="manuscript mt-5 text-base leading-[1.85] text-mist">
            We build as stewards, document as witnesses, and ship as artisans who
            believe excellence is worship.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href="#platform"
            className="inline-flex items-center justify-center rounded-full bg-frost px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-obsidian shadow-lux transition hover:bg-parchment"
          >
            Explore platform
          </Link>
          <Link
            href="#chapter-i"
            className="inline-flex items-center justify-center rounded-full border border-stone/30 bg-obsidian/40 px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-pearl backdrop-blur-sm transition hover:border-champagne/40 hover:text-champagne"
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
        </div>
      </div>

      <a
        href="#platform"
        className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.35em] text-mist transition-colors hover:text-champagne md:flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4" />
      </a>
    </section>
  )
}
