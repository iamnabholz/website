import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  try {
    const response = await fetch("/api/works");

    if (!response.ok) {
      throw error(response.status, "Failed to fetch works list");
    }

    const posts = await response.json();

    const currentPostIndex = posts.findIndex(
      (post) => post.slug === params.work,
    );

    if (currentPostIndex === -1) {
      throw error(404, "Post not found");
    }

    const currentPost = posts[currentPostIndex];

    // Import the markdown file which has been compiled to a Svelte component
    const postContent = await import(
      `../../lib/content/work/${currentPost.slug}.md`
    );

    const meta = posts[currentPostIndex];

    const previousPost =
      currentPostIndex > 0 ? posts[currentPostIndex - 1] : null;
    const nextPost =
      currentPostIndex < posts.length - 1 ? posts[currentPostIndex + 1] : null;

    return {
      content: postContent.default,
      meta,
      previousPost,
      nextPost,
    };
  } catch (err) {
    // If err is already a SvelteKit error object, rethrow it
    if (err.status) {
      throw err;
    }
    // Otherwise, wrap it in a proper error
    throw error(500, `Failed to load post: ${err.message}`);
  }
};

export const prerender = true;
