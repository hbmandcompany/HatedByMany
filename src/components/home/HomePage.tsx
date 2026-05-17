'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Footer } from '@/components/Footer'

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8%' },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
}

const services = [
  {
    title: 'Sovereign platforms',
    verse: '"Build on rock, not sand."',
    body:
      'Multi-tenant control planes, regional isolation, and interfaces shaped for institutions that cannot afford drift — software that holds when storms arrive.',
  },
  {
    title: 'Capital & custody rails',
    verse: '"Faithful over little."',
    body:
      'Treasury workflows, signer choreography, and audit trails written for boards and regulators — every ledger line accountable before heaven and earth.',
  },
  {
    title: 'Creator & publishing mesh',
    verse: '"Let your light shine."',
    body:
      'Distribution, membership graphs, and non-custodial wallets — so builders own their audience without renting it from empires.',
  },
]

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="snap-scroll noise text-pearl"
    >
      {/* Hero — full viewport, single column */}
      <section
        id="hero"
        className="snap-panel relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      >
        <Image
          src="/smartwatch-hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 pb-24 pt-28 text-center sm:px-10"
        >
          <p className="belarus-eyebrow text-[0.65rem] sm:text-xs">
            <span className="text-belarus-red">●</span> Мінск · Вільня · Нью-Ёрк
            <span className="mx-3 text-white/20">|</span>
            Luxury software holding
          </p>

          <div className="ornament-rule mx-auto my-8 w-24" />

          <h1 className="max-w-5xl font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.02] tracking-tight">
            hated
            <span className="text-champagne/90"> by many.</span>
            <br />
            <span className="italic text-pearl/90">faithful to One.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-mist sm:text-lg md:text-xl">
            A Belarusian atelier of enterprise SaaS — where scripture sets the
            rhythm, and every system we ship is built as though it must endure
            beyond our lifetimes.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="#chapter-i"
              className="inline-flex items-center justify-center rounded-full bg-pearl px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-obsidian shadow-lux transition hover:bg-champagne"
            >
              Begin the liturgy
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-pearl transition hover:border-champagne/50 hover:text-champagne"
            >
              Enter console
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/75 via-obsidian/55 to-obsidian" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        >
          <a
            href="#chapter-i"
            className="flex flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.35em] text-mist transition hover:text-champagne"
          >
            Scroll
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="vyshyvanka-border pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1"
        />
      </section>

      {/* Chapter I */}
      <section
        id="chapter-i"
        className="snap-panel relative flex min-h-screen items-center overflow-hidden bg-obsidian"
      >
        <div className="orb -left-40 top-1/4 h-80 w-80 bg-ribbon animate-drift" />
        <motion.div
          {...fade}
          className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 py-28 sm:px-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16"
        >
          <motion.div {...fade} className="order-2 lg:order-1">
            <p className="chapter-label">Раздзел I · Chapter I</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              The Story of
              <br />
              <span className="text-champagne">Jesus Christ</span>
            </h2>
            <motion.div
              {...fade}
              className="manuscript mt-10 space-y-6 text-mist"
            >
              <p className="text-lg leading-relaxed text-pearl/90 md:text-xl">
                Before empires rose or code was written, the Word was — and the
                Word became flesh and dwelt among us. In Galilee He called
                fishermen; in Jerusalem He wept; on Golgotha He bore what we
                could not bear, and on the third day the tomb could not hold
                Him.
              </p>
              <p className="leading-relaxed">
                This is not ornament for our brand. It is the axis on which we
                turn. We build software as stewards of a King who emptied
                Himself — therefore our interfaces refuse vanity, our contracts
                refuse deceit, and our labor refuses the idolatry of speed
                without truth.
              </p>
              <p className="border-l-2 border-belarus-red/60 pl-6 italic text-pearl/80">
                “For God so loved the world that He gave His only Son, that
                whoever believes in Him should not perish but have eternal
                life.” — John 3:16
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            {...fade}
            transition={{ ...fade.transition, delay: 0.12 }}
            className="order-1 lg:order-2"
          >
            <motion.div
              {...fade}
              className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 shadow-lux"
            >
              <Image
                src="/_ (36).jpeg"
                alt="Light breaking through darkness"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-display text-2xl text-pearl/95">
                  The Lamb who was slain
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-champagne">
                  Worthy is He who reigns
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <span
          aria-hidden
          className="chapter-watermark pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-display text-[12rem] leading-none text-white/[0.02] md:text-[16rem]"
        >
          I
        </span>
      </section>

      {/* Chapter II */}
      <section
        id="chapter-ii"
        className="snap-panel relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-graphite via-obsidian to-graphite"
      >
        <Image
          src="/phonelines.jpeg"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-obsidian/85" />
        <motion.div
          {...fade}
          className="relative z-10 mx-auto w-full max-w-6xl px-6 py-28 sm:px-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="chapter-label">Раздзел II · Chapter II</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              Our Services to
              <br />
              <span className="text-champagne">our Savior</span>
            </h2>
            <p className="manuscript mt-8 text-lg leading-relaxed text-mist md:text-xl">
              We are a software house — yet we do not worship the machine. We
              offer our craft as incense: platforms, rails, and meshes that
              serve enterprises and creators who answer to a higher court than
              quarterly earnings.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {services.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-panel group relative overflow-hidden rounded-[2rem] p-8"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
                  className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-belarus-red via-champagne to-accent-pine"
                />
                <p className="text-xs italic text-champagne/90">{item.verse}</p>
                <h3 className="mt-4 font-display text-2xl text-pearl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-mist">
                  {item.body}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.p
            {...fade}
            className="manuscript mx-auto mt-14 max-w-3xl text-center text-sm leading-relaxed text-mist md:text-base"
          >
            Like the tabernacle artisans of old, we measure twice and ship once.
            HBM Holdings composes Atlas, Meridian, and Nocturne — collections
            united by one design language, divided only where sovereignty demands
            it. Request a briefing; we will answer as servants, not sovereigns.
          </motion.p>

          <motion.div className="mt-10 flex justify-center">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-champagne transition hover:text-pearl"
            >
              Explore our offerings
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
        <span
          aria-hidden
          className="chapter-watermark pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-display text-[12rem] leading-none text-white/[0.02] md:text-[16rem]"
        >
          II
        </span>
      </section>

      {/* Chapter III — covenant / closing */}
      <section
        id="chapter-iii"
        className="snap-panel relative flex min-h-screen flex-col justify-between overflow-hidden bg-obsidian"
      >
        <div className="orb right-0 top-20 h-96 w-96 bg-grove animate-drift" />
        <motion.div
          {...fade}
          className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-28 text-center sm:px-10"
        >
          <p className="chapter-label">Раздзел III · Chapter III</p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
            The Covenant of
            <span className="text-champagne"> Craft</span>
          </h2>
          <blockquote className="manuscript mt-10 max-w-2xl font-display text-2xl italic leading-snug text-pearl/90 md:text-3xl">
            Transform. Do not conform. Let every deployment be an act of
            obedience — software that outlives its makers because it was built
            in fear of the Lord and love of neighbor.
          </blockquote>
          <p className="mt-8 max-w-xl text-sm uppercase tracking-[0.3em] text-mist">
            Hated By Many Holdings · Wyoming, USA
          </p>
          <motion.div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/learn-more"
              className="inline-flex items-center justify-center rounded-full bg-pearl px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-obsidian transition hover:bg-champagne"
            >
              Request briefing
            </Link>
            <Link
              href="/download"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-pearl transition hover:border-champagne/50"
            >
              Client downloads
            </Link>
          </motion.div>
        </motion.div>
        <div className="vyshyvanka-border relative z-10 h-1 w-full" />
        <Footer />
      </section>
    </motion.div>
  )
}
