// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css', '~/assets/css/globals.css'],
  alias: {
    '@': './',
  },
  
  ui: {
    modal: {
      overlay: false, // Включить затемнение фона
      closeOnOutsideClick: false, // Запретить закрытие по клику вне модального окна
      animation: 'fade', // Задать анимацию
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxt/eslint',
    'nuxt-link-checker',
    '@nuxt/fonts'
  ],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    }
  }
})