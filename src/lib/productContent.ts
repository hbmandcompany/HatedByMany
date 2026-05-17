export const productCollections = [
  {
    id: 'atlas',
    name: 'Atlas',
    tagline: 'Capital OS',
    description:
      'Treasury control plane for multi-entity signers, allocator reporting, and jurisdictional approval routing.',
    stats: [
      { label: 'Signers online', value: '142' },
      { label: 'Pending approvals', value: '7' },
    ],
    accent: 'from-belarus-red/20 to-transparent',
    nav: ['Overview', 'Treasury', 'Signers', 'Audit'],
  },
  {
    id: 'meridian',
    name: 'Meridian',
    tagline: 'Editorial Revenue',
    description:
      'Membership graphs, rounded analytics decks, and revenue automation for publishers and studios.',
    stats: [
      { label: 'MRR tracked', value: '$4.2M' },
      { label: 'Active members', value: '89k' },
    ],
    accent: 'from-champagne/15 to-transparent',
    nav: ['Overview', 'Members', 'Revenue', 'Campaigns'],
  },
  {
    id: 'nocturne',
    name: 'Nocturne',
    tagline: 'Creator Mesh',
    description:
      'Creator-owned distribution, hybrid settlement, and non-custodial wallet UX with partner interconnects.',
    stats: [
      { label: 'Creators', value: '18.4k' },
      { label: 'Payouts / 24h', value: '$1.1M' },
    ],
    accent: 'from-accent-pine/20 to-transparent',
    nav: ['Overview', 'Distribution', 'Wallets', 'Mesh'],
  },
]

export const workflowSteps = [
  {
    step: '01',
    title: 'Provision tenant',
    body: 'Regional residency, SSO, and policy templates applied in under four minutes via the Holding Console.',
  },
  {
    step: '02',
    title: 'Wire collections',
    body: 'Enable Atlas, Meridian, or Nocturne modules with shared design tokens and isolated data planes.',
  },
  {
    step: '03',
    title: 'Attest & deploy',
    body: 'Signed builds, evidence packs, and contract-tested SLO proofs ship with every release channel.',
  },
  {
    step: '04',
    title: 'Operate & audit',
    body: 'Immutable journals, break-glass runbooks, and export-ready compliance surfaces for counsel review.',
  },
]

export const integrations = [
  'Okta',
  'Azure AD',
  'AWS',
  'GCP',
  'Snowflake',
  'Plaid',
  'Stripe',
  'Fireblocks',
  'Slack',
  'Datadog',
]

export const pricingTiers = [
  {
    name: 'Studio',
    price: 'Custom',
    description: 'For product teams shipping a single collection under HBM governance.',
    features: [
      'One collection namespace',
      'SSO & regional residency',
      'Business-hours support',
      'Quarterly evidence exports',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For regulated institutions requiring multi-entity control and dedicated SLOs.',
    features: [
      'All collections + Holding OS',
      'Dedicated success architect',
      '24/7 incident rotation',
      'SOC 2 evidence packs',
      'Custom approval routing',
    ],
    highlighted: true,
  },
  {
    name: 'Sovereign',
    price: 'Custom',
    description: 'For allocators and banks needing on-prem brokers and air-gapped signers.',
    features: [
      'Private mesh interconnect',
      'Hardware key ceremonies',
      'On-prem deployment option',
      'Board-ready audit replay',
    ],
  },
]
