'use client'

import { useState } from 'react'
import {
  Activity,
  Bell,
  Database,
  LayoutDashboard,
  Search,
  Settings,
  Shield,
  Users,
  Wallet,
} from 'lucide-react'
import {
  type ConsoleTabId,
  consoleTabs,
  consoleViews,
} from '@/lib/consoleContent'

const tabIcons: Record<ConsoleTabId, typeof LayoutDashboard> = {
  overview: LayoutDashboard,
  treasury: Wallet,
  signers: Users,
  compliance: Shield,
  telemetry: Activity,
  'data-planes': Database,
  settings: Settings,
}

function WindowChrome({ title }: { title: string }) {
  return (
    <div className="saas-chrome flex items-center gap-3 border-b border-stone/10 px-4 py-3">
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

export function HoldingConsole() {
  const [activeTab, setActiveTab] = useState<ConsoleTabId>('overview')
  const view = consoleViews[activeTab]

  return (
    <div className="saas-window overflow-hidden shadow-lux">
      <WindowChrome title="HBM Holding Console · production" />
      <div className="flex min-h-[22rem] flex-col lg:flex-row">
        <aside className="hidden w-48 shrink-0 border-r border-stone/10 bg-obsidian/80 p-3 lg:block">
          <p className="mb-4 px-2 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-mist">
            Workspace
          </p>
          <nav className="space-y-1">
            {consoleTabs.map((tab) => {
              const Icon = tabIcons[tab.id]
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                    isActive
                      ? 'bg-stone/[0.08] text-parchment'
                      : 'text-mist hover:bg-stone/[0.04] hover:text-parchment'
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0 text-champagne" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </aside>

        <div className="flex flex-1 flex-col bg-obsidian/40">
          <div className="flex flex-wrap items-center gap-3 border-b border-stone/10 px-4 py-3 sm:px-6">
            <div className="flex flex-1 items-center gap-2 rounded-full border border-stone/10 bg-stone/[0.04] px-4 py-2 text-sm text-mist">
              <Search className="h-4 w-4" />
              Search tenants, signers, journals…
            </div>
            <button
              type="button"
              className="rounded-full border border-stone/10 p-2 text-mist"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4" />
            </button>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-champagne/20 text-xs font-semibold text-champagne">
              HB
            </div>
          </div>

          <div className="border-b border-stone/10 px-4 py-2 sm:hidden">
            <div className="flex gap-1 overflow-x-auto pb-1">
              {consoleTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 rounded-lg px-3 py-1.5 text-xs ${
                    activeTab === tab.id
                      ? 'bg-stone/[0.08] text-parchment'
                      : 'text-mist'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <p className="px-4 pt-4 text-xs font-semibold uppercase tracking-[0.25em] text-champagne sm:px-6">
            {view.title}
          </p>

          <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-6 xl:grid-cols-4">
            {view.metrics.map((card) => (
              <div
                key={card.label}
                className="rounded-2xl border border-stone/10 bg-stone/[0.03] p-4"
              >
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-mist">
                  {card.label}
                </p>
                <p className="mt-2 font-display text-2xl text-parchment">{card.value}</p>
                <p className="mt-1 text-xs text-accent-pine">{card.delta}</p>
              </div>
            ))}
          </div>

          <div className="grid flex-1 gap-4 px-4 pb-4 sm:px-6 sm:pb-6 lg:grid-cols-5">
            <div className="rounded-2xl border border-stone/10 bg-stone/[0.03] p-4 lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">
                {view.chartLabel ?? 'Activity · 24h'}
              </p>
              <div className="mt-3 flex h-24 items-end gap-1">
                {[40, 55, 48, 62, 45, 38, 52, 44, 36, 42, 50, 35].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 rounded-t bg-champagne/50"
                  />
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-stone/10 bg-stone/[0.03] lg:col-span-3">
              <div className="flex items-center justify-between border-b border-stone/10 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">
                  {view.tableTitle}
                </p>
                <span className="text-xs text-champagne">Live</span>
              </div>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-stone/10 text-[0.65rem] uppercase tracking-[0.15em] text-mist">
                    <th className="px-4 py-2 font-medium">Entity</th>
                    <th className="px-4 py-2 font-medium">Status</th>
                    <th className="px-4 py-2 font-medium">
                      {activeTab === 'treasury' || activeTab === 'signers' ? 'Value' : 'Latency'}
                    </th>
                    <th className="px-4 py-2 font-medium">Region</th>
                  </tr>
                </thead>
                <tbody>
                  {view.rows.map((row) => (
                    <tr
                      key={row.entity}
                      className="border-b border-stone/5 text-mist last:border-0"
                    >
                      <td className="px-4 py-3 text-parchment">{row.entity}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs ${
                            row.status === 'Nominal' ||
                            row.status === 'Current' ||
                            row.status === 'Active' ||
                            row.status === 'Published' ||
                            row.status === 'On-chain' ||
                            row.status === 'Armed' ||
                            row.status.endsWith('%')
                              ? 'bg-accent-pine/20 text-accent-pine'
                              : row.status === 'Degraded' || row.status === 'Urgent'
                                ? 'bg-champagne/20 text-champagne'
                                : 'bg-stone/10 text-mist'
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">{row.latency}</td>
                      <td className="px-4 py-3 font-mono text-xs">{row.region}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
