import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#040406',
        graphite: '#0a090c',
        parchment: '#a89f92',
        frost: '#c4bcb0',
        pearl: '#7a746c',
        mist: '#4a464f',
        champagne: '#6b6256',
        stone: '#2a272e',
        'accent-rose': '#8b4550',
        'accent-pine': '#3d5c52',
        ribbon: 'rgba(139, 69, 80, 0.25)',
        grove: 'rgba(61, 92, 82, 0.25)',
        'belarus-red': '#8b1a2d',
        'belarus-green': '#1f5c42',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        lux: '0 24px 80px rgba(0, 0, 0, 0.65)',
        'lux-inset': 'inset 0 1px 0 rgba(168, 159, 146, 0.04)',
      },
    },
  },
  plugins: [],
}

export default config
