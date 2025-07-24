/** @type {import('tailwindcss').Config} */
import colors from '@sb1/ffe-core/lib/colors.js';
import ffeSemanticColors from '@sb1/ffe-core/lib/semanticColorsTailwind.js';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['variant', ['@media (prefers-color-scheme: dark) { body.regard-color-scheme-preference & }']],
  theme: {
    colors: {
      ...colors,
      ...ffeSemanticColors,
      inherit: 'inherit',
      transparent: 'transparent',
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
      textShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.2)',
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.3)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-lg': {
          textShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }
      addUtilities(newUtilities)
    },
  ],
  corePlugins: {
    preflight: false,
  },
}
