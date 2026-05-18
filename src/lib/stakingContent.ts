export type StakingMetric = {
  label: string
  value: string
  note?: string
}

export type StakingTier = {
  id: string
  index: number
  title: string
  subtitle: string
  stakeRange: string
  votingRole: string
  summary: string
  weightFormula: string
  metrics: StakingMetric[]
  returns: StakingMetric[]
  rights: string[]
}

/** Illustrative treasury — used for relative voting-power examples */
export const TREASURY_STAKED_TOKENS = 48_500_000

export const stakingTiers: StakingTier[] = [
  {
    id: 'participant',
    index: 1,
    title: 'Participant',
    subtitle: 'Quorum voter · Tier I',
    stakeRange: '10,000 – 99,999 HBM',
    votingRole:
      'Signals sentiment on routine proposals. Weight scales with stake but is capped so no single Participant dominates quorum.',
    summary:
      'The broad congregation of the protocol — stakers who align treasury direction without day-to-day operations duty. Power is incremental: every token increases your share of aggregate voting weight, but Tier I carries a governance multiplier of 1.0× relative to stake.',
    weightFormula:
      'Vote weight = (your stake ÷ total staked) × 1.0 × quorum factor',
    metrics: [
      { label: 'Min. stake', value: '10,000', note: 'HBM tokens' },
      { label: 'Typical weight @ 50k stake', value: '0.10%', note: 'of aggregate votes' },
      { label: 'Proposal classes', value: 'Routine', note: 'Fees, grants < $250k' },
      { label: 'Quorum contribution', value: 'Required', note: 'for passage' },
    ],
    returns: [
      { label: 'Base yield (illustrative)', value: '4.2% APY', note: 'protocol revenue share' },
      { label: 'Rake rebate', value: '0.25%', note: 'on Three Wise Men volume' },
      { label: 'Expected 12-mo. return', value: '4.8 – 6.1%', note: 'net of variance' },
    ],
    rights: [
      'Vote on fee schedules and grant allocations under quorum threshold',
      'Delegate vote to Tier II/III holders (optional lock)',
      'Read-only access to treasury attestations and FairnessRegistry exports',
    ],
  },
  {
    id: 'delegate',
    index: 2,
    title: 'Delegate',
    subtitle: 'Treasury delegate · Tier II',
    stakeRange: '100,000 – 999,999 HBM',
    votingRole:
      'Directly allocates weighted votes on capital deployment, vendor selection, and collection roadmaps. Carries 2.5× stake multiplier versus Participants.',
    summary:
      'Institutional-grade voice for operators who stake meaningful size. Your voting power still rises with every additional token, but relative to the entire network you compete on both raw stake and tier multiplier — a Morgan Stanley–style concentration table applies.',
    weightFormula:
      'Vote weight = (your stake ÷ total staked) × 2.5 × delegate attestation',
    metrics: [
      { label: 'Min. stake', value: '100,000', note: 'HBM tokens' },
      { label: 'Typical weight @ 500k stake', value: '2.6%', note: 'of aggregate votes' },
      { label: 'Proposal classes', value: 'Strategic', note: 'Budget, partnerships' },
      { label: 'Multiplier vs. Tier I', value: '2.5×', note: 'same stake basis' },
    ],
    returns: [
      { label: 'Base yield (illustrative)', value: '5.8% APY', note: 'revenue + rake pool' },
      { label: 'Rake rebate', value: '0.75%', note: 'volume tiered' },
      { label: 'Expected 12-mo. return', value: '7.2 – 9.4%', note: 'risk-adjusted band' },
    ],
    rights: [
      'Weighted vote on Atlas / Meridian / Nocturne capital calls',
      'Co-sign multi-sig releases with Tier III on constitutional changes',
      'Priority access to diligence rooms and whitepaper annexes',
    ],
  },
  {
    id: 'sovereign',
    index: 3,
    title: 'Sovereign',
    subtitle: 'Constitutional voter · Tier III',
    stakeRange: '1,000,000+ HBM',
    votingRole:
      'Veto authority on charter amendments, oracle appointments, and emergency treasury freezes. 5.0× multiplier — yet still bounded by total stake ÷ network stake.',
    summary:
      'The smallest cohort with the largest per-token influence. Even at Tier III, voting remains incremental: adding stake always increases weight, but never eclipses the collective without proportional ownership of the entire float.',
    weightFormula:
      'Vote weight = (your stake ÷ total staked) × 5.0; veto on Class A proposals',
    metrics: [
      { label: 'Min. stake', value: '1,000,000', note: 'HBM tokens' },
      { label: 'Typical weight @ 5M stake', value: '51.5%', note: 'illustrative concentration' },
      { label: 'Proposal classes', value: 'Constitutional', note: 'Charter, oracles' },
      { label: 'Veto window', value: '72 hours', note: 'Class A only' },
    ],
    returns: [
      { label: 'Base yield (illustrative)', value: '7.1% APY', note: 'full revenue stack' },
      { label: 'Rake rebate', value: '1.25%', note: 'plus house edge participation' },
      { label: 'Expected 12-mo. return', value: '9.8 – 12.6%', note: 'allocator band' },
    ],
    rights: [
      'Veto on constitutional and oracle appointment votes',
      'Board observer queue and quarterly sealed briefings',
      'Expedited withdrawal lane subject to 48h attestation hold',
    ],
  },
]
