import Link from 'next/link'
import { Footer } from '@/components/Footer'
import {
  bottomBriefs,
  briefingEdition,
  columnStories,
  leadStory,
  sidebarBriefs,
} from '@/lib/companyBriefingContent'

function StoryBlock({
  story,
  large = false,
}: {
  story: { kicker?: string; headline: string; byline: string; paragraphs: string[] }
  large?: boolean
}) {
  return (
    <article>
      {story.kicker && (
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b1a2d]">
          {story.kicker}
        </p>
      )}
      <h2
        className={`font-display font-semibold leading-tight text-[#1a1a1a] ${
          large
            ? 'mt-1 text-3xl sm:text-4xl md:text-[2.75rem] md:leading-[1.05]'
            : 'mt-2 text-xl sm:text-2xl'
        }`}
      >
        {story.headline}
      </h2>
      <p className="mt-2 text-[11px] uppercase tracking-wide text-[#666]">{story.byline}</p>
      <div className={`space-y-3 text-[#2a2a2a] ${large ? 'mt-5 text-base leading-relaxed' : 'mt-3 text-sm leading-relaxed'}`}>
        {story.paragraphs.map((p) => (
          <p
            key={p.slice(0, 40)}
            className={
              large
                ? 'first-letter:float-left first-letter:mr-1 first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:leading-none'
                : ''
            }
          >
            {p}
          </p>
        ))}
      </div>
    </article>
  )
}

export function CompanyBriefingPage() {
  return (
    <main className="min-h-screen bg-obsidian pt-16">
      <div className="newsprint-page mx-auto max-w-6xl px-4 pb-4 pt-8 sm:px-6 lg:px-8">
        <header className="border-b-4 border-double border-[#1a1a1a] pb-3">
          <div className="flex flex-wrap items-end justify-between gap-2 text-[10px] uppercase tracking-widest text-[#555]">
            <span>{briefingEdition.date}</span>
            <span>{briefingEdition.edition}</span>
          </div>
          <h1 className="mt-2 text-center font-display text-4xl font-bold tracking-tight text-[#1a1a1a] sm:text-5xl md:text-6xl">
            {briefingEdition.masthead}
          </h1>
          <p className="mt-1 text-center text-xs italic text-[#444] sm:text-sm">
            {briefingEdition.tagline}
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4 border-y border-[#1a1a1a] py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#333]">
            <span>Company</span>
            <span className="text-[#ccc]">|</span>
            <span>Treasury</span>
            <span className="text-[#ccc]">|</span>
            <span>Governance</span>
            <span className="text-[#ccc]">|</span>
            <span>Markets</span>
            <span className="text-[#ccc]">|</span>
            <span>Opinion</span>
          </div>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <StoryBlock story={leadStory} large />
          </div>
          <aside className="border-t-2 border-[#1a1a1a] pt-4 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#8b1a2d]">
              Latest briefs
            </h3>
            <ul className="mt-4 space-y-5">
              {sidebarBriefs.map((b) => (
                <li key={b.headline} className="border-b border-[#ddd] pb-4 last:border-0">
                  <p className="font-display text-sm font-semibold leading-snug text-[#1a1a1a]">
                    {b.headline}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#555]">{b.dek}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-10 border-t border-[#ccc] pt-8">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {columnStories.map((story) => (
              <StoryBlock key={story.headline} story={story} />
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 border-t-2 border-[#1a1a1a] pt-6 sm:grid-cols-3">
          {bottomBriefs.map((b) => (
            <div key={b.headline}>
              <p className="text-[10px] font-bold uppercase text-[#8b1a2d]">{b.headline}</p>
              <p className="mt-1 text-xs text-[#444]">{b.dek}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#ccc] pt-6">
          <p className="text-[10px] uppercase tracking-widest text-[#888]">
            © Hated By Many Holdings · Formerly Of This Life
          </p>
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-widest text-[#8b1a2d] hover:underline"
          >
            ← Return to home
          </Link>
        </div>
      </div>

      <div className="mt-12 bg-obsidian">
        <Footer />
      </div>
    </main>
  )
}
