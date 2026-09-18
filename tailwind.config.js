/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFFAF5',
        rosy: {
          50: '#FDF2F8',
          100: '#FCE7F3',
          500: '#FB7185',
          600: '#F43F5E',
          700: '#E11D48',
        },
        gold: '#F59E0B',
        slate: '#1E293B',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'heart-beat': {
          '0%, 100%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.25)' },
          '30%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.15)' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'heart-beat': 'heart-beat 1.6s ease-in-out infinite',
        'float-soft': 'float-soft 6s ease-in-out infinite',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(225, 29, 72, 0.12)',
        lift: '0 20px 45px -15px rgba(225, 29, 72, 0.22)',
      },
    },
  },
  plugins: [],
};
