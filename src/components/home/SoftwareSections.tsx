'use client'

import Link from 'next/link'
import { HoldingConsole } from '@/components/home/HoldingConsole'
import { ArrowUpRight, ChevronRight, Lock, Shield, Zap } from 'lucide-react'
import {
  integrations,
  pricingTiers,
  workflowSteps,
} from '@/lib/productContent'
import { threeWiseMenIntro, threeWiseMenProducts } from '@/lib/threeWiseMenContent'

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

export function ConsoleDashboardSection() {
  return (
    <section id="platform" className="immersive-section bg-graphite py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-3xl">
          <p className="saas-eyebrow">Platform · Holding Console</p>
          <h2 className="mt-4 font-display text-4xl text-parchment md:text-5xl">
            The Surface
          </h2>
          <p className="mt-6 text-base leading-relaxed text-mist md:text-lg">
            Treasury rails, signer approvals, compliance attestations, and oracle
            health — switch workspaces to inspect protocol operations live.
          </p>
        </div>

        <div className="mt-8">
          <HoldingConsole />
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-full bg-frost px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-obsidian hover:bg-champagne"
          >
            Open console
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="/whitepaper"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-champagne hover:text-pearl"
          >
            Protocol docs
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function ProductsSection() {
  return (
    <section id="products" className="immersive-section bg-obsidian py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="text-center">
          <p className="saas-eyebrow">{threeWiseMenIntro.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl text-parchment md:text-5xl">
            {threeWiseMenIntro.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-mist">{threeWiseMenIntro.body}</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {threeWiseMenProducts.map((product) => (
            <article
              key={product.id}
              className="saas-window flex flex-col overflow-hidden"
            >
              <div className="border-b border-stone/10 bg-graphite/80 p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-champagne">
                  {product.tagline}
                </p>
                <h3 className="mt-2 font-display text-3xl text-parchment">{product.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{product.description}</p>
              </div>
              <ul className="space-y-2 border-b border-stone/10 px-4 py-4">
                {product.highlights.map((line) => (
                  <li key={line} className="text-xs leading-relaxed text-mist">
                    · {line}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-3 gap-2 p-4">
                {product.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-stone/10 bg-graphite/[0.03] p-3"
                  >
                    <p className="text-[0.55rem] uppercase tracking-[0.15em] text-mist">
                      {stat.label}
                    </p>
                    <p className="mt-1 font-display text-lg text-pearl">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-auto border-t border-stone/10 p-4">
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-champagne hover:text-pearl"
                  {...(product.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {product.cta}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WorkflowSection() {
  return (
    <section id="workflows" className="immersive-section bg-graphite py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:items-center sm:px-10">
        <div>
          <p className="saas-eyebrow">Implementation</p>
          <h2 className="mt-4 font-display text-4xl text-parchment md:text-5xl">
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
        </div>

        <div className="saas-window overflow-hidden">
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
                    : 'border-stone/10 bg-graphite/[0.02]'
                }`}
              >
                <div
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${
                    item.done
                      ? 'bg-accent-pine text-obsidian'
                      : item.active
                        ? 'border border-champagne text-champagne'
                        : 'border border-stone/20 text-mist'
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
        </div>
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
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="saas-eyebrow">Security & compliance</p>
          <h2 className="mt-4 font-display text-4xl text-parchment md:text-5xl">
            Trust engineered into every layer
          </h2>
          <p className="mt-6 text-mist">
            SOC 2 Type II, regional residency, and signer ceremonies — surfaced in
            a compliance center your auditors will actually use.
          </p>
        </div>

        <div
         
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
                className="flex gap-4 rounded-2xl border border-stone/10 bg-graphite/[0.03] p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-graphite/[0.06]">
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
            <div className="divide-y divide-stone/10">
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
            <div className="border-t border-stone/10 bg-graphite/[0.02] p-5">
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
        </div>
      </div>
    </section>
  )
}

export function IntegrationsSection() {
  return (
    <section id="integrations" className="immersive-section border-y border-stone/10 bg-graphite py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="text-center">
          <p className="saas-eyebrow">Integrations</p>
          <h2 className="mt-4 font-display text-3xl text-parchment md:text-4xl">
            Connects to the stack you already run
          </h2>
        </div>
        <div
         
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {integrations.map((name) => (
            <span
              key={name}
              className="rounded-xl border border-stone/10 bg-graphite/[0.04] px-5 py-3 text-sm font-medium text-mist"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="saas-window mt-12 overflow-hidden">
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
        </div>
      </div>
    </section>
  )
}

export function PricingSection() {
  return (
    <section id="pricing" className="immersive-section bg-obsidian py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="text-center">
          <p className="saas-eyebrow">Commercial</p>
          <h2 className="mt-4 font-display text-4xl text-parchment md:text-5xl">
            Enterprise pricing, quoted with integrity
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-mist">
            No surprise overages on human dignity. Every tier includes evidence
            exports, SSO, and regional residency — scoped to your charter.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`rounded-[2rem] border p-8 ${
                tier.highlighted
                  ? 'border-belarus-red/30 bg-graphite shadow-lux'
                  : 'border-stone/10 bg-graphite/[0.03]'
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
                    ? 'bg-frost text-obsidian hover:bg-champagne'
                    : 'border border-stone/20 text-pearl hover:border-champagne/50'
                }`}
              >
                Request quote
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
