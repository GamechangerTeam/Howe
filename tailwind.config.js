/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#C41E40',
        'primary-blue': '#1E37C4',
        'primary-white': '#F5F5F5',
        'primary-black-100': '#00000057',
      },
      backgroundImage: {
        // Градиенты определяются через backgroundImage
        'primary-blue-gradient':
          'radial-gradient(100.51% 124.04% at 50% 4.99%, #1E37C4 0%, #6F85FF 100%)',
        'primary-black-gradient':
          'radial-gradient(199.04% 232.03% at 50% 254.69%, rgba(102, 102, 102, 0.4) 0%, #000000 100%)',
        'primary-white-gradient':
          'radial-gradient(202% 298.26% at -21.7% 35.45%, rgba(255, 255, 255, 0.5) 0%, rgba(102, 102, 102, 0.5) 100%)',
      },
      maxWidth: {
        pc: '1440px',
        laptop: '1024px',
        tabletBig: '960px',
        tablet: '768px',
        tabletMin: '600px',
        mobileBit: '525px',
        mobile: '430px',
        mobileMid: '375px',
        mobileMin: '350px',
      },
      screens: {
        pc: '1441px',
        laptop: '1025px',
        "tablet-big": '961px',
        tablet: '769px',
        "tablet-min": '601px',
        "mobile-big": '526px',
        mobile: '431px',
        "mobile-mid": '376px',
        "mobile-min": '351px',
      },
    },
  },
  plugins: [],
};
