export type BriefingStory = {
  kicker?: string
  headline: string
  byline: string
  paragraphs: string[]
}

export type BriefingBrief = {
  headline: string
  dek: string
}

export const briefingEdition = {
  masthead: 'The HBM Briefing',
  tagline: 'Dallas · Wyoming · Minsk — Enterprise intelligence for the holding company',
  date: 'Sunday, May 17, 2026',
  edition: 'Vol. I · Morning Edition',
}

export const leadStory: BriefingStory = {
  kicker: 'Exclusive',
  headline:
    'Hated By Many Holdings reorganizes as a sovereign software bank — stewardship first, speculation never',
  byline: 'By the Enterprise Desk · HBM Intelligence Unit',
  paragraphs: [
    'In a move described by insiders as “quietly constitutional,” Hated By Many Holdings (HBM) has completed its transition from a boutique software atelier into a federally aligned holding structure with on-chain treasury rails and tiered participant governance.',
    'The company’s charter — filed in Wyoming and mirrored in protocol law — treats every product line as a fiduciary surface: capital must be traceable, votes must be attributable, and yield must map to audited revenue rather than emissions alone.',
    '“We are not building a token for headlines,” said a principal steward who requested anonymity under protocol OPSEC. “We are building a bank-grade loop where creators, delegates, and sovereigns each carry a defined weight — and every basis point of return is tied to work the network actually performs.”',
    'Analysts following the sector note that HBM’s Three Wise Men gifting mesh, Meridian publishing stack, and Atlas custody orchestration now settle through a single HBM coin rail, with staking tiers that scale voting power without breaking incremental fairness.',
  ],
}

export const columnStories: BriefingStory[] = [
  {
    headline: 'Studio map: three verticals, one operating system',
    byline: 'Markets & Platforms',
    paragraphs: [
      'Atlas handles signer choreography and USDC treasury lanes. Meridian governs membership economics. Nocturne distributes creator-owned assets with non-custodial keys. Each vertical shares security baselines and design language under the holding console.',
    ],
  },
  {
    headline: 'Regional posture: Dallas command, Wyoming charter',
    byline: 'Regulatory Affairs',
    paragraphs: [
      'Executive briefing functions operate from Dallas with legal domicile in Wyoming. European correspondence routes through Vilnius; protocol nodes remain jurisdictionally segmented with optional on-prem brokers for qualified entities.',
    ],
  },
]

export const sidebarBriefs: BriefingBrief[] = [
  { headline: 'Treasury attestation', dek: 'Q2 sealed audit window opens Monday for Tier II+ delegates.' },
  { headline: 'HBM spot liquidity', dek: 'Primary pair HBM/USDC live on approved DEX routers; bridge ETA 14 days.' },
  { headline: 'Governance calendar', dek: 'Class B budget vote closes 2400 UTC; quorum 62%.' },
  { headline: 'FairnessRegistry', dek: 'Gift-volume oracle publishes hourly; dispute lane 72h.' },
]

export const bottomBriefs: BriefingBrief[] = [
  { headline: 'Opinion', dek: 'Why incremental voting beats celebrity delegates — A14 doctrine.' },
  { headline: 'Weather', dek: 'Calm markets. Low volatility across protocol revenue bands.' },
  { headline: 'Obituaries', dek: 'Legacy SaaS dashboards that hid signer risk — laid to rest.' },
]
