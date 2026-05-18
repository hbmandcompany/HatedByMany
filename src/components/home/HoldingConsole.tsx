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
    <div className="saas-chrome flex items-center gap-2 border-b border-stone/10 px-3 py-2">
      <div className="flex gap-1">
        <span className="h-2 w-2 rounded-full bg-accent-rose/80" />
        <span className="h-2 w-2 rounded-full bg-champagne/60" />
        <span className="h-2 w-2 rounded-full bg-accent-pine/80" />
      </div>
      <span className="flex-1 text-center text-[0.55rem] font-medium uppercase tracking-[0.18em] text-mist">
        {title}
      </span>
      <span className="w-8" />
    </div>
  )
}

export function HoldingConsole() {
  const [activeTab, setActiveTab] = useState<ConsoleTabId>('overview')
  const view = consoleViews[activeTab]

  return (
    <div className="saas-window mx-auto max-w-4xl overflow-hidden text-[11px] shadow-lux">
      <WindowChrome title="HBM Holding Console · production" />
      <div className="flex min-h-0 flex-col lg:flex-row">
        <aside className="hidden w-36 shrink-0 border-r border-stone/10 bg-obsidian/80 p-2 lg:block">
          <p className="mb-2 px-1.5 text-[0.5rem] font-semibold uppercase tracking-[0.22em] text-mist">
            Workspace
          </p>
          <nav className="space-y-0.5">
            {consoleTabs.map((tab) => {
              const Icon = tabIcons[tab.id]
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-[10px] transition ${
                    isActive
                      ? 'bg-stone/[0.08] text-parchment'
                      : 'text-mist hover:bg-stone/[0.04] hover:text-parchment'
                  }`}
                >
                  <Icon className="h-3 w-3 shrink-0 text-champagne" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col bg-obsidian/40">
          <div className="flex items-center gap-2 border-b border-stone/10 px-3 py-2">
            <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-full border border-stone/10 bg-stone/[0.04] px-2.5 py-1 text-[10px] text-mist">
              <Search className="h-3 w-3 shrink-0" />
              <span className="truncate">Search tenants, signers…</span>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-full border border-stone/10 p-1 text-mist"
              aria-label="Notifications"
            >
              <Bell className="h-3 w-3" />
            </button>
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-champagne/20 text-[9px] font-semibold text-champagne">
              HB
            </div>
          </div>

          <div className="border-b border-stone/10 px-3 py-1.5 lg:hidden">
            <div className="flex gap-1 overflow-x-auto">
              {consoleTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 rounded-md px-2 py-1 text-[9px] ${
                    activeTab === tab.id ? 'bg-stone/[0.08] text-parchment' : 'text-mist'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <p className="px-3 pt-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-champagne">
            {view.title}
          </p>

          <div className="grid grid-cols-2 gap-2 p-3 xl:grid-cols-4">
            {view.metrics.map((card) => (
              <div
                key={card.label}
                className="rounded-xl border border-stone/10 bg-stone/[0.03] p-2.5"
              >
                <p className="text-[8px] uppercase tracking-[0.18em] text-mist">{card.label}</p>
                <p className="mt-0.5 font-display text-lg leading-none text-parchment">
                  {card.value}
                </p>
                <p className="mt-0.5 text-[9px] text-accent-pine">{card.delta}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-2 px-3 pb-3 lg:grid-cols-5">
            <div className="rounded-xl border border-stone/10 bg-stone/[0.03] p-2.5 lg:col-span-2">
              <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-mist">
                {view.chartLabel ?? 'API latency · 24h'}
              </p>
              <div className="mt-2 flex h-14 items-end gap-0.5">
                {[40, 55, 48, 62, 45, 38, 52, 44, 36, 42, 50, 35].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 rounded-t bg-champagne/50"
                  />
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-stone/10 bg-stone/[0.03] lg:col-span-3">
              <div className="flex items-center justify-between border-b border-stone/10 px-2.5 py-1.5">
                <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-mist">
                  {view.tableTitle}
                </p>
                <span className="text-[8px] text-champagne">Live</span>
              </div>
              <table className="w-full table-fixed text-left text-[10px] leading-tight">
                <thead>
                  <tr className="border-b border-stone/10 text-[8px] uppercase tracking-[0.12em] text-mist">
                    <th className="w-[42%] px-2 py-1 font-medium">Entity</th>
                    <th className="w-[18%] px-1 py-1 font-medium">Status</th>
                    <th className="w-[20%] px-1 py-1 font-medium">
                      {activeTab === 'treasury' || activeTab === 'signers' ? 'Value' : 'Latency'}
                    </th>
                    <th className="w-[20%] px-2 py-1 font-medium">Region</th>
                  </tr>
                </thead>
                <tbody>
                  {view.rows.map((row) => (
                    <tr
                      key={row.entity}
                      className="border-b border-stone/5 text-mist last:border-0"
                    >
                      <td className="truncate px-2 py-1 text-[10px] text-parchment">
                        {row.entity}
                      </td>
                      <td className="px-1 py-1">
                        <span
                          className={`inline-block max-w-full truncate rounded-full px-1.5 py-px text-[8px] leading-tight ${
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
                      <td className="px-1 py-1 text-[10px]">{row.latency}</td>
                      <td className="px-2 py-1 font-mono text-[9px]">{row.region}</td>
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
