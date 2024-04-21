// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss", "@nuxt/image"],
  i18n: {
    baseUrl: "https://qingque.me",
    strategy: "prefix",
    defaultLocale: "fr",

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    locales: [
      { code: "fr", iso: "fr-FR", file: "locales/fr-FR.js" },
      { code: "en", iso: "en-US", file: "locales/en-US.js" },
    ],
  },
  app: {
    head: {
      title: "Qingque.me",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
