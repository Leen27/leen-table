// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "primevue/resources/themes/lara-dark-teal/theme.css",
    "primeicons/primeicons.css",
    "@/assets/main.css",
  ],
  modules: ['nuxt-primevue', '@nuxtjs/tailwindcss'],
  primevue: {
    components: {
      include: ['Button', 'DataTable']
    }
  },
  tailwindcss: {
    // Options
  }
})