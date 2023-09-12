import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-accent-primary ': '#1db954',
        'color-background-primary': '#000',
        'color-background-base-primary': '#121212',
        'color-box-primary': '#181818',
        'color-hover-primary': '#535353',
        'color-active-primary': '#b3b3b3',
        'color-card-primary': '#FFFFFF14',
        'color-text-primary': '#fff',
        'color-text-secondary': '#b3b3b3',
      },
      gridTemplateAreas: {
        mobile: [],
        tablet: [],
        destop: ['left-sidebar main', 'now-playing-bar now-playing-bar'],
      },
      gridTemplateColumns: {
        layout: 'auto 1fr',
      },
      gridTemplateRows: {
        layout: '1fr auto',
      },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
  variants: {
    gridTemplateAreas: ['responsive'],
  },
}
export default config
