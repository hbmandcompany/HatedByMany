import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { IntegrationsSection } from '@/components/home/SoftwareSections'

export const metadata: Metadata = {
  title: 'Hated By Many',
  description: 'Institutional overview of the Hated By Many ecosystem',
}

export default function InvestorRelationsPage() {
  return (
    <main className="min-h-screen bg-obsidian pt-24">
      <section className="border-b border-stone/15 bg-graphite/80">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-belarus-red/90">IR-001</p>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-champagne">
            Hated By Many LLC · External
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-parchment md:text-6xl">
            Investor Relations
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">
            Institutional overview of the Hated By Many ecosystem
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {[
              ['https://hbmandcompany.com', 'hbmandcompany.com'],
              ['https://lightra.in', 'lightra.in'],
              ['https://michelangelo.agency', 'michelangelo.agency'],
              ['https://vanity.company', 'vanity.company'],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-stone/20 bg-obsidian/50 px-3 py-1 font-mono text-[10px] text-pearl hover:border-champagne/40"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 01</p>
          <h2 className="mt-3 font-display text-2xl text-parchment md:text-3xl">Institutional overview</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist md:text-base">
            Hated By Many LLC operates as a multi-layer media and economic system. Media production,
            creative infrastructure, financial systems, and contributor networks compose a single
            coordinated institution — not a collection of disconnected products.
          </p>
          <p className="mt-4 text-sm leading-[1.85] text-mist md:text-base">
            This page is the formal external interface for understanding system value, structure, and
            operations. It is not a pitch deck, marketing surface, or token promotion.
          </p>
        </article>

        <article className="rounded-[1.75rem] border border-stone/10 bg-graphite/40 p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 02</p>
          <h2 className="mt-3 font-display text-2xl text-parchment md:text-3xl">Value creation model</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Value is generated through production systems, not speculation. Media production generates
            attention and revenue. Creative production generates cultural assets. Infrastructure enables
            transactions and scaling. Contributors generate continuous measurable output.
          </p>
          <ul className="mt-6 space-y-2.5 border-t border-stone/10 pt-6 text-sm text-pearl">
            <li>Media → attention, distribution, advertising and sponsorship revenue</li>
            <li>Creative → licensable assets via michelangelo.agency</li>
            <li>Infrastructure → financial and API services via lightra.in</li>
            <li>Contributors → ongoing output under 1099 participation model</li>
          </ul>
        </article>

        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 03</p>
          <h2 className="mt-3 font-display text-2xl text-parchment md:text-3xl">Revenue structure</h2>
          <ul className="mt-6 space-y-2.5 text-sm text-pearl">
            <li>Advertising and media distribution (hbmandcompany.com)</li>
            <li>Sponsorships and institutional partnerships</li>
            <li>Licensing of creative assets (michelangelo.agency)</li>
            <li>Financial infrastructure services (lightra.in)</li>
          </ul>
        </article>

        <article className="rounded-[1.75rem] border border-stone/10 bg-graphite/40 p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 04</p>
          <h2 className="mt-3 font-display text-2xl text-parchment md:text-3xl">Treasury system</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            All material revenue flows into a centralized treasury at Hated By Many LLC. The treasury
            funds contributors, infrastructure, media expansion, and reserves. It functions as the
            central capital coordination layer — not a speculative pool.
          </p>
        </article>

        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 05</p>
          <h2 className="mt-3 font-display text-2xl text-parchment md:text-3xl">Contribution economy</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Contributors are independent operators under a 1099 model. Writing, media production,
            creative assets, and research are tracked, attributed, and rewarded according to published
            allocation policy.
          </p>
        </article>

        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 06</p>
          <h2 className="mt-3 font-display text-2xl text-parchment md:text-3xl">System architecture</h2>
          <ul className="mt-6 space-y-2.5 text-sm text-pearl">
            <li>Chapter I · Monetary Policy — issuance logic</li>
            <li>Economy — value creation system</li>
            <li>Allocation — capital distribution</li>
            <li>Governance — decision structure</li>
            <li>Investor Relations — external explanation layer (this document)</li>
          </ul>
        </article>

        <article className="rounded-[1.75rem] border border-stone/10 bg-graphite/40 p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 07</p>
          <h2 className="mt-3 font-display text-2xl text-parchment md:text-3xl">Risk & compliance statement</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            Contributors are independent contractors. No equity claims are implied unless explicitly
            defined in separate instruments. Tokens or NFTs, where applicable, represent utility and
            participation — not securities or guaranteed returns. Hated By Many LLC is not a regulated
            depository institution.
          </p>
        </article>

        <article>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">§ 08</p>
          <h2 className="mt-3 font-display text-2xl text-parchment md:text-3xl">Strategic vision</h2>
          <p className="mt-6 text-sm leading-[1.85] text-mist">
            The network is positioned to evolve into a self-sustaining media and financial ecosystem:
            expanding the contributor economy, scaling infrastructure and creative systems, and
            compounding institutional positioning across aligned properties.
          </p>
        </article>
      </section>

      <IntegrationsSection />

      <section className="border-t border-stone/15 bg-graphite/30">
        <blockquote className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="passage-block font-display text-xl leading-relaxed text-parchment md:text-2xl">
            Hated By Many LLC publishes this overview for qualified observers who require structural
            clarity — not promotional narrative. The system is designed to endure audit, attribution,
            and time.
          </p>
          <p className="mt-8 text-[10px] uppercase tracking-[0.35em] text-champagne">
            Hated By Many LLC · Wyoming
          </p>
        </blockquote>
      </section>

      <div className="mx-auto flex max-w-5xl flex-wrap gap-6 border-t border-stone/10 px-4 py-8 text-[10px] uppercase tracking-widest sm:px-6 lg:px-8">
        <Link href="/thesis" className="text-champagne hover:text-parchment">Thesis</Link>
        <Link href="/economy" className="text-champagne hover:text-parchment">Economy</Link>
        <Link href="/" className="text-champagne hover:text-parchment">Home</Link>
      </div>

      <Footer />
    </main>
  )
}
