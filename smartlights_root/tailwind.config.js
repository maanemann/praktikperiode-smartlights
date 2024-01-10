/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        slide: 'slide 1s ease-in-out',
        slideReverse: 'slide reverse 1s ease-in-out',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translate(0rem, 0rem)' },
          '100%': { transform: 'translate(0rem, 4rem)' },
        },
      },
    },
  },
  plugins: [],
}
