import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: [
    'primevue/resources/themes/lara-dark-teal/theme.css',
    'primeicons/primeicons.css',
    '@/assets/main.css'
  ],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue'],
  primevue: {
    components: {
      include: ['Button', 'Menubar', 'Checkbox']
    }
  },
})
