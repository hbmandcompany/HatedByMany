'use client'

import Link from 'next/link'
import { ConsoleDashboardSection } from '@/components/home/SoftwareSections'
import { MetricCard } from '@/components/home/ImmersivePrimitives'
import {
  allocations,
  bankingLayers,
  distributionMechanics,
  quarterlyRevenue,
  supplySchedule,
  tokenomics,
  treasuryAssets,
} from '@/lib/treasuryPageContent'

const TOTAL_RESERVES = '$847,320'
const YTD_GROSS = quarterlyRevenue.reduce((s, q) => s + q.gross, 0)
const YTD_DISTRIBUTED = quarterlyRevenue.reduce((s, q) => s + q.distributed, 0)
const YTD_RESERVE = quarterlyRevenue.reduce((s, q) => s + q.reserve, 0)

const DONUT_COLORS = ['#6b6256', '#4a464f', '#2a272e', '#8b1a2d', '#a89f92']
const DONUT_PCTS = [30, 30, 20, 10, 10]
const DONUT_R = 96
const DONUT_C = 2 * Math.PI * DONUT_R

function formatUsd(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

function formatEp(n: number) {
  return `$${n.toFixed(4)}`
}

function TreasuryArchitectureDiagram() {
  const barW = 280
  const barH = 52
  const gap = 24
  const totalH = bankingLayers.length * barH + (bankingLayers.length - 1) * gap
  const cx = 160

  return (
    <svg
      role="img"
      aria-label="Four-layer treasury architecture diagram from L0 legal through L3 products"
      width={barW + 40}
      height={totalH + 40}
      viewBox={`0 0 ${barW + 40} ${totalH + 40}`}
      className="mx-auto w-full max-w-[320px] lg:max-w-none"
    >
      {bankingLayers.map((layer, i) => {
        const y = 20 + i * (barH + gap)
        const nodeY = y + barH / 2
        return (
          <g key={layer.layer}>
            {i < bankingLayers.length - 1 && (
              <line
                x1={cx}
                y1={y + barH}
                x2={cx}
                y2={y + barH + gap}
                stroke="#2a272e"
                strokeWidth={1}
                strokeDasharray="4 4"
              />
            )}
            {i > 0 && (
              <circle cx={cx} cy={y} r={4} fill="#8b1a2d" />
            )}
            <rect
              x={20}
              y={y}
              width={barW}
              height={barH}
              fill="#0a090c"
              stroke="#2a272e"
              strokeWidth={1}
            />
            <text x={32} y={nodeY + 5} fill="#a89f92" fontSize={11} fontFamily="Georgia, serif">
              {layer.layer}
            </text>
            <text
              x={20 + barW - 12}
              y={nodeY + 4}
              fill="#4a464f"
              fontSize={9}
              fontFamily="system-ui, sans-serif"
              textAnchor="end"
            >
              {layer.role.length > 32 ? `${layer.role.slice(0, 30)}…` : layer.role}
            </text>
            {i === bankingLayers.length - 1 && (
              <circle cx={cx} cy={y + barH} r={4} fill="#8b1a2d" />
            )}
          </g>
        )
      })}
    </svg>
  )
}

function TreasuryBarChart() {
  const fills = ['#6b6256', '#4a464f', '#2a272e']
  const segments = treasuryAssets.map((a, i) => ({
    label: a.label,
    amount: a.amount,
    pct: a.pct,
    fill: fills[i] ?? '#2a272e',
  }))
  let x = 0
  const barW = 400
  const barH = 48

  return (
    <div>
      <p className="font-display text-4xl text-parchment">{TOTAL_RESERVES}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-champagne">Total reserves</p>
      <svg
        role="img"
        aria-label="Treasury asset breakdown: USDC 50%, ETH 45%, bonds 5%"
        className="mt-8 w-full"
        viewBox={`0 0 ${barW} ${barH}`}
        preserveAspectRatio="none"
      >
        {segments.map((seg) => {
          const w = (seg.pct / 100) * barW
          const rect = (
            <rect key={seg.label} x={x} y={0} width={w} height={barH} fill={seg.fill} />
          )
          x += w
          return rect
        })}
      </svg>
      <ul className="mt-6 space-y-3">
        {segments.map((seg) => (
          <li key={seg.label} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-3 text-pearl">
              <span className="h-2.5 w-2.5 shrink-0" style={{ backgroundColor: seg.fill }} />
              {seg.label}
            </span>
            <span className="font-mono text-parchment">
              {seg.amount} <span className="text-mist">({seg.pct}%)</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SupplyScheduleChart() {
  const maxM = 500
  const maxPx = 320
  const barW = 80
  const gap = 32
  const chartW = supplySchedule.length * barW + (supplySchedule.length - 1) * gap + 80
  const chartH = maxPx + 80
  const baseY = 40 + maxPx

  return (
    <div>
      <style>{`
        @keyframes supplyBarRise {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        .supply-bar-segment {
          transform-origin: bottom;
          animation: supplyBarRise 0.85s ease-out forwards;
        }
      `}</style>
      <div className="mb-6 flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-[0.2em] text-mist">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 bg-[#6b6256]" /> Circulating
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 bg-[#2a272e]" /> Vesting
        </span>
        <span className="flex items-center gap-2 border border-[#2a272e] bg-[#0a090c] px-1">
          <span className="h-2.5 w-2.5" /> Treasury lock
        </span>
      </div>
      <svg
        role="img"
        aria-label="Five-year HBM token supply schedule showing circulating, vesting, and treasury lock"
        width="100%"
        viewBox={`0 0 ${chartW} ${chartH}`}
        className="mx-auto max-w-4xl"
      >
        {[0, 250, 500].map((m) => {
          const y = baseY - (m / maxM) * maxPx
          return (
            <g key={m}>
              <line x1={48} y1={y} x2={chartW - 24} y2={y} stroke="#2a272e" strokeWidth={0.5} />
              <text x={40} y={y + 4} fill="#4a464f" fontSize={9} textAnchor="end" fontFamily="monospace">
                {m === 0 ? '0' : `${m}M`}
              </text>
            </g>
          )
        })}
        {supplySchedule.map((row, i) => {
          const x = 56 + i * (barW + gap)
          const circH = (row.circulating / maxM) * maxPx
          const vestH = (row.vesting / maxM) * maxPx
          const treasH = (row.treasury / maxM) * maxPx
          const delay = `${i * 0.08}s`
          return (
            <g key={row.year}>
              <g style={{ animationDelay: delay }} className="supply-bar-segment">
                <rect
                  x={x}
                  y={baseY - circH}
                  width={barW}
                  height={circH}
                  fill="#6b6256"
                />
                {vestH > 0 && (
                  <rect
                    x={x}
                    y={baseY - circH - vestH}
                    width={barW}
                    height={vestH}
                    fill="#2a272e"
                  />
                )}
                <rect
                  x={x}
                  y={baseY - circH - vestH - treasH}
                  width={barW}
                  height={treasH}
                  fill="#0a090c"
                  stroke="#2a272e"
                  strokeWidth={1}
                />
              </g>
              <text
                x={x + barW / 2}
                y={baseY + 20}
                fill="#4a464f"
                fontSize={8}
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
              >
                {row.year.split(' ')[0]}
              </text>
              <text
                x={x + barW / 2}
                y={baseY + 32}
                fill="#4a464f"
                fontSize={7}
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
              >
                {row.year.includes('(') ? row.year.match(/\([^)]+\)/)?.[0] : ''}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

function DistributionFlowDiagram() {
  const w = 200
  const h = 56
  return (
    <svg
      role="img"
      aria-label="Revenue distribution flow: 80% to token holders, 20% to reserve"
      viewBox="0 0 280 280"
      className="mx-auto w-full max-w-[280px]"
    >
      <defs>
        <marker id="arrowSolid" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <polygon points="0 0, 8 4, 0 8" fill="#a89f92" />
        </marker>
        <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <polygon points="0 0, 8 4, 0 8" fill="#8b1a2d" />
        </marker>
      </defs>
      <rect x={40} y={8} width={w} height={h} fill="#0a090c" stroke="#2a272e" strokeWidth={1} />
      <text x={140} y={40} fill="#a89f92" fontSize={11} fontFamily="monospace" textAnchor="middle">
        Gross Revenue · {formatUsd(YTD_GROSS)} YTD
      </text>
      <line
        x1={140}
        y1={64}
        x2={140}
        y2={88}
        stroke="#2a272e"
        strokeWidth={1}
        markerEnd="url(#arrowSolid)"
      />
      <line
        x1={140}
        y1={88}
        x2={60}
        y2={120}
        stroke="#8b1a2d"
        strokeWidth={1}
        strokeDasharray="4 3"
        markerEnd="url(#arrowRed)"
      />
      <line
        x1={140}
        y1={88}
        x2={220}
        y2={120}
        stroke="#6b6256"
        strokeWidth={1}
        markerEnd="url(#arrowSolid)"
      />
      <rect x={8} y={120} width={w} height={h} fill="#0a090c" stroke="#2a272e" strokeWidth={1} />
      <text x={108} y={152} fill="#8b1a2d" fontSize={10} fontFamily="monospace" textAnchor="middle">
        Reserve · 20% · {formatUsd(YTD_RESERVE)}
      </text>
      <rect x={152} y={120} width={w} height={h} fill="#0a090c" stroke="#2a272e" strokeWidth={1} />
      <text x={252} y={152} fill="#a89f92" fontSize={10} fontFamily="monospace" textAnchor="middle">
        Distribution · 80%
      </text>
      <text x={252} y={166} fill="#6b6256" fontSize={9} fontFamily="monospace" textAnchor="middle">
        {formatUsd(YTD_DISTRIBUTED)}
      </text>
      <line
        x1={252}
        y1={176}
        x2={252}
        y2={200}
        stroke="#a89f92"
        strokeWidth={1}
        markerEnd="url(#arrowSolid)"
      />
      <rect x={152} y={200} width={w} height={h} fill="#0a090c" stroke="#2a272e" strokeWidth={1} />
      <text x={252} y={228} fill="#a89f92" fontSize={10} fontFamily="monospace" textAnchor="middle">
        Token Holders
      </text>
      <text x={252} y={242} fill="#6b6256" fontSize={9} fontFamily="monospace" textAnchor="middle">
        {tokenomics.earningsPerToken} per HBM
      </text>
    </svg>
  )
}

function AllocationRadialChart() {
  let offset = 0

  return (
    <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
      <svg
        role="img"
        aria-label="HBM token allocation donut chart, 500 million total supply"
        width={280}
        height={280}
        viewBox="0 0 280 280"
      >
        <g transform="translate(140, 140) rotate(-90)">
          {DONUT_PCTS.map((pct, i) => {
            const len = (pct / 100) * DONUT_C
            const dash = `${len} ${DONUT_C - len}`
            const circle = (
              <circle
                key={allocations[i].label}
                r={DONUT_R}
                fill="none"
                stroke={DONUT_COLORS[i]}
                strokeWidth={48}
                strokeDasharray={dash}
                strokeDashoffset={-offset}
              />
            )
            offset += len
            return circle
          })}
        </g>
        <text
          x={140}
          y={132}
          fill="#a89f92"
          fontSize={28}
          fontFamily="Georgia, serif"
          textAnchor="middle"
        >
          500M
        </text>
        <text x={140} y={152} fill="#4a464f" fontSize={10} fontFamily="system-ui" textAnchor="middle">
          Total Supply
        </text>
      </svg>
      <ul className="w-full max-w-sm flex-1">
        {allocations.map((row, i) => (
          <li
            key={row.label}
            className="flex items-center gap-4 border-b border-stone/15 py-3 first:pt-0"
            style={{ minHeight: 40 }}
          >
            <span className="h-2.5 w-2.5 shrink-0" style={{ backgroundColor: DONUT_COLORS[i] }} />
            <div className="flex flex-1 flex-wrap items-baseline justify-between gap-2">
              <span className="text-sm text-parchment">{row.label}</span>
              <span className="font-mono text-xs text-mist">
                {row.pct} · {row.amount}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function GridOverlay() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      aria-hidden
    >
      <defs>
        <pattern id="treasuryGrid" width={32} height={32} patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#2a272e" strokeWidth={0.5} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#treasuryGrid)" />
    </svg>
  )
}

export function TreasuryPage() {
  const lastCompleted = quarterlyRevenue[quarterlyRevenue.length - 2]

  return (
    <main className="min-h-screen bg-obsidian">
      <div className="pt-24">
        <ConsoleDashboardSection />
      </div>
      {/* Section 1: Hero */}
      <section className="immersive-section relative flex min-h-screen items-center overflow-hidden border-b border-stone/15">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,26,45,0.1),transparent_55%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="chapter-label">Treasury · HBM Coin</p>
            <h1 className="mt-4 font-display text-5xl text-parchment md:text-7xl">
              The financial architecture of Hated By Many
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
              HBM is a revenue-backed token. Fixed supply. No inflation. Every dollar earned by the
              platform distributes 80% to token holders quarterly in USDC. Transparent by design.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <MetricCard label="Total supply" value="500M" detail={tokenomics.symbol} />
              <MetricCard label="Circulating" value="200M" detail="Post-launch float" />
              <MetricCard label="Market cap" value="$7M" detail={tokenomics.launchPrice} />
              <MetricCard
                label="Earnings / token"
                value={tokenomics.earningsPerToken}
                detail="Trailing illustrative"
              />
            </div>
          </div>
          <div className="hidden justify-center lg:flex">
            <TreasuryArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* Section 2: Treasury Reserves */}
      <section className="relative border-t border-stone/10 bg-graphite/30 py-20">
        <GridOverlay />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <p className="saas-eyebrow">Reserves</p>
            <h2 className="mt-3 font-display text-3xl text-parchment">Treasury composition</h2>
            <div className="mt-10">
              <TreasuryBarChart />
            </div>
          </div>
          <div className="space-y-4 lg:col-span-2">
            {[
              { label: 'Total reserves', value: TOTAL_RESERVES },
              { label: 'Reserve ratio', value: distributionMechanics.reserveRatio },
              { label: 'Multi-sig signers', value: '2-of-3 required' },
            ].map((card) => (
              <div key={card.label} className="saas-metric">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-champagne">
                  {card.label}
                </p>
                <p className="mt-2 font-display text-2xl text-parchment">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Supply Schedule */}
      <section className="border-t border-stone/10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="saas-eyebrow">Supply</p>
          <h2 className="mt-3 font-display text-3xl text-parchment md:text-4xl">
            500M fixed · no inflation · 4-year release
          </h2>
          <div className="mt-12">
            <SupplyScheduleChart />
          </div>
          <p className="mt-8 text-center text-sm text-mist">
            Vesting fully resolves Q4 2029. Treasury reserve of 140M tokens remains permanently locked
            under multi-sig governance.
          </p>
        </div>
      </section>

      {/* Section 4: Revenue & Distribution */}
      <section className="border-t border-stone/10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="saas-eyebrow">Revenue by quarter · 2026</p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[520px] text-sm">
                  <thead>
                    <tr className="border-b border-stone/20 text-left text-[10px] uppercase tracking-[0.35em] text-champagne">
                      <th className="pb-3 pr-4 font-semibold">Quarter</th>
                      <th className="pb-3 pr-4 font-semibold">Gross</th>
                      <th className="pb-3 pr-4 font-semibold">Distributed (80%)</th>
                      <th className="pb-3 pr-4 font-semibold">Reserve (20%)</th>
                      <th className="pb-3 font-semibold">Earnings/Token</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quarterlyRevenue.map((row) => {
                      const highlight = row.quarter === lastCompleted?.quarter
                      return (
                        <tr
                          key={row.quarter}
                          className={`border-b border-stone/10 text-pearl ${
                            highlight ? 'bg-graphite/80' : ''
                          }`}
                        >
                          <td className="py-3 pr-4 text-parchment">{row.quarter}</td>
                          <td className="py-3 pr-4">{formatUsd(row.gross)}</td>
                          <td className="py-3 pr-4">{formatUsd(row.distributed)}</td>
                          <td className="py-3 pr-4">{formatUsd(row.reserve)}</td>
                          <td className="py-3 font-mono">{formatEp(row.epToken)}</td>
                        </tr>
                      )
                    })}
                    <tr className="text-parchment">
                      <td className="py-4 pr-4 font-semibold">YTD 2026</td>
                      <td className="py-4 pr-4 font-semibold">{formatUsd(YTD_GROSS)}</td>
                      <td className="py-4 pr-4 font-semibold">{formatUsd(YTD_DISTRIBUTED)}</td>
                      <td className="py-4 pr-4 font-semibold">{formatUsd(YTD_RESERVE)}</td>
                      <td className="py-4 font-mono font-semibold">{tokenomics.earningsPerToken}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <p className="saas-eyebrow">Distribution mechanics</p>
              <div className="mt-6">
                <DistributionFlowDiagram />
              </div>
              <ul className="mt-8 space-y-2 text-sm text-mist">
                <li>Frequency: {distributionMechanics.frequency}</li>
                <li>Payout: {distributionMechanics.payoutRatio} · Settlement: {distributionMechanics.settlementToken}</li>
                <li>Last: {distributionMechanics.lastDistribution} · {distributionMechanics.lastAmount}</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-stone/15 pt-10">
            <div>
              <p className="font-display text-2xl text-parchment">
                Next distribution — {distributionMechanics.nextDistribution}
              </p>
              <p className="mt-2 text-sm text-mist">
                Projected payout: $144,000 · $0.00072 per HBM · USDC settlement
              </p>
            </div>
            <span className="border border-stone/30 bg-graphite px-4 py-1 text-[10px] uppercase tracking-widest text-mist">
              Pending · Q4 2026
            </span>
          </div>
        </div>
      </section>

      {/* Section 5: Allocation */}
      <section className="border-t border-stone/10 bg-graphite/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="saas-eyebrow">Token allocation</p>
          <h2 className="mt-3 font-display text-3xl text-parchment">500M fixed supply breakdown</h2>
          <div className="mt-12">
            <AllocationRadialChart />
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            <div className="saas-window p-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-champagne">P/E ratio</p>
              <p className="mt-2 font-display text-3xl text-parchment">{tokenomics.peRatio}</p>
            </div>
            <div className="saas-window p-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-champagne">Earnings yield</p>
              <p className="mt-2 font-display text-3xl text-parchment">{tokenomics.earningsYield}</p>
            </div>
            <div className="saas-window p-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-champagne">Revenue growth YoY</p>
              <p className="mt-2 font-display text-3xl text-parchment">+28%</p>
            </div>
            <div className="saas-window p-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-champagne">Holder count</p>
              <p className="mt-2 font-display text-3xl text-parchment">12,847</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Banking Stack */}
      <section className="border-t border-stone/15 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="saas-eyebrow">Architecture</p>
          <h2 className="mt-3 font-display text-3xl text-parchment">
            Four-layer financial architecture
          </h2>
          <div className="relative mt-12 space-y-0">
            {bankingLayers.map((layer, i) => (
              <div key={layer.layer}>
                <article className="saas-window flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-belarus-red/30 font-display text-sm text-belarus-red">
                      {i}
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.35em] text-champagne">
                        {layer.layer}
                      </p>
                      <p className="mt-1 font-display text-xl text-parchment">{layer.role}</p>
                    </div>
                  </div>
                  <p className="max-w-xl text-sm leading-relaxed text-mist md:text-right">
                    {layer.detail}
                  </p>
                </article>
                {i < bankingLayers.length - 1 && (
                  <div
                    className="ml-5 h-10 border-l border-dashed border-stone/30"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-stone/15 bg-graphite px-6 py-6 sm:px-8">
        <p className="max-w-3xl font-mono text-xs leading-relaxed text-mist">
          HBM · 500M fixed supply · Base L2 · USDC distribution · 80% payout ratio · Next epoch:{' '}
          {distributionMechanics.nextDistribution} · Contract: 0x… · FairnessRegistry verified
        </p>
        <Link
          href="/"
          className="shrink-0 text-xs uppercase tracking-widest text-champagne hover:text-parchment"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  )
}
