// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: [
    "@/assets/main.css", 
    "primevue/resources/themes/lara-dark-teal/theme.css",
    "primeicons/primeicons.css",
  ],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue'],
  primevue: {
    components: {
      include: ['Button', 'DataTable']
    }
  },
  tailwindcss: {
    // Options
  },
})