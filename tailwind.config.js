/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Elegant dark luxury palette
        dark: {
          50: '#1a1a2e',
          100: '#16162a',
          200: '#121226',
          300: '#0f0f23',
          400: '#0c0c1f',
          500: '#0a0a1a',
          600: '#080816',
          700: '#060612',
          800: '#04040e',
          900: '#02020a',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#d4af37',
          500: '#c9a227',
          600: '#b8941f',
          700: '#a68518',
          800: '#947711',
          900: '#82680b',
        },
        champagne: {
          50: '#fdfbf7',
          100: '#f7f3eb',
          200: '#efe7d5',
          300: '#e5d7bc',
          400: '#d4c4a8',
          500: '#c4b393',
          600: '#b4a27e',
          700: '#a49169',
          800: '#948054',
          900: '#846f3f',
        },
        ivory: {
          50: '#fffff0',
          100: '#fffef5',
          200: '#fffde8',
          300: '#fffcd4',
          400: '#fffabd',
          500: '#fff8a6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.5)',
        'gold': '0 4px 30px rgba(212, 175, 55, 0.15)',
        'gold-lg': '0 10px 50px rgba(212, 175, 55, 0.25)',
        'elegant': '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4), transparent)',
      },
    },
  },
  plugins: [],
}

