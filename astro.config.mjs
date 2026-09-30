// @ts-check
import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";

import { unwrapImages, readingTime } from "./src/lib/mdast-plugins";

// https://astro.build/config
export default defineConfig({
  site: "https://nabholz.work",
  markdown: {
    processor: satteri({
      mdastPlugins: [unwrapImages, readingTime],
    }),
  },
});
