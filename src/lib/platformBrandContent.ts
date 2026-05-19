export type PlatformBrand = {
  slug: string
  name: string
  domain: string
  domainUrl: string
  code: string
  layer: string
  tagline: string
  heroBody: string
  metrics: { label: string; value: string; detail: string }[]
  capabilities: { title: string; body: string; tags: string[] }[]
  pipeline: { step: string; detail: string }[]
  integration: string
  externalCta: string
}

export const michelangeloBrand: PlatformBrand = {
  slug: 'michelangelo',
  name: 'Michelangelo',
  domain: 'michelangelo.agency',
  domainUrl: 'https://michelangelo.agency',
  code: 'MCH-CRE',
  layer: 'Creative production · HBM Platform',
  tagline: 'Three-dimensional craft for a network that must look as serious as it audits.',
  heroBody:
    'Michelangelo is the creative production arm of Hated By Many — motion, real-time 3D, and licensable digital assets built to ship inside treasury-backed products, not as disposable campaign art.',
  metrics: [
    { label: 'Primary output', value: '3D + Motion', detail: 'Unity, Three.js, and cinematic pipelines' },
    { label: 'Delivery model', value: 'Licensed', detail: 'Assets flow to media and product surfaces' },
    { label: 'Operator', value: 'HBM LLC', detail: 'Governed under holding allocation policy' },
    { label: 'Turnaround', value: 'Sprint', detail: 'Milestone-based production with evidence exports' },
  ],
  capabilities: [
    {
      title: 'Real-time worlds',
      body: 'Interactive environments for product demos, protocol explainers, and institutional briefings — built in Unity and WebGL so delegates can walk the system, not read a PDF.',
      tags: ['Unity', 'Three.js', 'WebGL'],
    },
    {
      title: 'Motion & identity',
      body: 'Title sequences, UI motion systems, and brand films that share one typographic and chromatic language with the holding console — no freelance drift.',
      tags: ['After Effects', 'Cinema 4D', 'Brand film'],
    },
    {
      title: 'Asset library',
      body: 'Meshes, textures, and motion presets catalogued for reuse across hbmandcompany.com, lightra.in surfaces, and partner decks — every export versioned.',
      tags: ['Licensing', 'Version control', 'CDN-ready'],
    },
  ],
  pipeline: [
    { step: 'Brief', detail: 'Charter-aligned creative brief with treasury ticket ID' },
    { step: 'Prototype', detail: 'Greybox or animatic within one sprint' },
    { step: 'Production', detail: 'Full fidelity pass with review gates' },
    { step: 'Handoff', detail: 'Licensed deliverables to ecosystem surfaces' },
  ],
  integration:
    'Revenue from licensed creative flows to Hated By Many LLC treasury. Allocation policy routes production spend and contributor compensation through the same rails as media and infrastructure.',
  externalCta: 'Visit michelangelo.agency',
}

export const kissBrand: PlatformBrand = {
  slug: 'kiss',
  name: 'Kiss',
  domain: 'kiss.photography',
  domainUrl: 'https://kiss.photography',
  code: 'KSS-VIS',
  layer: 'Visual assets · HBM Platform',
  tagline: 'Photography and visual proof — the surface truth layer of the institution.',
  heroBody:
    'Kiss is the visual asset studio of the network: editorial photography, portrait systems, and campaign imagery that documents contributors, products, and places with permanence — not stock filler.',
  metrics: [
    { label: 'Medium', value: 'Photography', detail: 'Editorial, portrait, and product capture' },
    { label: 'Distribution', value: 'Network', detail: 'Feeds media, IR, and accreditation surfaces' },
    { label: 'Rights', value: 'Licensed', detail: 'Usage scoped per charter and surface' },
    { label: 'Archive', value: 'Persistent', detail: 'Attribution-linked visual ledger' },
  ],
  capabilities: [
    {
      title: 'Editorial capture',
      body: 'On-location and studio work for hbmandcompany.com — contributors photographed with the same documentary gravity as the prose beside them.',
      tags: ['Editorial', 'Documentary', 'Portrait'],
    },
    {
      title: 'Product & protocol',
      body: 'Hardware key ceremonies, console walkthroughs, and treasury evidence — imagery that satisfies institutional reviewers who will not accept renders alone.',
      tags: ['Product', 'Compliance', 'Evidence'],
    },
    {
      title: 'Campaign systems',
      body: 'Coordinated visual drops across social and partner channels — one color grade, one crop logic, one attribution footer.',
      tags: ['Campaign', 'Social', 'Brand'],
    },
  ],
  pipeline: [
    { step: 'Scout', detail: 'Location, talent, and rights clearance' },
    { step: 'Shoot', detail: 'Single-day or multi-day capture with DIT on set' },
    { step: 'Grade', detail: 'Institutional color pipeline — obsidian, champagne, pearl' },
    { step: 'Publish', detail: 'CDN delivery with attribution metadata' },
  ],
  integration:
    'Visual assets support media revenue and institutional credibility. Kiss operates as a production cost center under allocation — imagery is inventory, not decoration.',
  externalCta: 'Visit kiss.photography',
}

export const vanityBrand: PlatformBrand = {
  slug: 'vanity',
  name: 'Vanity',
  domain: 'vanity.company',
  domainUrl: 'https://vanity.company',
  code: 'VNT-INT',
  layer: 'Research & intelligence · HBM Platform',
  tagline: 'Analysis without performance — intelligence that survives audit.',
  heroBody:
    'Vanity is the research and system-design layer of Hated By Many. It produces memos, models, and architectural specifications that inform treasury allocation, governance votes, and contributor accreditation — never vanity metrics for a slide deck.',
  metrics: [
    { label: 'Output', value: 'Research', detail: 'Memos, models, and system specs' },
    { label: 'Audience', value: 'Internal', detail: 'Treasury, governance, accreditation' },
    { label: 'Contributors', value: '1099', detail: 'Independent researchers under charter' },
    { label: 'Standard', value: 'Citable', detail: 'Every claim traceable to source' },
  ],
  capabilities: [
    {
      title: 'System design',
      body: 'Architecture documents for lightra.in integrations, media pipelines, and cross-entity data flows — written for engineers and counsel in the same document.',
      tags: ['Architecture', 'APIs', 'Data planes'],
    },
    {
      title: 'Economic modeling',
      body: 'Revenue scenarios, allocation stress tests, and contributor compensation models tied to measurable output — not token speculation.',
      tags: ['Treasury', 'Allocation', 'Modeling'],
    },
    {
      title: 'Intelligence briefs',
      body: 'Sector scans, regulatory horizon notes, and partner diligence packs formatted for investor relations and board review.',
      tags: ['IR', 'Compliance', 'Briefings'],
    },
  ],
  pipeline: [
    { step: 'Question', detail: 'Treasury or governance ticket defines scope' },
    { step: 'Research', detail: 'Primary sources and ecosystem data' },
    { step: 'Draft', detail: 'Internal review with classification' },
    { step: 'Archive', detail: 'Persistent memo in attribution ledger' },
  ],
  integration:
    'Researchers contribute through vanity.company under the 1099 participation model. Findings inform monetary policy, allocation votes, and accreditation — research is operational input, not marketing.',
  externalCta: 'Visit vanity.company',
}

export const platformBrands = {
  michelangelo: michelangeloBrand,
  kiss: kissBrand,
  vanity: vanityBrand,
} as const
