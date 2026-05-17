'use client'

import type { ReactNode } from 'react'

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
        <span
          aria-hidden
          className="chapter-watermark absolute right-6 top-32 font-display text-[clamp(8rem,20vw,16rem)] leading-none text-white/[0.025] md:right-12"
        >
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
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      <div className={`absolute inset-0 bg-gradient-to-b ${overlay}`} />
    </div>
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
    </div>
  )
}

export function PassageBlock({
  marker,
  title,
  body,
}: {
  marker: string
  title: string
  body: string
  index?: number
}) {
  return (
    <article className="passage-block">
      <div className="flex items-baseline gap-4">
        <span className="passage-marker">{marker}</span>
        <h3 className="font-display text-2xl text-pearl md:text-3xl">{title}</h3>
      </div>
      <p className="manuscript mt-5 text-base leading-[1.85] text-mist md:text-lg">
        {body}
      </p>
    </article>
  )
}
