// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "default" },
    head: {
      title: "Weather Forecast",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-meilisearch",
  ],
  tailwindcss: { exposeConfig: true },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  meilisearch: {
    hostUrl: "https://meilisearch-truongne.koyeb.app/",
    searchApiKey: "CHOPPER_LOVE_MEILISEARCH",
    instantSearch: true,
  },
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.PUBLIC_API,
    },
  },
  ssr: false,
});
