import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/data/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#111418',
        charcoalMid: '#1c2128',
        gold: '#ffd700',
        goldDark: '#ccac00',
        platinum: '#e8e8e8',
        muted: '#6b7280'
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        gold: '0 0 0 2px #ffd700, 0 10px 40px -10px rgba(255, 215, 0, 0.45)'
      }
    }
  },
  plugins: []
};

export default config;
