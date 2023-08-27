const { color } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation : {
        "animateNav" : "color linear 0.15s"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        background: "var(--background-body)","text-primary": "var(--text-main)",
        "text-secondary": "var(--text-secondary)","d-background": "var(--dark-background-body)",
        "d-text-primary": "var(--dark-text-main)",
        "d-text-secondary": "var(--dark-text-secondary)",
        "primary" : "var(--primary-color)",
        "gray" : color.gray
      },
      screens: {
        "max-w-2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "max-w-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "max-w-lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "max-w-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "max-w-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
