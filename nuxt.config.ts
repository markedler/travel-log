export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@nuxt/icon"],
  vite: {
    plugins: [
      // tailwindcss(),
    ],
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
});
