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
      { name: 'Michelangelo', href: '/michelangelo' },
      { name: 'Kiss', href: '/kiss' },
      { name: 'Vanity', href: '/vanity' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Thesis', href: '/thesis' },
      { name: 'Careers', href: '/careers' },
      { name: 'News', href: '/news' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Whitepaper', href: '/whitepaper' },
      { name: 'University', href: '/learn-more' },
      { name: 'Investor Relations', href: '/investor-relations' },
      { name: 'Documentation', href: '/documentation' },
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
    ],
  },
]

export const footerUtilityLinks: FooterLink[] = [
  { name: 'Privacy', href: '/legal' },
  { name: 'Terms', href: '/legal' },
  { name: 'DPA', href: '/legal' },
  { name: 'SOC 2', href: '/legal' },
  { name: 'GitHub', href: 'https://github.com/hbmandcompany/HatedByMany' },
]
