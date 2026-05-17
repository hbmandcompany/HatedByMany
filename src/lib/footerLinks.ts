export type FooterLink = { name: string; href: string }

export type FooterColumn = {
  title: string
  links: FooterLink[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Platform',
    links: [
      { name: 'Holding Console', href: '/#platform' },
      { name: 'Atlas · Capital OS', href: '/#products' },
      { name: 'Meridian · Revenue', href: '/#products' },
      { name: 'Nocturne · Creator Mesh', href: '/#products' },
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
      { name: 'Our Story', href: '/our-story' },
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
      { name: 'Learn More', href: '/learn-more' },
      { name: 'Client Downloads', href: '/download' },
      { name: 'Security & Compliance', href: '/#security' },
      { name: 'Integrations', href: '/#integrations' },
      { name: 'Pricing', href: '/#pricing' },
    ],
  },
  {
    title: 'Chapters',
    links: [
      { name: 'Chapter I · The Gospel', href: '/#chapter-i' },
      { name: 'Chapter II · Our Services', href: '/#chapter-ii' },
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
