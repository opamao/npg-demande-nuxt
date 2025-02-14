import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  plugins: [{ src: "~/plugins/jquery.js", mode: "client" }],
  app: {
    head: {
      script: [
        {
          src: "https://code.jquery.com/jquery-3.7.1.min.js",
          type: "text/javascript",
        },
        {
          src: "https://cdn.datatables.net/2.2.2/js/jquery.dataTables.min.js",
          type: "text/javascript",
        },
        {
          src: "https://cdn.datatables.net/2.2.2/js/dataTables.tailwindcss.js",
          type: "text/javascript",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.datatables.net/2.2.2/css/dataTables.tailwindcss.min.css",
        },
      ],
    },
  },
  alias: {
    assets: "/<rootDir>/assets/",
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
