/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Roboto'],
      },
      colors: {
        fontText: '#7A6960',
        bgColor: '#FFFAF8',
        iconColor: '#FEF2ED',
      },
      screens: {
        navbar: '1126px',
        navbarfont: '996px',
        navbarhidden: '819px',
        content2: '940px',
        ResponsiveSM: '400px',
        sm2: '445',
      },
      boxShadow: {
        boxContact: '0px 0px 20px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(-3%)' },
          '50%': { transform: 'none' },
        },
        scaleLogo: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        updown: 'updown 3s ease-in-out infinite',
        scaleLogo: 'scaleLogo 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
