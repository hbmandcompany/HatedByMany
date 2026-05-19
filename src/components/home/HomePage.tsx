'use client'

import { useRef } from 'react'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/home/HeroSection'

export function HomePage() {
  const rootRef = useRef<HTMLDivElement>(null)

  return (
    <div
      id="main-scroll"
      ref={rootRef}
      className="immersive-scroll noise text-pearl"
    >
      <HeroSection />
      <Footer />
    </div>
  )
}
