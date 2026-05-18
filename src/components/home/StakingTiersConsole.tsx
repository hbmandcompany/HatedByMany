'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, Check, Crown, Scale, Users } from 'lucide-react'
import { stakingTiers, type StakingTier } from '@/lib/stakingContent'

export type StakingTierId = 'participant' | 'delegate' | 'sovereign'

const tierTabs: { id: StakingTierId; label: string }[] = [
  { id: 'participant', label: 'Participant' },
  { id: 'delegate', label: 'Delegate' },
  { id: 'sovereign', label: 'Sovereign' },
]

const tierIcons: Record<StakingTierId, typeof Users> = {
  participant: Users,
  delegate: Scale,
  sovereign: Crown,
}

function WindowChrome({ title }: { title: string }) {
  return (
    <div className="saas-chrome flex items-center gap-3 border-b border-white/10 px-4 py-3">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-accent-rose/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-champagne/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-pine/80" />
      </div>
      <span className="flex-1 text-center text-[0.65rem] font-medium uppercase tracking-[0.2em] text-mist">
        {title}
      </span>
      <span className="w-12" />
    </div>
  )
}

function TierPanel({ tier }: { tier: StakingTier }) {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-6">
        <div>
          <h3 className="font-display text-2xl text-pearl sm:text-3xl">{tier.title}</h3>
          <p className="mt-1 text-sm text-mist">{tier.stakeRange}</p>
        </div>
        <span className="font-display text-4xl text-white/[0.06] sm:text-5xl">
          {String(tier.index).padStart(2, '0')}
        </span>
      </div>

      <div className="space-y-4 px-4 py-4 sm:px-6">
        <p className="text-sm leading-relaxed text-mist">{tier.summary}</p>
        <p className="rounded-xl border border-champagne/20 bg-champagne/5 px-4 py-3 font-mono text-xs text-champagne/90 sm:text-sm">
          {tier.weightFormula}
        </p>
        <p className="text-xs italic text-mist">{tier.votingRole}</p>
      </div>

      <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
            Governance metrics
          </p>
          <dl className="mt-4 space-y-3">
            {tier.metrics.map((m) => (
              <div key={m.label} className="border-b border-white/5 pb-3 last:border-0">
                <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-mist">
                  {m.label}
                </dt>
                <dd className="mt-1 font-display text-xl text-pearl">{m.value}</dd>
                {m.note ? <dd className="text-xs text-mist">{m.note}</dd> : null}
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
            Return analysis
          </p>
          <dl className="mt-4 space-y-3">
            {tier.returns.map((m) => (
              <div key={m.label} className="border-b border-white/5 pb-3 last:border-0">
                <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-mist">
                  {m.label}
                </dt>
                <dd className="mt-1 font-display text-xl text-pearl">{m.value}</dd>
                {m.note ? <dd className="text-xs text-mist">{m.note}</dd> : null}
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:col-span-2 lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
            Membership rights
          </p>
          <ul className="mt-4 space-y-2">
            {tier.rights.map((right) => (
              <li key={right} className="flex gap-2 text-xs leading-relaxed text-mist sm:text-sm">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-pine" />
                {right}
              </li>
            ))}
          </ul>
          <Link
            href="/whitepaper"
            className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-champagne hover:text-pearl"
          >
            Full protocol memo
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export function StakingTiersConsole() {
  const [activeTier, setActiveTier] = useState<StakingTierId>('participant')
  const tier = stakingTiers.find((t) => t.id === activeTier) ?? stakingTiers[0]

  return (
    <div id="chapter-ii" className="saas-window overflow-hidden shadow-lux">
      <WindowChrome title="HBM Staking Membership · protocol" />
      <div className="flex min-h-[32rem] flex-col lg:flex-row">
        <aside className="hidden w-52 shrink-0 border-r border-white/10 bg-obsidian/80 p-4 lg:block">
          <p className="mb-4 px-2 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-mist">
            Membership tier
          </p>
          <nav className="space-y-1">
            {tierTabs.map((tab) => {
              const Icon = tierIcons[tab.id]
              const isActive = activeTier === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTier(tab.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                    isActive
                      ? 'bg-white/[0.08] text-pearl'
                      : 'text-mist hover:bg-white/[0.04] hover:text-pearl'
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0 text-champagne" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </aside>

        <div className="flex min-h-0 flex-1 flex-col bg-obsidian/40">
          <div className="border-b border-white/10 px-4 py-2 lg:hidden">
            <div className="flex gap-1 overflow-x-auto pb-1">
              {tierTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTier(tab.id)}
                  className={`shrink-0 rounded-lg px-3 py-1.5 text-xs ${
                    activeTier === tab.id
                      ? 'bg-white/[0.08] text-pearl'
                      : 'text-mist'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <p className="px-4 pt-4 text-xs font-semibold uppercase tracking-[0.25em] text-champagne sm:px-6">
            {tier.subtitle}
          </p>

          <TierPanel tier={tier} />
        </div>
      </div>
    </div>
  )
}
