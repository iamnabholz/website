// @ts-check
import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import sitemap from "@astrojs/sitemap";

import { unwrapImages, readingTime } from "./src/lib/mdast-plugins";

// https://astro.build/config
export default defineConfig({
  site: "https://nabholz.work",
  trailingSlash: "never",

  markdown: {
    processor: satteri({
      mdastPlugins: [unwrapImages, readingTime],
    }),
  },

  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return !["/404", "/404/", "/404.html"].includes(pathname);
      },
    }),
  ],
});
