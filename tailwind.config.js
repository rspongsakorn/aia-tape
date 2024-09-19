/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      mb: { max: '767px' },
      // => @media ( max-width: 767px) { ... }

      tl: { min: '768px', max: '1127px' },
      // => @media (min-width: 768px and max-width: 1127px) { ... }

      dt: { min: '1128px' },
      // => @media (min-width: 1128px) { ... }
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
}
