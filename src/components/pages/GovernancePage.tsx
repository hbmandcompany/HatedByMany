import Link from 'next/link'
import { FileText, Gavel, Lock } from 'lucide-react'
import { Footer } from '@/components/Footer'
import {
  governanceArticles,
  governancePreamble,
  votingMatrix,
} from '@/lib/governancePageContent'

function ClassificationBar({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 border border-belarus-red/40 bg-belarus-red/10 px-3 py-1.5">
      <Lock className="h-3 w-3 text-belarus-red" />
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-belarus-red">
        {label}
      </span>
    </div>
  )
}

export function GovernancePage() {
  return (
    <main className="min-h-screen bg-obsidian pt-24">
      <section className="border-b border-stone/15 bg-graphite/80">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <ClassificationBar label="Governance · Constitutional" />
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-mist">
            {governancePreamble.designation} · Effective {governancePreamble.effective}
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-parchment md:text-5xl">
            {governancePreamble.title}
          </h1>
          <p className="mt-3 text-lg text-champagne">{governancePreamble.subtitle}</p>
          <p className="mt-4 text-sm text-mist">{governancePreamble.authority}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Gavel className="h-5 w-5 text-belarus-red" />
          <h2 className="font-display text-2xl text-parchment">Voting matrix</h2>
        </div>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[560px] border border-stone/20 text-sm">
            <thead className="bg-graphite/90">
              <tr className="text-left text-[10px] uppercase tracking-widest text-champagne">
                <th className="border-b border-stone/20 px-4 py-3">Proposal</th>
                <th className="border-b border-stone/20 px-4 py-3">Class</th>
                <th className="border-b border-stone/20 px-4 py-3">Quorum</th>
                <th className="border-b border-stone/20 px-4 py-3">Veto</th>
              </tr>
            </thead>
            <tbody>
              {votingMatrix.map((row) => (
                <tr key={row.proposal} className="border-b border-stone/10 text-pearl">
                  <td className="px-4 py-3 text-parchment">{row.proposal}</td>
                  <td className="px-4 py-3 font-mono text-belarus-red">{row.class}</td>
                  <td className="px-4 py-3">{row.quorum}</td>
                  <td className="px-4 py-3 text-mist">{row.veto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-t border-stone/10 bg-graphite/40 py-16">
        <div className="mx-auto max-w-5xl space-y-12 px-4 sm:px-6 lg:px-8">
          {governanceArticles.map((article) => (
            <article key={article.id} className="saas-window p-8 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-belarus-red">{article.id}</p>
                  <h3 className="mt-2 font-display text-2xl text-parchment">{article.title}</h3>
                </div>
                <ClassificationBar label={article.classification} />
              </div>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-mist">
                {article.body.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>
              {article.bullets && (
                <ul className="mt-6 space-y-2 border-t border-stone/15 pt-6">
                  {article.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-pearl">
                      <span className="shrink-0 font-mono text-[10px] text-champagne">§</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="glass-panel flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <FileText className="h-8 w-8 shrink-0 text-champagne" />
            <div>
              <h3 className="font-display text-xl text-parchment">Sealed whitepaper annex</h3>
              <p className="mt-2 max-w-lg text-sm text-mist">
                Full cryptographic spec, signer diagrams, and regulatory exhibits available to
                qualified delegates via Console. Include entity registration and intended use.
              </p>
            </div>
          </div>
          <Link
            href="/login"
            className="shrink-0 rounded-full bg-frost px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-obsidian transition hover:bg-parchment"
          >
            Request access
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-6 text-xs uppercase tracking-widest">
          <Link href="/wallet" className="text-champagne hover:text-parchment">
            Treasury →
          </Link>
          <Link href="/about-us" className="text-champagne hover:text-parchment">
            Company briefing →
          </Link>
          <Link href="/" className="text-champagne hover:text-parchment">
            Home →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
