import Link from 'next/link'
import { ArrowRight, Coins, Landmark, Shield, Wallet } from 'lucide-react'
import { Footer } from '@/components/Footer'
import { stakingTiers, TREASURY_STAKED_TOKENS } from '@/lib/stakingContent'
import {
  acquireSteps,
  allocations,
  bankingLayers,
  revenueFlows,
  tokenomics,
} from '@/lib/treasuryPageContent'

export function TreasuryPage() {
  return (
    <main className="min-h-screen bg-obsidian pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-stone/15">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,26,45,0.12),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
          <p className="saas-eyebrow text-belarus-red/90">Treasury · HBM Coin</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium tracking-tight text-parchment md:text-6xl">
            The banking structure of Hated By Many
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
            Acquire HBM, stake to a tier, and participate in protocol revenue — mapped from
            Wyoming charter through USDC rails to on-chain governance.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Symbol', value: tokenomics.symbol },
              { label: 'Total supply', value: tokenomics.totalSupply },
              { label: 'Circulating', value: tokenomics.circulating },
              { label: 'Staked', value: tokenomics.staked },
            ].map((m) => (
              <div key={m.label} className="saas-metric">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-champagne">
                  {m.label}
                </p>
                <p className="mt-2 font-display text-2xl text-parchment">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acquire */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Wallet className="h-5 w-5 text-belarus-red" />
          <h2 className="font-display text-3xl text-parchment">Where to find & buy HBM</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {acquireSteps.map((s) => (
            <div key={s.step} className="saas-window p-6">
              <span className="font-display text-3xl text-belarus-red/60">{s.step}</span>
              <h3 className="mt-3 font-display text-xl text-parchment">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-frost px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-obsidian transition hover:bg-parchment"
          >
            Open swap router <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-full border border-stone/30 px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-pearl transition hover:border-champagne/40"
          >
            Console staking vault
          </Link>
        </div>
        <p className="mt-6 text-xs text-mist">
          Contract verification: FairnessRegistry · {tokenomics.chain}. Not investment advice.
        </p>
      </section>

      {/* Banking layers */}
      <section className="border-y border-stone/10 bg-graphite/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Landmark className="h-5 w-5 text-champagne" />
            <h2 className="font-display text-3xl text-parchment">Four-layer banking stack</h2>
          </div>
          <div className="mt-10 space-y-4">
            {bankingLayers.map((layer, i) => (
              <div
                key={layer.layer}
                className="saas-window flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-belarus-red/30 font-display text-sm text-belarus-red">
                    {i}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-champagne">
                      {layer.layer}
                    </p>
                    <p className="mt-1 font-display text-xl text-parchment">{layer.role}</p>
                  </div>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-mist md:text-right">
                  {layer.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Coins className="h-5 w-5 text-belarus-red" />
          <h2 className="font-display text-3xl text-parchment">Tokenomics</h2>
        </div>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-stone/20 text-xs uppercase tracking-widest text-champagne">
                <th className="pb-3 pr-4">Allocation</th>
                <th className="pb-3 pr-4">Share</th>
                <th className="pb-3 pr-4">Amount (HBM)</th>
                <th className="pb-3">Vesting</th>
              </tr>
            </thead>
            <tbody>
              {allocations.map((row) => (
                <tr key={row.label} className="border-b border-stone/10 text-pearl">
                  <td className="py-4 pr-4 font-medium text-parchment">{row.label}</td>
                  <td className="py-4 pr-4 text-champagne">{row.pct}</td>
                  <td className="py-4 pr-4">{row.amount}</td>
                  <td className="py-4 text-mist">{row.vesting}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="glass-panel p-8">
            <h3 className="font-display text-xl text-parchment">Revenue → staker flow</h3>
            <ul className="mt-6 space-y-4">
              {revenueFlows.map((r) => (
                <li key={r.source} className="flex items-center justify-between border-b border-stone/10 pb-3">
                  <div>
                    <p className="text-sm text-parchment">{r.source}</p>
                    <p className="text-xs text-mist">{r.note}</p>
                  </div>
                  <span className="font-display text-lg text-belarus-red">{r.share}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel p-8">
            <h3 className="font-display text-xl text-parchment">Illustrative network stake</h3>
            <p className="mt-4 text-4xl font-display text-parchment">
              {TREASURY_STAKED_TOKENS.toLocaleString()}
            </p>
            <p className="mt-1 text-sm text-mist">HBM currently staked · vote weight denominator</p>
            <p className="mt-6 text-sm leading-relaxed text-mist">
              Your return scales with tier, stake size, and verified protocol revenue — not emissions
              alone. Figures below are illustrative bands subject to audit and market conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Staking tiers */}
      <section className="border-t border-stone/10 bg-graphite/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-champagne" />
            <h2 className="font-display text-3xl text-parchment">
              What participants receive — stake, vote, return
            </h2>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {stakingTiers.map((tier) => (
              <article key={tier.id} className="saas-window flex flex-col p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-belarus-red">
                  Tier {tier.index} · {tier.subtitle}
                </p>
                <h3 className="mt-2 font-display text-2xl text-parchment">{tier.title}</h3>
                <p className="mt-1 text-sm text-champagne">{tier.stakeRange}</p>
                <p className="mt-4 text-sm leading-relaxed text-mist">{tier.summary}</p>
                <div className="mt-6 space-y-3 border-t border-stone/15 pt-6">
                  {tier.returns.map((r) => (
                    <div key={r.label} className="flex justify-between gap-2 text-sm">
                      <span className="text-mist">{r.label}</span>
                      <span className="text-right font-medium text-parchment">
                        {r.value}
                        {r.note && (
                          <span className="block text-[10px] font-normal text-mist">{r.note}</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
                <ul className="mt-6 flex-1 space-y-2 border-t border-stone/15 pt-6 text-xs text-pearl">
                  {tier.rights.map((right) => (
                    <li key={right} className="flex gap-2">
                      <span className="text-belarus-red">▸</span>
                      {right}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/whitepaper"
                  className="mt-8 inline-flex items-center justify-center rounded-full border border-stone/25 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-pearl transition hover:border-champagne/40"
                >
                  Governance charter
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <Link href="/" className="text-xs uppercase tracking-widest text-champagne hover:text-parchment">
          ← Home
        </Link>
      </div>

      <Footer />
    </main>
  )
}
