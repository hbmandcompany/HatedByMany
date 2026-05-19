export type FooterLink = { name: string; href: string }

export type FooterColumn = {
  title: string
  links: FooterLink[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Platform',
    links: [
      { name: 'Three Wise Men', href: '/three-wise-men' },
      { name: 'Economy', href: '/economy' },
      { name: 'Allocation', href: '/allocation' },
      { name: 'Network · Protocol', href: '/whitepaper' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Treasury', href: '/wallet' },
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
      { name: 'Accreditation', href: '/accreditation' },
      { name: 'Security & Compliance', href: '/security-compliance' },
    ],
  },
  {
    title: 'Chapters',
    links: [
      { name: 'Chapter I · Monetary Policy', href: '/monetary-policy' },
      { name: 'Chapter II · Governance', href: '/governance' },
      { name: 'Chapter III · The Covenant', href: '/chapter-iii' },
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
  { name: 'SOC 2', href: '/security-compliance' },
  { name: 'GitHub', href: 'https://github.com/hbmandcompany/HatedByMany' },
]
