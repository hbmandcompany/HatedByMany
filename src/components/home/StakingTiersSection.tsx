'use client'

import { stakingTiers, TREASURY_STAKED_TOKENS } from '@/lib/stakingContent'
import { StakingTierFullscreen } from '@/components/home/StakingTierFullscreen'

function formatTokens(n: number) {
  return new Intl.NumberFormat('en-US').format(n)
}

export function StakingTiersSection() {
  return (
    <section id="chapter-ii" className="bg-obsidian">
      <div className="snap-panel border-b border-stone/10 px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="chapter-label">Раздзел II · Chapter II</p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] leading-tight text-parchment">
            Our Services to
            <span className="text-champagne"> our Savior</span>
          </h2>
          <p className="manuscript mx-auto mt-6 max-w-2xl text-base leading-relaxed text-pearl md:text-lg">
            Three voting memberships in the protocol treasury. Your influence is
            always incremental — stake more, weigh more — but the tier you hold
            defines which proposals you may touch and how returns accrue.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-mist">
            Illustrative network stake: {formatTokens(TREASURY_STAKED_TOKENS)} HBM
          </p>
        </div>
      </div>

      {stakingTiers.map((tier) => (
        <StakingTierFullscreen key={tier.id} tier={tier} />
      ))}
    </section>
  )
}
