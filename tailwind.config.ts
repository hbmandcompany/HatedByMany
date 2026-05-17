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
        obsidian: '#07080c',
        graphite: '#0f1117',
        pearl: '#f4f1ea',
        mist: '#9aa3b2',
        champagne: '#d4c4a8',
        'accent-rose': '#c45c6a',
        'accent-pine': '#2f6f5e',
        ribbon: 'rgba(196, 92, 106, 0.35)',
        grove: 'rgba(47, 111, 94, 0.35)',
        'belarus-red': '#c41e3a',
        'belarus-green': '#007a3d',
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
        lux: '0 24px 80px rgba(0, 0, 0, 0.45)',
        'lux-inset': 'inset 0 1px 0 rgba(255, 255, 255, 0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease-out both',
        drift: 'drift 18s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-2%, 2%) scale(1.03)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.08) translate(-1%, -1%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
