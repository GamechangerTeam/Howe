// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/image",
    "@nuxt/icon",
    "nuxt-swiper",
    "@pinia/nuxt",
    "@vueuse/nuxt"
  ],
  devtools: { enabled: false },
  compatibilityDate: "2024-12-19",
  css: ["~/assets/css/tailwind.css", "~/assets/css/globals.css"],
  typescript: {
    typeCheck: true
  }
});