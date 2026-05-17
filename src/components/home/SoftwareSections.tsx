'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Activity,
  ArrowUpRight,
  Bell,
  ChevronRight,
  Database,
  LayoutDashboard,
  Lock,
  Search,
  Settings,
  Shield,
  Users,
  Wallet,
  Zap,
} from 'lucide-react'
import { fade } from '@/components/home/ImmersivePrimitives'
import {
  integrations,
  pricingTiers,
  productCollections,
  workflowSteps,
} from '@/lib/productContent'

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

export function ConsoleDashboardSection() {
  const sidebar = [
    { icon: LayoutDashboard, label: 'Overview', active: true },
    { icon: Wallet, label: 'Treasury' },
    { icon: Users, label: 'Signers' },
    { icon: Shield, label: 'Compliance' },
    { icon: Activity, label: 'Telemetry' },
    { icon: Database, label: 'Data planes' },
    { icon: Settings, label: 'Settings' },
  ]

  const rows = [
    { entity: 'Atlas · NA Treasury', status: 'Nominal', latency: '284ms', region: 'iad' },
    { entity: 'Meridian · EU Publishers', status: 'Nominal', latency: '301ms', region: 'fra' },
    { entity: 'Nocturne · Creator mesh', status: 'Degraded', latency: '412ms', region: 'sin' },
    { entity: 'Holding · Signer pool', status: 'Nominal', latency: '198ms', region: 'ord' },
  ]

  return (
    <section id="platform" className="immersive-section bg-graphite py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <motion.div {...fade} className="max-w-3xl">
          <p className="saas-eyebrow">Platform · Holding Console</p>
          <h2 className="mt-4 font-display text-4xl text-pearl md:text-5xl">
            One control plane for every collection
          </h2>
          <p className="mt-6 text-base leading-relaxed text-mist md:text-lg">
            Provision tenants, route approvals, and export audit evidence from a
            single enterprise surface — designed with the density of a trading
            terminal and the calm of a private bank portal.
          </p>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.1 }}
          className="saas-window mt-14 overflow-hidden shadow-lux"
        >
          <WindowChrome title="HBM Holding Console · production" />
          <div className="flex min-h-[28rem] flex-col lg:flex-row">
            <aside className="hidden w-56 shrink-0 border-r border-white/10 bg-obsidian/80 p-4 lg:block">
              <p className="mb-4 px-2 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-mist">
                Workspace
              </p>
              <nav className="space-y-1">
                {sidebar.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${
                      item.active
                        ? 'bg-white/[0.08] text-pearl'
                        : 'text-mist hover:bg-white/[0.04]'
                    }`}
                  >
                    <item.icon className="h-4 w-4 shrink-0 text-champagne" />
                    {item.label}
                  </div>
                ))}
              </nav>
            </aside>

            <div className="flex flex-1 flex-col bg-obsidian/40">
              <div className="flex flex-wrap items-center gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
                <div className="flex flex-1 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-mist">
                  <Search className="h-4 w-4" />
                  Search tenants, signers, journals…
                </div>
                <button
                  type="button"
                  className="rounded-full border border-white/10 p-2 text-mist"
                  aria-label="Notifications"
                >
                  <Bell className="h-4 w-4" />
                </button>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-champagne/20 text-xs font-semibold text-champagne">
                  HB
                </div>
              </div>

              <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-6 xl:grid-cols-4">
                {[
                  { label: 'Active tenants', value: '240', delta: '+12 QoQ' },
                  { label: 'Signer uptime', value: '99.97%', delta: 'SLA met' },
                  { label: 'Open approvals', value: '7', delta: '3 urgent' },
                  { label: 'Evidence packs', value: '48', delta: 'YTD exports' },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-mist">
                      {card.label}
                    </p>
                    <p className="mt-2 font-display text-2xl text-pearl">{card.value}</p>
                    <p className="mt-1 text-xs text-accent-pine">{card.delta}</p>
                  </div>
                ))}
              </div>

              <motion.div className="grid flex-1 gap-4 px-4 pb-4 sm:px-6 sm:pb-6 lg:grid-cols-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 lg:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">
                    API latency · 24h
                  </p>
                  <div className="mt-4 flex h-32 items-end gap-1.5">
                    {[40, 55, 48, 62, 45, 38, 52, 44, 36, 42, 50, 35].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04, duration: 0.5 }}
                        className="flex-1 rounded-t bg-gradient-to-t from-champagne/20 to-champagne/70"
                      />
                    ))}
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] lg:col-span-3">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">
                      Collection health
                    </p>
                    <span className="text-xs text-champagne">Live</span>
                  </div>
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-[0.65rem] uppercase tracking-[0.15em] text-mist">
                        <th className="px-4 py-2 font-medium">Entity</th>
                        <th className="px-4 py-2 font-medium">Status</th>
                        <th className="px-4 py-2 font-medium">Latency</th>
                        <th className="px-4 py-2 font-medium">Region</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row) => (
                        <tr
                          key={row.entity}
                          className="border-b border-white/5 text-mist last:border-0"
                        >
                          <td className="px-4 py-3 text-pearl">{row.entity}</td>
                          <td className="px-4 py-3">
                            <span
                              className={`rounded-full px-2 py-0.5 text-xs ${
                                row.status === 'Nominal'
                                  ? 'bg-accent-pine/20 text-accent-pine'
                                  : 'bg-champagne/20 text-champagne'
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
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div {...fade} className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-full bg-pearl px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-obsidian hover:bg-champagne"
          >
            Open console
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-champagne hover:text-pearl"
          >
            View collections docs
            <ChevronRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export function ProductsSection() {
  return (
    <section id="products" className="immersive-section bg-obsidian py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <motion.div {...fade} className="text-center">
          <p className="saas-eyebrow">Product suite</p>
          <h2 className="mt-4 font-display text-4xl text-pearl md:text-5xl">
            Three collections. One design language.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-mist">
            Atlas, Meridian, and Nocturne share tokens, telemetry, and SSO — while
            keeping data planes sovereign where regulation demands.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {productCollections.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="saas-window flex flex-col overflow-hidden"
            >
              <div className={`bg-gradient-to-b ${product.accent} p-6`}>
                <p className="text-xs uppercase tracking-[0.25em] text-champagne">
                  {product.tagline}
                </p>
                <h3 className="mt-2 font-display text-3xl text-pearl">{product.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{product.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 border-b border-white/10 px-4 py-3">
                {product.nav.map((tab, j) => (
                  <span
                    key={tab}
                    className={`rounded-lg px-3 py-1 text-xs ${
                      j === 0
                        ? 'bg-white/[0.08] text-pearl'
                        : 'text-mist'
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 p-4">
                {product.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
                  >
                    <p className="text-[0.6rem] uppercase tracking-[0.2em] text-mist">
                      {stat.label}
                    </p>
                    <p className="mt-1 font-display text-xl text-pearl">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-auto border-t border-white/10 p-4">
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-champagne hover:text-pearl"
                >
                  Explore {product.name}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WorkflowSection() {
  return (
    <section id="workflows" className="immersive-section bg-gradient-to-b from-graphite to-obsidian py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:items-center sm:px-10">
        <motion.div {...fade}>
          <p className="saas-eyebrow">Implementation</p>
          <h2 className="mt-4 font-display text-4xl text-pearl md:text-5xl">
            From provision to audit in four movements
          </h2>
          <p className="mt-6 leading-relaxed text-mist">
            Enterprise rollouts follow a disciplined playbook — no surprise
            migrations, no vanity integrations. Every step exports evidence your
            counsel can replay.
          </p>
          <ol className="mt-10 space-y-6">
            {workflowSteps.map((step) => (
              <li key={step.step} className="flex gap-5">
                <span className="font-display text-2xl text-champagne/70">{step.step}</span>
                <div>
                  <h3 className="font-display text-xl text-pearl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div {...fade} className="saas-window overflow-hidden">
          <WindowChrome title="Deployment pipeline · Atlas" />
          <div className="space-y-3 p-6">
            {[
              { label: 'Policy templates applied', done: true },
              { label: 'Regional residency locked · EU', done: true },
              { label: 'SSO federation · Okta', done: true },
              { label: 'Signer pool attestation', done: false, active: true },
              { label: 'Evidence pack export', done: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-4 rounded-xl border px-4 py-3 ${
                  item.active
                    ? 'border-champagne/40 bg-champagne/5'
                    : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                <div
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${
                    item.done
                      ? 'bg-accent-pine text-obsidian'
                      : item.active
                        ? 'border border-champagne text-champagne'
                        : 'border border-white/20 text-mist'
                  }`}
                >
                  {item.done ? '✓' : item.active ? '…' : ''}
                </div>
                <span className="text-sm text-mist">{item.label}</span>
                {item.active && (
                  <span className="ml-auto text-xs uppercase tracking-[0.15em] text-champagne">
                    Running
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function SecuritySection() {
  const policies = [
    { name: 'Zero-trust admin', status: 'Enforced' },
    { name: 'Hardware MFA', status: 'Required' },
    { name: 'Data residency · EU', status: 'Active' },
    { name: 'Break-glass procedure', status: 'Documented' },
    { name: 'Immutable audit journal', status: 'Replicating' },
  ]

  return (
    <section id="security" className="immersive-section bg-obsidian py-24 lg:py-32">
      <motion.div className="mx-auto max-w-6xl px-6 sm:px-10">
        <motion.div {...fade} className="mx-auto max-w-3xl text-center">
          <p className="saas-eyebrow">Security & compliance</p>
          <h2 className="mt-4 font-display text-4xl text-pearl md:text-5xl">
            Trust engineered into every layer
          </h2>
          <p className="mt-6 text-mist">
            SOC 2 Type II, regional residency, and signer ceremonies — surfaced in
            a compliance center your auditors will actually use.
          </p>
        </motion.div>

        <motion.div
          {...fade}
          className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]"
        >
          <div className="space-y-4">
            {[
              { icon: Lock, title: 'Encryption', desc: 'AES-256 at rest, TLS 1.3 in transit, HSM-backed keys.' },
              { icon: Shield, title: 'Governance', desc: 'Policy-as-code with jurisdictional guardrails per entity.' },
              { icon: Zap, title: 'Incident response', desc: '24/7 rotation with sealed channels and replay exports.' },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
                  <item.icon className="h-5 w-5 text-champagne" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-pearl">{item.title}</h3>
                  <p className="mt-1 text-sm text-mist">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="saas-window overflow-hidden">
            <WindowChrome title="Compliance center" />
            <div className="divide-y divide-white/10">
              {policies.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between px-5 py-4"
                >
                  <span className="text-sm text-pearl">{p.name}</span>
                  <span className="rounded-full bg-accent-pine/15 px-3 py-1 text-xs text-accent-pine">
                    {p.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 bg-white/[0.02] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-mist">Last audit export</p>
              <p className="mt-1 font-mono text-sm text-pearl">evidence-pack-2026-Q1.zip</p>
              <Link
                href="/legal"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-champagne"
              >
                Legal & disclosures
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export function IntegrationsSection() {
  return (
    <section id="integrations" className="immersive-section border-y border-white/10 bg-graphite py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <motion.div {...fade} className="text-center">
          <p className="saas-eyebrow">Integrations</p>
          <h2 className="mt-4 font-display text-3xl text-pearl md:text-4xl">
            Connects to the stack you already run
          </h2>
        </motion.div>
        <motion.div
          {...fade}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {integrations.map((name) => (
            <span
              key={name}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-mist"
            >
              {name}
            </span>
          ))}
        </motion.div>
        <motion.div {...fade} className="saas-window mt-12 overflow-hidden">
          <WindowChrome title="REST API · /v1/tenants" />
          <pre className="overflow-x-auto p-6 font-mono text-xs leading-relaxed text-mist">
{`GET /v1/tenants/hbm-atlas-na
Authorization: Bearer ••••••••
X-Region: iad1

{
  "id": "hbm-atlas-na",
  "collections": ["atlas", "meridian"],
  "residency": "us-east",
  "sla_tier": "enterprise",
  "signers_online": 142
}`}
          </pre>
        </motion.div>
      </div>
    </section>
  )
}

export function PricingSection() {
  return (
    <section id="pricing" className="immersive-section bg-obsidian py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <motion.div {...fade} className="text-center">
          <p className="saas-eyebrow">Commercial</p>
          <h2 className="mt-4 font-display text-4xl text-pearl md:text-5xl">
            Enterprise pricing, quoted with integrity
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-mist">
            No surprise overages on human dignity. Every tier includes evidence
            exports, SSO, and regional residency — scoped to your charter.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-[2rem] border p-8 ${
                tier.highlighted
                  ? 'border-champagne/40 bg-gradient-to-b from-champagne/10 to-transparent shadow-lux'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              <h3 className="font-display text-2xl text-pearl">{tier.name}</h3>
              <p className="mt-2 font-display text-4xl text-champagne">{tier.price}</p>
              <p className="mt-4 text-sm text-mist">{tier.description}</p>
              <ul className="mt-8 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-mist">
                    <span className="text-accent-pine">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/learn-more"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full py-3 text-xs font-semibold uppercase tracking-[0.2em] ${
                  tier.highlighted
                    ? 'bg-pearl text-obsidian hover:bg-champagne'
                    : 'border border-white/20 text-pearl hover:border-champagne/50'
                }`}
              >
                Request quote
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
