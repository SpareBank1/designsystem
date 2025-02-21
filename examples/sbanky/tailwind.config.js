/** @type {import('tailwindcss').Config} */
import colors from '@sb1/ffe-core/lib/colors.js';
import { greyCharcoalDarkmode } from '@sb1/ffe-core/lib/colors-deprecated.js';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['variant', ['@media (prefers-color-scheme: dark) { body.regard-color-scheme-preference & }']],
  theme: {
    colors: {
      ...colors,
      inherit: 'inherit',
      transparent: 'transparent',
      fargeBeksvart: greyCharcoalDarkmode
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    spacing: {
      0: 0,
      0.5: '0.25rem',    // 4px
      1: '0.5rem',       // 8px
      2: '1rem',         // 16px
      3: '1.5rem',       // 24px
      4: '2rem',         // 32px
      5: '2.5rem',       // 40px
      6: '3rem',         // 48px
      8: '4rem',         // 64px
      10: '5rem',        // 80px
      20: '10rem',       // 160px
      '2xs': '0.25rem',  // 4px
      xs: '0.5rem',      // 8px
      sm: '1rem',        // 16px
      md: '1.5rem',      // 24px
      lg: '2rem',        // 32px
      xl: '2.5rem',      // 40px
      '2xl': '3rem',     // 48px
      '3xl': '4rem',     // 64px
      '4xl': '5rem',     // 80px
      '5xl': '10rem',    // 160px
      '1/2': '50%',
    },
    animation: {
      slide: 'slide 1.8s infinite',
    },
    keyframes: {
      slide: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(100%)' },
      },
    },
    extend: {
      borderRadius: {
        DEFAULT: '8px',
        lg: '32px',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
