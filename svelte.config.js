import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import rehypeUnwrapImages from "rehype-unwrap-images";

export default {
  kit: {
    adapter: adapter(),
  },
  extensions: [".svelte", ".md"],
  preprocess: [
    mdsvex({
      rehypePlugins: [rehypeUnwrapImages],
      extensions: [".md"],
    }),
  ],
};
