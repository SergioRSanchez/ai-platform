/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: 'var(--font-sans)'
      },
      colors: {
        'gray-1': '#F8FAFC',
        'gray-2': '#E2E8F0',
        'gray-3': '#94A3B8',
        'gray-4': '#334155',
        'gray-5': '#1E293B',
        'gray-6': '#0F172A',
        'gray-7': '#020617',
      }
    },
  },
  plugins: [],
}
