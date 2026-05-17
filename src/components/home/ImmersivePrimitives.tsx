'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

export const fade = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-6%' },
  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
}

export function SectionShell({
  id,
  children,
  className = '',
  watermark,
}: {
  id: string
  children: ReactNode
  className?: string
  watermark?: string
}) {
  return (
    <section id={id} className={`immersive-section relative ${className}`}>
      {watermark ? (
        <span aria-hidden className="chapter-watermark absolute right-6 top-32 font-display text-[clamp(8rem,20vw,16rem)] leading-none text-white/[0.025] md:right-12">
          {watermark}
        </span>
      ) : null}
      {children}
    </section>
  )
}

export function ParallaxImage({
  src,
  alt,
  className = '',
  overlay = 'from-obsidian/90 via-obsidian/50 to-obsidian',
}: {
  src: string
  alt: string
  className?: string
  overlay?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18])

  return (
    <motion.div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </motion.div>
      <motion.div className={`absolute inset-0 bg-gradient-to-b ${overlay}`} />
    </motion.div>
  )
}

export function MetricCard({
  label,
  value,
  detail,
}: {
  label: string
  value: string
  detail: string
}) {
  return (
    <div className="saas-metric group">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mist">
        {label}
      </p>
      <p className="mt-2 font-display text-3xl text-pearl md:text-4xl">{value}</p>
      <p className="mt-2 text-xs leading-relaxed text-mist/80">{detail}</p>
      <div className="metric-shimmer mt-4" />
    </div>
  )
}

export function PassageBlock({
  marker,
  title,
  body,
  index,
}: {
  marker: string
  title: string
  body: string
  index: number
}) {
  return (
    <motion.article
      {...fade}
      transition={{ ...fade.transition, delay: index * 0.06 }}
      className="passage-block"
    >
      <div className="flex items-baseline gap-4">
        <span className="passage-marker">{marker}</span>
        <h3 className="font-display text-2xl text-pearl md:text-3xl">{title}</h3>
      </div>
      <p className="manuscript mt-5 text-base leading-[1.85] text-mist md:text-lg">
        {body}
      </p>
    </motion.article>
  )
}

export function MarqueeStrip({ items }: { items: string[] }) {
  const doubled = [...items, ...items]
  return (
    <motion.div className="marquee-mask relative overflow-hidden border-y border-white/10 bg-obsidian/60 py-4 backdrop-blur-md">
      <motion.div
        className="marquee-track flex w-max gap-12"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.35em] text-mist/70"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </motion.div>
  )
}
