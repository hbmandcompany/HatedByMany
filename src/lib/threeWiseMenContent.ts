export type WiseMenProduct = {
  id: string
  name: string
  tagline: string
  description: string
  stats: { label: string; value: string }[]
  highlights: string[]
  href: string
  cta: string
}

export const threeWiseMenProducts: WiseMenProduct[] = [
  {
    id: 'gifting',
    name: 'Gifting',
    tagline: 'USDC on Base · threewisemen.cc',
    description:
      'Send crypto gifts directly to creators, influencers, or friends. Every gift is timestamped on-chain — permanent, public, and verifiable. Recipients keep 95%; the protocol retains 5%.',
    stats: [
      { label: 'Asset', value: 'USDC' },
      { label: 'Platform fee', value: '5%' },
      { label: 'Recipient', value: '95%' },
    ],
    highlights: [
      'Direct wallet-to-wallet gifts via Coinbase embedded wallet',
      'On-chain record visible to the entire community',
      'Creators set their own receiver address — no extraction',
    ],
    href: 'https://threewisemen.cc',
    cta: 'Send a gift',
  },
  {
    id: 'levels',
    name: 'NFT Levels',
    tagline: 'Achievement tiers · Base L2',
    description:
      'Cumulative gifting unlocks minted achievement NFTs — Admirer through Wise Man. Each level grants badges, leaderboard placement, and exclusive gift tiers.',
    stats: [
      { label: 'Levels', value: '5' },
      { label: 'Top tier', value: '$10k' },
      { label: 'Proof', value: 'NFT' },
    ],
    highlights: [
      'Level 1 Admirer · $10 · Level 5 Wise Man · $10,000 lifetime',
      'Profile badges, frames, and top-supporter leaderboards',
      'Tradeable NFTs — portable proof of generosity',
    ],
    href: 'https://threewisemen.cc',
    cta: 'View levels',
  },
  {
    id: 'network',
    name: 'Network Effect',
    tagline: 'Creators · Givers · Protocol',
    description:
      'The three wise men bearing gifts — giving as virtue, recognition of the giver, public generosity. Creators earn ongoing USDC; givers compete for status; the protocol scales on volume.',
    stats: [
      { label: 'Chain', value: 'Base' },
      { label: 'Operator', value: 'HBM LLC' },
      { label: 'Model', value: 'Social' },
    ],
    highlights: [
      'Public gifting leaderboards for creators and charities',
      'Gamified levels drive ongoing engagement and bragging rights',
      '5% fee + optional mint premiums; creators keep the majority',
    ],
    href: '/whitepaper',
    cta: 'Read spec',
  },
]

export const threeWiseMenIntro = {
  eyebrow: 'Three Wise Men · Base L2',
  title: 'Crypto-backed gifting with NFT levels',
  body: 'A social gifting platform on Base where users send USDC to creators and friends. Every gift is on-chain and public. Gift more — unlock NFT achievement tiers from Admirer to Wise Man.',
}
