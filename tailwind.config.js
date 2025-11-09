/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D95B6C',
          dark: '#C54456',
          light: '#E68393',
        },
        secondary: {
          DEFAULT: '#24523A',
          dark: '#1A3D2B',
          light: '#2E6647',
        },
        tertiary: {
          DEFAULT: '#B8A0CB',
          dark: '#9B84C0',
          light: '#D1BEE0',
        },
        sand: {
          DEFAULT: '#F6EEE9',
          dark: '#EFE3DB',
        },
        gold: {
          DEFAULT: '#D4A15A',
          dark: '#C08F48',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulseSoft: {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': { 
            transform: 'scale(1.05)',
            opacity: '0.9',
          },
        },
      },
    },
  },
  plugins: [],
}

