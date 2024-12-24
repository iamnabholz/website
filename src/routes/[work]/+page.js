import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  try {
    const response = await fetch("api/posts");
    const posts = await response.json();

    const currentPostIndex = posts.findIndex(
      (post) => post.slug === params.work,
    );

    if (currentPostIndex === -1) {
      return error(404, "Post not found");
    }

    const currentPost = posts[currentPostIndex];
    const postContent = await import(
      `../../lib/content/work/${currentPost.slug}.md`
    );
    const content = postContent.default;
    const meta = posts[currentPostIndex];

    const previousPost = posts[currentPostIndex - 1] || null;
    const nextPost = posts[currentPostIndex + 1] || null;

    return {
      content,
      meta,
      previousPost,
      nextPost,
    };
  } catch (err) {
    throw error(404, err);
  }
};

export const prerender = true;
