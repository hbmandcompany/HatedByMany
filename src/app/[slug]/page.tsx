import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageShell } from '@/components/PageShell'
import { getMarketingPage, marketingSlugs } from '@/lib/marketingCopy'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return marketingSlugs.map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getMarketingPage(params.slug)
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
  }
}

export default function MarketingRoute({ params }: Props) {
  const page = getMarketingPage(params.slug)
  if (!page) notFound()

  return (
    <PageShell
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
    >
      <div className="space-y-10">
        {page.sections.map((section, si) => (
          <section key={si} className="space-y-4">
            <h2 className="font-display text-2xl font-medium tracking-tight text-pearl md:text-3xl">
              {section.heading}
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-mist md:text-base">
              {section.paragraphs.map((p, pi) => (
                <p key={`${si}-${pi}`}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  )
}
