'use client'

import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import type { StakingTier } from '@/lib/stakingContent'

function WindowChrome({ tier }: { tier: StakingTier }) {
  return (
    <div className="saas-chrome flex items-center gap-3 border-b border-stone/15 px-4 py-3">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-belarus-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-champagne/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-belarus-green/60" />
      </div>
      <span className="flex-1 text-center text-[0.65rem] font-medium uppercase tracking-[0.2em] text-mist">
        HBM Staking · {tier.title}
      </span>
      <span className="w-12" />
    </div>
  )
}

export function StakingTierFullscreen({ tier }: { tier: StakingTier }) {
  return (
    <article
      id={`staking-${tier.id}`}
      className="snap-panel flex min-h-screen items-center border-t border-stone/10 bg-obsidian py-12"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <div className="saas-window overflow-hidden shadow-lux">
          <WindowChrome tier={tier} />

          <div className="bg-graphite/90">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-stone/10 px-6 py-6 sm:px-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-belarus-red/80">
                  {tier.subtitle}
                </p>
                <h3 className="mt-2 font-display text-4xl text-parchment md:text-5xl">
                  {tier.title}
                </h3>
                <p className="mt-2 text-sm text-mist">{tier.stakeRange}</p>
              </div>
              <span className="font-display text-6xl leading-none text-stone/20 md:text-8xl">
                {String(tier.index).padStart(2, '0')}
              </span>
            </div>

            <div className="space-y-4 px-6 py-6 sm:px-8">
              <p className="manuscript max-w-3xl text-base leading-[1.85] text-pearl md:text-lg">
                {tier.summary}
              </p>
              <p className="rounded-2xl border border-champagne/15 bg-obsidian/80 px-5 py-4 font-mono text-sm text-champagne">
                {tier.weightFormula}
              </p>
              <p className="text-sm italic text-mist">{tier.votingRole}</p>
            </div>

            <div className="grid gap-5 px-6 pb-8 sm:px-8 lg:grid-cols-3">
              <div className="rounded-2xl border border-stone/12 bg-obsidian/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
                  Governance metrics
                </p>
                <dl className="mt-5 space-y-4">
                  {tier.metrics.map((m) => (
                    <div key={m.label} className="border-b border-stone/8 pb-4 last:border-0">
                      <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-mist">
                        {m.label}
                      </dt>
                      <dd className="mt-1 font-display text-2xl text-parchment">{m.value}</dd>
                      {m.note ? <dd className="text-xs text-mist">{m.note}</dd> : null}
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-2xl border border-stone/12 bg-obsidian/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
                  Return analysis
                </p>
                <dl className="mt-5 space-y-4">
                  {tier.returns.map((m) => (
                    <div key={m.label} className="border-b border-stone/8 pb-4 last:border-0">
                      <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-mist">
                        {m.label}
                      </dt>
                      <dd className="mt-1 font-display text-2xl text-parchment">{m.value}</dd>
                      {m.note ? <dd className="text-xs text-mist">{m.note}</dd> : null}
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-2xl border border-stone/12 bg-obsidian/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
                  Membership rights
                </p>
                <ul className="mt-5 space-y-3">
                  {tier.rights.map((right) => (
                    <li key={right} className="flex gap-3 text-sm leading-relaxed text-pearl">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-belarus-green/80" />
                      {right}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/whitepaper"
                  className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-champagne hover:text-parchment"
                >
                  Full protocol memo
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
