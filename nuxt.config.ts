// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/eslint", "nuxt-studio"],
  studio: {
    dev: false,
    repository: {
      provider: "github",
      owner: "dollarplanet",
      repo: "nuxt-app",
      branch: "master",
    },
    auth: {
      google: {},
    },
  },
});
