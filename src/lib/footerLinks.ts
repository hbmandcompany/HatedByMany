export type FooterLink = { name: string; href: string }

export type FooterColumn = {
  title: string
  links: FooterLink[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Platform',
    links: [
      { name: 'Accreditation', href: '/accreditation' },
      { name: 'Gifting · USDC', href: 'https://threewisemen.cc' },
      { name: 'NFT Levels', href: '/#products' },
      { name: 'Network · Protocol', href: '/whitepaper' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Network Topology', href: '/network' },
      { name: 'Collections', href: '/collections' },
      { name: 'Non-Custodial Wallet', href: '/wallet' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Thesis', href: '/thesis' },
      { name: 'Partners', href: '/partners' },
      { name: 'Awards', href: '/awards' },
      { name: 'Careers', href: '/careers' },
      { name: 'News', href: '/news' },
      { name: 'Craftsmanship', href: '/craftsmanship' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Whitepaper', href: '/whitepaper' },
      { name: 'University', href: '/learn-more' },
      { name: 'Investor Relations', href: '/investor-relations' },
      { name: 'Documentation', href: '/documentation' },
      { name: 'Security & Compliance', href: '/#security' },
      { name: 'Economy', href: '/economy' },
      { name: 'Allocation', href: '/allocation' },
    ],
  },
  {
    title: 'Chapters',
    links: [
      { name: 'Chapter I · Monetary Policy', href: '/monetary-policy' },
      { name: 'Chapter II · Governance', href: '/governance' },
      { name: 'Chapter III · The Covenant', href: '/#chapter-iii' },
    ],
  },
  {
    title: 'Support & Legal',
    links: [
      { name: 'Customer Service', href: '/customer-service' },
      { name: 'Legal & Disclosures', href: '/legal' },
      { name: 'Console Login', href: '/login' },
      { name: 'Request Briefing', href: '/learn-more' },
      { name: 'Status · All Systems', href: '/network' },
    ],
  },
]

export const footerUtilityLinks: FooterLink[] = [
  { name: 'Privacy', href: '/legal' },
  { name: 'Terms', href: '/legal' },
  { name: 'DPA', href: '/legal' },
  { name: 'SOC 2', href: '/#security' },
  { name: 'GitHub', href: 'https://github.com/hbmandcompany/HatedByMany' },
]
