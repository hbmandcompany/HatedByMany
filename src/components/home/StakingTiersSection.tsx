'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { TREASURY_STAKED_TOKENS } from '@/lib/stakingContent'
import { StakingTiersConsole } from '@/components/home/StakingTiersConsole'

function formatTokens(n: number) {
  return new Intl.NumberFormat('en-US').format(n)
}

export function StakingTiersSection() {
  return (
    <section className="bg-obsidian py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="chapter-label">Раздзел II · Chapter II</p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] leading-tight">
            Our Services to
            <span className="text-champagne"> our Savior</span>
          </h2>
          <p className="manuscript mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
            Three voting memberships in the protocol treasury. Your influence is
            always incremental — stake more, weigh more — but the tier you hold
            defines which proposals you may touch and how returns accrue.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-mist">
            Illustrative network stake: {formatTokens(TREASURY_STAKED_TOKENS)} HBM
          </p>
        </div>

        <div className="mt-14">
          <StakingTiersConsole />
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/whitepaper"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-champagne hover:text-pearl"
          >
            Full protocol memo
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
