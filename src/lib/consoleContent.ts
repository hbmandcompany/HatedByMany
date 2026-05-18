export type ConsoleTabId =
  | 'overview'
  | 'treasury'
  | 'signers'
  | 'compliance'
  | 'telemetry'
  | 'data-planes'
  | 'settings'

export type ConsoleTab = {
  id: ConsoleTabId
  label: string
}

export const consoleTabs: ConsoleTab[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'treasury', label: 'Treasury' },
  { id: 'signers', label: 'Signers' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'telemetry', label: 'Telemetry' },
  { id: 'data-planes', label: 'Data planes' },
  { id: 'settings', label: 'Settings' },
]

export type ConsoleMetric = { label: string; value: string; delta: string }

export type ConsoleRow = {
  entity: string
  status: string
  latency: string
  region: string
}

export type ConsoleView = {
  title: string
  metrics: ConsoleMetric[]
  tableTitle: string
  rows: ConsoleRow[]
  chartLabel?: string
}

export const consoleViews: Record<ConsoleTabId, ConsoleView> = {
  overview: {
    title: 'Protocol overview',
    metrics: [
      { label: 'Active tenants', value: '240', delta: '+12 QoQ' },
      { label: 'Signer uptime', value: '99.97%', delta: 'SLA met' },
      { label: 'Open approvals', value: '7', delta: '3 urgent' },
      { label: 'Evidence packs', value: '48', delta: 'YTD exports' },
    ],
    chartLabel: 'API latency · 24h',
    tableTitle: 'Collection health',
    rows: [
      { entity: 'Atlas · NA Treasury', status: 'Nominal', latency: '284ms', region: 'iad' },
      { entity: 'Meridian · EU Publishers', status: 'Nominal', latency: '301ms', region: 'fra' },
      { entity: 'Nocturne · Creator mesh', status: 'Degraded', latency: '412ms', region: 'sin' },
      { entity: 'Holding · Signer pool', status: 'Nominal', latency: '198ms', region: 'ord' },
    ],
  },
  treasury: {
    title: 'Treasury · USDC rails',
    metrics: [
      { label: 'Protocol TVL', value: '$48.2M', delta: '+3.1% 30d' },
      { label: 'Gift volume · 24h', value: '$284k', delta: 'Base L2' },
      { label: 'Pending releases', value: '$1.2M', delta: '2 multisig' },
      { label: 'Cold reserve', value: '62%', delta: 'policy target 60%' },
    ],
    chartLabel: 'Inflow / outflow · 7d',
    tableTitle: 'Vault accounts',
    rows: [
      { entity: 'GiftVault · hot', status: 'Nominal', latency: '$4.1M', region: 'base' },
      { entity: 'Treasury · staked', status: 'Nominal', latency: '$38.2M', region: 'base' },
      { entity: 'Escrow · pending', status: 'Nominal', latency: '$1.2M', region: 'base' },
      { entity: 'Fee sink · 5%', status: 'Nominal', latency: '$142k/mo', region: 'wy' },
    ],
  },
  signers: {
    title: 'Signer choreography',
    metrics: [
      { label: 'Signers online', value: '142', delta: 'of 150' },
      { label: 'Pending approvals', value: '7', delta: '3 urgent' },
      { label: 'Avg. sign time', value: '4.2m', delta: 'within SLA' },
      { label: 'Rejected · 30d', value: '2', delta: 'audit logged' },
    ],
    chartLabel: 'Approval queue depth',
    tableTitle: 'Open approval requests',
    rows: [
      { entity: 'Treasury release · $250k', status: 'Awaiting', latency: '4/5', region: 'class-b' },
      { entity: 'Oracle rotate · Chainlink', status: 'Urgent', latency: '3/5', region: 'class-a' },
      { entity: 'NFT minter upgrade', status: 'Awaiting', latency: '2/5', region: 'timelock' },
      { entity: 'Gift fee · 5→4.5%', status: 'Draft', latency: '0/5', region: 'gov' },
    ],
  },
  compliance: {
    title: 'Compliance & attestations',
    metrics: [
      { label: 'SOC 2 Type II', value: 'Current', delta: 'renewal Q3' },
      { label: 'Open findings', value: '0', delta: 'last audit clean' },
      { label: 'KYC coverage', value: '99.2%', delta: 'Coinbase wallet' },
      { label: 'Restricted regions', value: '14', delta: 'geo-blocked' },
    ],
    chartLabel: 'Evidence exports · YTD',
    tableTitle: 'Regulatory posture',
    rows: [
      { entity: 'Wyoming LLC · HBM', status: 'Active', latency: 'Primary', region: 'usa' },
      { entity: 'GDPR · EU data', status: 'Nominal', latency: 'DPA signed', region: 'eu' },
      { entity: 'Gifting disclosure', status: 'Published', latency: 'v2.1', region: 'public' },
      { entity: 'Self-exclusion API', status: 'Nominal', latency: 'Live', region: 'global' },
    ],
  },
  telemetry: {
    title: 'Telemetry & chain events',
    metrics: [
      { label: 'Indexer lag', value: '1.2s', delta: 'Base L2' },
      { label: 'Gift txs · 24h', value: '12.4k', delta: '+8%' },
      { label: 'NFT mints · 24h', value: '847', delta: 'levels 1–5' },
      { label: 'Failed txs', value: '0.03%', delta: 'within norm' },
    ],
    chartLabel: 'Gift throughput · 24h',
    tableTitle: 'Oracle feeds',
    rows: [
      { entity: 'USDC/USD · Chainlink', status: 'Nominal', latency: '12ms', region: 'base' },
      { entity: 'Base block · RPC', status: 'Nominal', latency: '284ms', region: 'iad' },
      { entity: 'Gift index · internal', status: 'Nominal', latency: '45ms', region: 'ord' },
      { entity: 'VRF · level mint', status: 'Nominal', latency: '890ms', region: 'base' },
    ],
  },
  'data-planes': {
    title: 'Data planes & residency',
    metrics: [
      { label: 'Regions active', value: '6', delta: 'isolated' },
      { label: 'Cross-border', value: 'Blocked', delta: 'default deny' },
      { label: 'Replication lag', value: '<2s', delta: 'all planes' },
      { label: 'PII shards', value: 'EU only', delta: 'fra primary' },
    ],
    chartLabel: 'Regional request share',
    tableTitle: 'Data plane status',
    rows: [
      { entity: 'NA · treasury', status: 'Nominal', latency: 'iad', region: 'us' },
      { entity: 'EU · publishers', status: 'Nominal', latency: 'fra', region: 'eu' },
      { entity: 'APAC · mesh', status: 'Degraded', latency: 'sin', region: 'ap' },
      { entity: 'Gov · sealed', status: 'Nominal', latency: 'ord', region: 'us' },
    ],
  },
  settings: {
    title: 'Governance & oracles',
    metrics: [
      { label: 'Timelock', value: '48h', delta: 'UUPS proxy' },
      { label: 'Quorum', value: '12%', delta: 'staked supply' },
      { label: 'Active oracles', value: '4', delta: '2 redundant' },
      { label: 'Proposal queue', value: '3', delta: '1 Class A' },
    ],
    chartLabel: 'Voting participation · 30d',
    tableTitle: 'Protocol parameters',
    rows: [
      { entity: 'Gift fee', status: '5%', latency: 'immutable', region: 'vault' },
      { entity: 'Level thresholds', status: 'On-chain', latency: '5 tiers', region: 'nft' },
      { entity: 'Oracle set', status: '4/4', latency: 'healthy', region: 'base' },
      { entity: 'Emergency pause', status: 'Armed', latency: 'Tier III', region: 'multisig' },
    ],
  },
}
