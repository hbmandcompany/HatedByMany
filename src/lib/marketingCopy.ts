export type MarketingSection = {
  heading: string
  paragraphs: string[]
}

export type MarketingPageContent = {
  eyebrow: string
  title: string
  description: string
  sections: MarketingSection[]
}

const pages: Record<string, MarketingPageContent> = {
  'about-us': {
    eyebrow: 'Company',
    title: 'About HBM Holdings',
    description:
      'We compose long-horizon software companies beneath one disciplined operating system — architecture first, narrative second, capital aligned.',
    sections: [
      {
        heading: 'A holding company, not a headline',
        paragraphs: [
          'Hated By Many Holdings underwrites product studios, infrastructure layers, and regulated-facing tooling as a single portfolio. Each venture keeps its craft intact while sharing security baselines, design language, and capital discipline.',
          'Our bias is toward calm systems: fewer dashboards, deeper governance, and software that still reads beautifully years after launch.',
        ],
      },
      {
        heading: 'How we work with leadership teams',
        paragraphs: [
          'We partner with founders who treat software as a fiduciary surface — where latency, clarity, and auditability matter as much as feature velocity.',
          'Engagements are structured as platform build-outs, minority platform investments, or full carve-outs when a vertical deserves its own charter.',
        ],
      },
    ],
  },
  'our-story': {
    eyebrow: 'Narrative',
    title: 'Our story',
    description:
      'Built in public silence — a group that chose inconvenient quality over loud growth, then scaled the same ethos across holding structures.',
    sections: [
      {
        heading: 'Origins',
        paragraphs: [
          'HBM began where most enterprises stop: naming the tension between speed and stewardship. The first products were routing, custody-adjacent workflows, and publishing rails for creators who refused to rent their audience.',
          'What survives is not a slogan but a habit — document protocols, reduce UI noise, and ship rounded, tactile interfaces that signal permanence.',
        ],
      },
      {
        heading: 'Today',
        paragraphs: [
          'We operate as a luxury software holding group with studios across capital infrastructure, enterprise automation, and networked publishing.',
          'If the work attracts scrutiny, we lean in. Excellence is rarely comfortable — and we build for teams who accept that contract.',
        ],
      },
    ],
  },
  partners: {
    eyebrow: 'Ecosystem',
    title: 'Partners',
    description:
      'Institutional partners, co-builders, and regional alliances vetted for compliance posture and product integrity.',
    sections: [
      {
        heading: 'Alliance model',
        paragraphs: [
          'Partners access reference architectures for onboarding, treasury firewalls, and cross-border disclosure. We prioritize banks, qualified custodians, and boutique integrators who match our documentation standards.',
          'Creative partnerships extend to ateliers, typographers, and acoustic researchers — craft is a supply chain, not an afterthought.',
        ],
      },
    ],
  },
  awards: {
    eyebrow: 'Recognition',
    title: 'Awards & citations',
    description:
      'Select recognition across design systems, reliability engineering, and responsible automation.',
    sections: [
      {
        heading: 'Recent recognition',
        paragraphs: [
          'European Design Assembly — Systems Craft, finalist (2024).',
          'Global Fintech Integrity Prize — Disclosure UX, honorable mention (2023).',
          'Private: additional citations available under NDA for allocator reviews.',
        ],
      },
    ],
  },
  careers: {
    eyebrow: 'People',
    title: 'Careers',
    description:
      'Roles for principal engineers, editorial technologists, and capital markets builders who prefer depth to hype.',
    sections: [
      {
        heading: 'Working at HBM',
        paragraphs: [
          'We maintain small teams with expansive mandates. Expect long research windows, paired writing, and design critiques that reference physical materials as often as components.',
          'Remote-first with quarterly ateliers in Warsaw, Kyiv corridor studios, and New York closing sessions.',
        ],
      },
      {
        heading: 'Open vectors',
        paragraphs: [
          'Platform security engineer — zero-trust admin surfaces.',
          'Product counsel — disclosure templates & jurisdictional nuance.',
          'Typographic systems designer — cross-product glyph harmonization.',
        ],
      },
    ],
  },
  'learn-more': {
    eyebrow: 'Overview',
    title: 'Learn more',
    description:
      'Orientation brief for allocators, product leaders, and technical diligence teams reviewing the HBM portfolio.',
    sections: [
      {
        heading: 'Diligence kit',
        paragraphs: [
          'Request the portfolio deck, architecture appendix, and customer reference roster via the console. We respond to chartered introductions first.',
          'For regulated buyers, we provide change-management playbooks and API boundary diagrams without vanity metrics.',
        ],
      },
    ],
  },
  collections: {
    eyebrow: 'Product lines',
    title: 'Collections',
    description:
      'Curated product suites — each collection is a namespace of rounded modules, shared tokens, and enterprise SSO.',
    sections: [
      {
        heading: 'Atlas / Meridian / Nocturne',
        paragraphs: [
          'Atlas governs capital operations and signer workflows. Meridian covers editorial revenue and membership graph analytics. Nocturne hosts creator-owned distribution with non-custodial wallets.',
          'Collections interoperate through the HBM mesh — unified telemetry, shared design language, independent data residency.',
        ],
      },
    ],
  },
  solutions: {
    eyebrow: 'Enterprises',
    title: 'Solutions',
    description:
      'Vertical solutions for institutions that require luxury-grade interfaces without sacrificing audit depth.',
    sections: [
      {
        heading: 'Where we embed',
        paragraphs: [
          'Private banking client portals, allocator reporting, studio operations for luxury manufacturers, and creator economies with hybrid on-chain settlement.',
          'Deliverables include interface systems, policy-as-code templates, and runbooks that survive CFO review.',
        ],
      },
    ],
  },
  'customer-service': {
    eyebrow: 'Support',
    title: 'Customer service',
    description:
      'Concierge support for portfolio customers — human-first, instrumented second.',
    sections: [
      {
        heading: 'Contact channels',
        paragraphs: [
          'Priority inbox: support@hbmholdings.example — SLA tiers depend on collection subscription.',
          'For incidents, open a sealed channel in the console; on-call engineers rotate weekly across time zones.',
        ],
      },
    ],
  },
  wallet: {
    eyebrow: 'Treasury',
    title: 'Non-custodial wallet',
    description:
      'User-owned keys, institutional-grade recovery flows, and mesh connectivity to HBM rails.',
    sections: [
      {
        heading: 'Principles',
        paragraphs: [
          'Keys never touch HBM servers. We provide UX, policy, and signer orchestration — not custody.',
          'Hardware route guidance, social recovery blueprints, and jurisdictional disclaimers ship with every build.',
        ],
      },
    ],
  },
  legal: {
    eyebrow: 'Compliance',
    title: 'Legal',
    description:
      'Disclosures, jurisdictional notes, and policy artifacts for the HBM holding structure.',
    sections: [
      {
        heading: 'Documents',
        paragraphs: [
          'Master services agreement, data processing addendum, and responsible AI usage statement available upon request.',
          'Nothing on this site constitutes investment advice; offerings vary by region and accredited status.',
        ],
      },
    ],
  },
  news: {
    eyebrow: 'Journal',
    title: 'News',
    description:
      'Official updates from HBM Holdings — launches, alliances, and studio milestones.',
    sections: [
      {
        heading: 'Latest',
        paragraphs: [
          'Q2 — Meridian 3.2 ships rounded analytics decks for membership operators.',
          'Q1 — Atlas adds jurisdictional approval routing for multi-entity signers.',
        ],
      },
    ],
  },
  network: {
    eyebrow: 'Infrastructure',
    title: 'Network',
    description:
      'Topology of nodes, attestations, and partner interconnects across the HBM stack.',
    sections: [
      {
        heading: 'Mesh overview',
        paragraphs: [
          'Regions are logically isolated; traffic moves across encrypted spokes with optional on-prem brokered gateways.',
          'Observability is contract-tested — every release carries SLO proofs in the changelog.',
        ],
      },
    ],
  },
  whitepaper: {
    eyebrow: 'Deep read',
    title: 'Whitepaper',
    description:
      'Tokenized incentive design, treasury loops, and governance levers for the HBM ecosystem.',
    sections: [
      {
        heading: 'Abstract',
        paragraphs: [
          'The HBM paper outlines a capital-efficient loop between creator revenue, protocol services, and long-duration R&D funded by the holding company.',
          'Mechanics emphasize transparency, bounded emissions, and utility rooted in enterprise subscriptions rather than speculation.',
        ],
      },
      {
        heading: 'Request the PDF',
        paragraphs: [
          'Download is available to qualified participants via the console. Include entity name, registration, and intended use case.',
        ],
      },
    ],
  },
  download: {
    eyebrow: 'Clients',
    title: 'Download',
    description:
      'Desktop and mobile clients for secure access to HBM collections.',
    sections: [
      {
        heading: 'Availability',
        paragraphs: [
          'macOS universal binary, Windows signed installer, and iOS TestFlight for approved organizations.',
          'Android companion enters limited preview after hardening of biometric signer flows.',
        ],
      },
    ],
  },
  craftsmanship: {
    eyebrow: 'Practice',
    title: 'Craftsmanship',
    description:
      'How HBM treats software like bench-made goods — grain, tolerance, and finish.',
    sections: [
      {
        heading: 'Material thinking',
        paragraphs: [
          'We prototype in high-fidelity motion before engineering spikes. Rounded geometry is structural — it signals continuity between product and brand.',
          'Accessibility and performance budgets are identical to visual polish; a slow interface is considered broken.',
        ],
      },
    ],
  },
}

export const marketingSlugs = Object.keys(pages)

export function getMarketingPage(
  slug: string,
): MarketingPageContent | undefined {
  return pages[slug]
}
