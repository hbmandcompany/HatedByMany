export const tokenomics = {
  symbol: 'HBM',
  name: 'Hated By Many',
  chain: 'Ethereum L2 · HBM Mesh',
  totalSupply: '100,000,000',
  circulating: '48,500,000',
  staked: '48,500,000',
  decimals: 18,
}

export const allocations = [
  { label: 'Community & staking rewards', pct: '32%', amount: '32,000,000', vesting: '48-mo emission curve' },
  { label: 'Treasury reserve (USDC paired)', pct: '24%', amount: '24,000,000', vesting: 'Multi-sig gated' },
  { label: 'Studio & R&D', pct: '18%', amount: '18,000,000', vesting: '12-mo cliff, 36-mo linear' },
  { label: 'Delegate & sovereign incentives', pct: '14%', amount: '14,000,000', vesting: 'Performance attested' },
  { label: 'Liquidity & market making', pct: '8%', amount: '8,000,000', vesting: 'DEX LP locks' },
  { label: 'Charter & compliance', pct: '4%', amount: '4,000,000', vesting: 'Escrow until audit' },
]

export const acquireSteps = [
  {
    step: '01',
    title: 'Connect wallet',
    body: 'Use MetaMask, Rabby, or the HBM Console signer. Keys remain non-custodial — HBM never holds your seed.',
  },
  {
    step: '02',
    title: 'Bridge or swap',
    body: 'Acquire HBM via approved DEX pairs (HBM/USDC) or the official mesh bridge from Ethereum mainnet. Verify contract on the FairnessRegistry.',
  },
  {
    step: '03',
    title: 'Stake to tier',
    body: 'Deposit into the staking vault to activate Participant, Delegate, or Sovereign rights. Weight accrues incrementally with stake size.',
  },
  {
    step: '04',
    title: 'Claim yield',
    body: 'Protocol revenue share, gift-fee rake, and treasury rake distribute on epoch boundaries (weekly). Claims require attestation signature.',
  },
]

export const bankingLayers = [
  {
    layer: 'L0 — Charter',
    role: 'Wyoming SPV · federal-aligned disclosures',
    detail: 'Legal wrapper for holding company, MSB-adjacent policies, and investor classification.',
  },
  {
    layer: 'L1 — Treasury',
    role: 'USDC rails · multi-sig · cold quorum',
    detail: 'Atlas orchestrates releases. Every outflow requires Tier II co-sign; constitutional moves need Tier III veto window.',
  },
  {
    layer: 'L2 — Protocol',
    role: 'HBM token · staking · governance',
    detail: 'On-chain vote weight, emissions schedule, and FairnessRegistry oracles bind monetary policy to code.',
  },
  {
    layer: 'L3 — Products',
    role: 'Gifting mesh · publishing · custody UX',
    detail: 'Revenue from Three Wise Men gifts, Meridian subscriptions, and enterprise licenses flows back to stakers.',
  },
]

export const revenueFlows = [
  { source: 'Gift protocol fees', share: '40%', note: 'Three Wise Men NFT levels' },
  { source: 'Enterprise licenses', share: '35%', note: 'Atlas / Meridian / Console' },
  { source: 'Treasury yield', share: '15%', note: 'USDC reserve strategies' },
  { source: 'Network services', share: '10%', note: 'API, attestations, bridge' },
]
