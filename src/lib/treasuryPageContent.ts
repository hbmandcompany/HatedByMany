export const tokenomics = {
  symbol: 'HBM',
  name: 'Hated By Many',
  chain: 'Ethereum L2 · Base',
  totalSupply: '500,000,000',
  circulating: '200,000,000',
  locked: '300,000,000',
  decimals: 18,
  launchPrice: '$0.035',
  marketCap: '$7,000,000',
  peRatio: '9.8x',
  earningsYield: '2.8%',
  earningsPerToken: '$0.0014',
}

export const allocations = [
  { label: 'Community & airdrop', pct: '30%', amount: '150,000,000', vesting: 'Immediate upon claim' },
  { label: 'Treasury reserve', pct: '30%', amount: '150,000,000', vesting: 'Multi-sig gated · no emission' },
  { label: 'Founder / core team', pct: '20%', amount: '100,000,000', vesting: '4-yr linear · 1-yr cliff' },
  { label: 'Liquidity provision', pct: '10%', amount: '50,000,000', vesting: 'DEX LP locks · 2-yr' },
  { label: 'Advisors & investors', pct: '10%', amount: '50,000,000', vesting: '2-yr linear · 6-mo cliff' },
]

export const revenueFlows = [
  { source: 'LightRain (Base L2 observability)', share: '40%', note: 'API subscriptions · enterprise data feeds' },
  { source: 'Wintergarden (music platform)', share: '25%', note: 'Subscription revenue · WGN ecosystem' },
  { source: 'PostCarrier (Filecoin storage)', share: '20%', note: 'Storage fees · video editing SaaS' },
  { source: 'Treasury reserve yield', share: '15%', note: 'USDC strategies · stablecoin lending' },
]

export const quarterlyRevenue = [
  { quarter: 'Q1 2026', gross: 50000, distributed: 40000, reserve: 10000, epToken: 0.0002 },
  { quarter: 'Q2 2026', gross: 75000, distributed: 60000, reserve: 15000, epToken: 0.0003 },
  { quarter: 'Q3 2026', gross: 120000, distributed: 96000, reserve: 24000, epToken: 0.00048 },
  { quarter: 'Q4 2026', gross: 180000, distributed: 144000, reserve: 36000, epToken: 0.00072 },
]

export const distributionMechanics = {
  frequency: 'Quarterly',
  payoutRatio: '80%',
  reserveRatio: '20%',
  settlementToken: 'USDC',
  nextDistribution: 'March 31, 2026',
  lastDistribution: 'December 15, 2025',
  lastAmount: '$96,000',
  lastPerToken: '$0.0004',
  claimsProcessed: '98%',
}

export const supplySchedule = [
  { year: 'Launch (Q2 2026)', circulating: 200, vesting: 150, treasury: 150 },
  { year: 'Year 1 (Q4 2026)', circulating: 240, vesting: 110, treasury: 150 },
  { year: 'Year 2 (Q4 2027)', circulating: 280, vesting: 70, treasury: 150 },
  { year: 'Year 3 (Q4 2028)', circulating: 320, vesting: 30, treasury: 150 },
  { year: 'Year 4 (Q4 2029)', circulating: 360, vesting: 0, treasury: 140 },
]

export const treasuryAssets = [
  { label: 'USDC', amount: '$425,000', pct: 50, color: 'bg-frost' },
  { label: 'ETH', amount: '$380,000', pct: 45, color: 'bg-champagne' },
  { label: 'USDC bonds', amount: '$42,320', pct: 5, color: 'bg-mist' },
]

export const bankingLayers = [
  {
    layer: 'L0 — Legal',
    role: 'Wyoming LLC · Texas licensed entity',
    detail:
      'Hated By Many LLC holds all IP, contracts, and token issuance rights. Brown & Sullivan handles regulated insurance surfaces.',
  },
  {
    layer: 'L1 — Treasury',
    role: 'USDC rails · multi-sig · cold quorum',
    detail:
      '2-of-3 multi-sig controls all treasury moves above $50K. 20% of all gross revenue routes here before distribution.',
  },
  {
    layer: 'L2 — Token',
    role: 'HBM · Base L2 · fixed supply',
    detail:
      'Fixed 500M supply. No inflation, no staking yield. Revenue backing only. Quarterly USDC distribution to all holders.',
  },
  {
    layer: 'L3 — Products',
    role: 'LightRain · Wintergarden · PostCarrier',
    detail:
      'All product revenue aggregates quarterly. Published transparently. Flows 80% to token holders via smart contract claim.',
  },
]
