import { error } from "@sveltejs/kit";

export const load = async ({ params, fetch }) => {
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

    const previousPost = posts[currentPostIndex - 1] || null;
    const nextPost = posts[currentPostIndex + 1] || null;

    return {
      content: postContent.default,
      meta: posts[currentPostIndex],
      previousPost: previousPost || null,
      nextPost: nextPost || null,
    };
  } catch (err) {
    throw error(404, err);
  }
};

export const prerender = true;
