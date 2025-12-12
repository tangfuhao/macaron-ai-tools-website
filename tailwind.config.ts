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
        // Macaron color palette
        macaron: {
          pink: '#FFB6C1',
          rose: '#FFD1DC',
          peach: '#FFDAB9',
          mint: '#98FB98',
          sage: '#B2D8B2',
          lavender: '#E6E6FA',
          lilac: '#DDA0DD',
          sky: '#87CEEB',
          cream: '#FFFDD0',
          lemon: '#FFFACD',
          coral: '#F88379',
          blush: '#DE5D83',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'macaron-gradient': 'linear-gradient(135deg, #FFB6C1 0%, #E6E6FA 50%, #98FB98 100%)',
        'macaron-gradient-2': 'linear-gradient(135deg, #DDA0DD 0%, #87CEEB 50%, #FFDAB9 100%)',
      },
    },
  },
  plugins: [],
}
export default config

