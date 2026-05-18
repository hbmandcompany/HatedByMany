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
    id: 'play',
    name: 'The Table',
    tagline: 'Core game · threewisemen.cc',
    description:
      'Three-player provably fair 3-card poker on Base. You see every opponent\'s hand — not your own. One betting round, then showdown. Real USDC antes and pots.',
    stats: [
      { label: 'Players', value: '3' },
      { label: 'House rake', value: '5%' },
      { label: 'Settlement', value: 'Instant' },
    ],
    highlights: [
      'Hole cards hidden from self, visible to others',
      'Micro to Whale stakes tiers ($0.25 – $100+ ante)',
      '60s action timer · check, bet, fold, call, raise',
    ],
    href: 'https://threewisemen.cc/play/poker',
    cta: 'Play poker',
  },
  {
    id: 'prove',
    name: 'Fairness Registry',
    tagline: 'On-chain proof · Base L2',
    description:
      'Every hand commits a seed hash before deal; the seed is revealed after settlement. Reconstruct the deck in-browser and verify the on-chain commitment.',
    stats: [
      { label: 'RNG', value: 'VRF + SHA-256' },
      { label: 'Shuffle', value: 'Fisher-Yates' },
      { label: 'Audit', value: 'Post-hand' },
    ],
    highlights: [
      'FairnessRegistry contract stores commitments',
      'Verify This Game modal on every settled pot',
      'Impossible to alter deck after bets are placed',
    ],
    href: 'https://threewisemen.cc/play/poker',
    cta: 'Verify a hand',
  },
  {
    id: 'vault',
    name: 'GameVault',
    tagline: 'USDC treasury · Wyoming LLC',
    description:
      'Deposits, antes, and payouts flow through GameVault on Base — operated by Hated By Many LLC. Non-custodial wallet via Coinbase; balances settle on-chain immediately.',
    stats: [
      { label: 'Asset', value: 'USDC' },
      { label: 'Chain', value: 'Base' },
      { label: 'Operator', value: 'HBM LLC' },
    ],
    highlights: [
      'Deposit · post ante · bet · fold · settle in one session',
      'Matchmaking by skill tier and stakes table',
      'Responsible gambling limits and self-exclusion',
    ],
    href: '/wallet',
    cta: 'Treasury docs',
  },
]
