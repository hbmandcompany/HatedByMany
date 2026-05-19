'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { gospelPassages } from '@/lib/homeContent'
import { PassageBlock } from '@/components/home/ImmersivePrimitives'

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-obsidian pt-24">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="max-w-4xl">
          <p className="chapter-label">Раздзел I · Chapter I</p>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight text-parchment">
            The Story of
            <span className="text-champagne"> Jesus Christ</span>
          </h1>
          <p className="manuscript mt-8 text-lg leading-[1.9] text-mist md:text-xl">
            The Gospel is not a slide in our pitch deck — it is the narrative that judges our
            roadmaps. What follows is told slowly, as one would read Scripture at candlelight: not to
            perform piety, but to anchor a software house that otherwise could drift into the arrogance
            of our industry.
          </p>
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="space-y-12 lg:space-y-14">
            {gospelPassages.map((p, i) => (
              <PassageBlock key={p.marker} {...p} index={i} />
            ))}
            <blockquote className="glass-panel border-l-2 border-belarus-red/70 p-8 md:p-10">
              <p className="font-display text-2xl italic leading-snug text-parchment md:text-3xl">
                &ldquo;For God so loved the world that He gave His only Son, that whoever believes in
                Him should not perish but have eternal life.&rdquo;
              </p>
              <footer className="mt-6 text-xs uppercase tracking-[0.3em] text-champagne">
                John 3:16 · Public domain of heaven
              </footer>
            </blockquote>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-stone/10 shadow-lux">
              <Image
                src="/_ (36).jpeg"
                alt="Light breaking through darkness"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-obsidian/75" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.35em] text-champagne">Meditation</p>
                <p className="mt-3 font-display text-3xl leading-snug text-parchment">
                  The Lamb who was slain — and lives
                </p>
                <p className="manuscript mt-4 text-sm leading-relaxed text-mist">
                  We do not decorate with crosses; we orient our craft toward the One who bore them.
                  Every sprint retrospective asks a question uncommon in SaaS: did we serve truth, or
                  merely velocity?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-xs uppercase tracking-widest text-champagne hover:text-parchment">
            ← Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
