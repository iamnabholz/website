import { defineMdastPlugin } from "satteri";

export const unwrapImages = defineMdastPlugin({
  name: "unwrap-images",

  paragraph(node) {
    const child = node.children[0];

    if (node.children.length === 1 && child?.type === "image") {
      return {
        ...node,
        data: {
          ...node.data,
          hName: "figure",
        },
      };
    }
  },
});

export function readingTime() {
  let words = 0;

  function countWords(text: string) {
    return text.match(/\S+/g)?.length ?? 0;
  }

  return defineMdastPlugin({
    name: "reading-time",

    text(node) {
      words += countWords(node.value);
    },

    inlineCode(node) {
      words += countWords(node.value);
    },

    after(_root, ctx) {
      const astro = ctx.data.astro as
        { frontmatter: Record<string, unknown> } | undefined;

      if (!astro) return;

      astro.frontmatter.readingMinutes = Math.max(1, Math.ceil(words / 200));
    },
  });
}
