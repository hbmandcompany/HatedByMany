'use client'

import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import type { StakingTier } from '@/lib/stakingContent'

export function StakingTierCard({ tier }: { tier: StakingTier }) {
  return (
    <article
      id={`staking-${tier.id}`}
      className="snap-panel flex min-h-screen items-center border-t border-white/10"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:py-20">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-4xl text-pearl md:text-5xl">{tier.title}</h3>
            <p className="mt-2 text-sm text-mist">{tier.stakeRange}</p>
          </div>
          <span className="font-display text-6xl leading-none text-white/[0.06] md:text-8xl">
            {String(tier.index).padStart(2, '0')}
          </span>
        </div>

        <p className="manuscript mt-8 max-w-3xl text-base leading-[1.85] text-mist md:text-lg">
          {tier.summary}
        </p>
        <p className="mt-4 rounded-xl border border-champagne/20 bg-champagne/5 px-5 py-4 font-mono text-sm text-champagne/90">
          {tier.weightFormula}
        </p>
        <p className="mt-4 text-sm italic text-mist">{tier.votingRole}</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
              Governance metrics
            </p>
            <dl className="mt-5 space-y-4">
              {tier.metrics.map((m) => (
                <div key={m.label} className="border-b border-white/5 pb-4 last:border-0">
                  <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-mist">
                    {m.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl text-pearl">{m.value}</dd>
                  {m.note ? <dd className="text-xs text-mist">{m.note}</dd> : null}
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
              Return analysis
            </p>
            <dl className="mt-5 space-y-4">
              {tier.returns.map((m) => (
                <div key={m.label} className="border-b border-white/5 pb-4 last:border-0">
                  <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-mist">
                    {m.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl text-pearl">{m.value}</dd>
                  {m.note ? <dd className="text-xs text-mist">{m.note}</dd> : null}
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
              Membership rights
            </p>
            <ul className="mt-5 space-y-3">
              {tier.rights.map((right) => (
                <li key={right} className="flex gap-3 text-sm leading-relaxed text-mist">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-pine" />
                  {right}
                </li>
              ))}
            </ul>
            <Link
              href="/whitepaper"
              className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-champagne hover:text-pearl"
            >
              Full protocol memo
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
