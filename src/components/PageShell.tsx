import type { ReactNode } from 'react'
import { Footer } from '@/components/Footer'

type PageShellProps = {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <main className="min-h-screen bg-obsidian pt-24">
      <div className="mx-auto max-w-3xl px-4 pb-6 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-pearl md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-mist md:text-lg">
          {description}
        </p>
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-5xl p-8 md:p-12">{children}</div>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </main>
  )
}
