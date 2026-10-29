/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#087FE5',
          cyan: '#20C7E8',
          navy: '#082B52',
          paleBlue: '#EAF6FD',
          surface: '#F4F9FC',
          border: '#DDEAF3',
          textMain: '#102747',
          textMuted: '#667C96',
          electric: '#087FE5',
          ocean: '#082B52',
          midnight: '#041B35',
          dark: '#031427',
          silver: '#DDEAF3',
          lightgray: '#F4F9FC',
          cyanGlow: 'rgba(32, 199, 232, 0.25)',
          blueGlow: 'rgba(8, 127, 229, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(32, 199, 232, 0.35)',
        'glow-blue': '0 0 30px -5px rgba(8, 127, 229, 0.35)',
        'mega-menu': '0 25px 60px -15px rgba(8, 43, 82, 0.16), 0 10px 25px -5px rgba(8, 43, 82, 0.08)',
        'card-subtle': '0 4px 20px -2px rgba(8, 43, 82, 0.05), 0 2px 6px -1px rgba(8, 43, 82, 0.03)',
        'card-hover': '0 12px 30px -5px rgba(8, 127, 229, 0.15), 0 4px 10px -2px rgba(8, 43, 82, 0.06)',
      }
    },
  },
  plugins: [],
};
