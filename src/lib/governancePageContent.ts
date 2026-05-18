export type GovernanceArticle = {
  id: string
  title: string
  classification: string
  body: string[]
  bullets?: string[]
}

export const governancePreamble = {
  designation: 'HBM-GOV-001',
  title: 'Constitutional Governance & Military-Grade Protocol',
  subtitle: 'Code of conduct, voting law, and perpetual company structure',
  effective: '2026-01-01 · Rev. 3.2',
  authority: 'Hated By Many Holdings · Wyoming charter · Protocol mirror',
}

export const governanceArticles: GovernanceArticle[] = [
  {
    id: 'ART-I',
    title: 'Code of conduct — all personnel, delegates, and signers',
    classification: 'UNCLASSIFIED // OPERATIONAL',
    body: [
      'Every actor with console, signer, or delegate credentials operates under zero-trust discipline: authenticate, attest, act, log, and rotate.',
      'Insider communication regarding treasury movement, oracle feeds, or vote timing is prohibited outside sealed channels. Violations trigger automatic stake slash review.',
    ],
    bullets: [
      'No single signer may approve constitutional (Class A) releases alone.',
      'All incidents reported within 15 minutes to the on-call rotation.',
      'Personal trading on material non-public protocol data is forbidden.',
      'Craft and scripture commitments in public communications must match audited product behavior.',
    ],
  },
  {
    id: 'ART-II',
    title: 'Legal structure — holding company & protocol mirror',
    classification: 'RESTRICTED // LEGAL',
    body: [
      'Hated By Many Holdings exists as a Wyoming limited liability structure with federal-grade documentation standards. The on-chain protocol mirrors charter articles: what the LLC cannot do, the smart contracts enforce.',
      'Investor classes map to staking tiers but do not circumvent securities law — offerings are limited to qualified participants where required.',
    ],
    bullets: [
      'SPV per product line with intercompany service agreements.',
      'MSB-adjacent policies for USDC movement and KYC/AML attestations.',
      'Data processing addenda for EU nodes (Vilnius correspondence).',
      'Annual sealed audit + quarterly attestation exports to delegates.',
    ],
  },
  {
    id: 'ART-III',
    title: 'Voting protocol — proposal classes & quorum',
    classification: 'SECRET // GOVERNANCE',
    body: [
      'Votes are incremental: weight = (stake ÷ total staked) × tier multiplier. No wallet may exceed proportional ownership of aggregate weight without holding that stake.',
    ],
    bullets: [
      'Class R (Routine): fee schedules, grants < $250k — Participant quorum 51%.',
      'Class S (Strategic): budgets, partnerships — Delegate-weighted quorum 62%.',
      'Class A (Constitutional): charter, oracles, emergency freeze — Sovereign veto 72h.',
      'Vote duration: 72h standard · 24h emergency with 80% pre-approval.',
    ],
  },
  {
    id: 'ART-IV',
    title: 'Accrual & monetary policy — staking returns',
    classification: 'RESTRICTED // TREASURY',
    body: [
      'Yield is not promised; it is allocated from verified protocol revenue. Emissions supplement but do not replace enterprise cash flow. APY bands published in treasury are illustrative and risk-adjusted.',
    ],
    bullets: [
      'Epoch distribution: weekly, merkle-claimed with attestation.',
      'Slash conditions: oracle manipulation, signer collusion, undisclosed conflicts.',
      'Treasury freeze: Class A vote + 48h timelock on all outflows.',
      'FairnessRegistry disputes: 72h arbitration before slash execution.',
    ],
  },
  {
    id: 'ART-V',
    title: 'Perpetuation — succession, amendment, dissolution',
    classification: 'SECRET // BOARD',
    body: [
      'The company perpetuates through documented succession: sovereign cohort maintains veto on oracle appointments; board observer queue rotates quarterly.',
      'Charter amendment requires Class A passage, 72h sovereign veto window, and Wyoming filing within 30 days.',
    ],
    bullets: [
      'Emergency council: 3-of-5 multi-sig with geographic distribution.',
      'Dissolution only via Class A + 90% stake-weighted affirmation.',
      'Protocol upgrade timelock: 48h minimum for non-hotfix releases.',
      'Annual constitutional review — published redacted summary to all tiers.',
    ],
  },
]

export const votingMatrix = [
  { proposal: 'Fee schedule change', class: 'R', quorum: '51%', veto: '—' },
  { proposal: 'Grant < $250k', class: 'R', quorum: '51%', veto: '—' },
  { proposal: 'Treasury release > $1M', class: 'S', quorum: '62%', veto: '—' },
  { proposal: 'Partnership / acquisition', class: 'S', quorum: '62%', veto: '—' },
  { proposal: 'Oracle appointment', class: 'A', quorum: '67%', veto: '72h Sovereign' },
  { proposal: 'Charter amendment', class: 'A', quorum: '67%', veto: '72h Sovereign' },
  { proposal: 'Emergency freeze', class: 'A', quorum: '55%', veto: 'Council 3-of-5' },
]
