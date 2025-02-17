import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  plugins: [{ src: "~/plugins/jquery.js", mode: "client" }],
  alias: {
    assets: "/<rootDir>/assets/",
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
