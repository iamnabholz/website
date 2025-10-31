import { error } from "@sveltejs/kit";

export const load = async ({ params, parent }) => {
  try {
    // Fetch the list of all works (this returns metadata from frontmatter)
    const { posts } = await parent();

    // Find the current post by matching the slug from the URL
    const currentPostIndex = posts.findIndex(
      (post) => post.slug === params.work,
    );

    if (currentPostIndex === -1) {
      throw error(404, `Post "${params.work}" not found`);
    }

    const currentPost = posts[currentPostIndex];

    // Dynamically import the markdown file for this post
    // The markdown file has been compiled into a Svelte component by mdsvex
    const postContent = await import(
      `../../lib/content/work/${currentPost.slug}.md`
    );

    // Calculate previous and next posts for navigation
    const previousPost =
      currentPostIndex > 0 ? posts[currentPostIndex - 1] : null;
    const nextPost =
      currentPostIndex < posts.length - 1 ? posts[currentPostIndex + 1] : null;

    return {
      content: postContent.default,
      meta: currentPost,
      previousPost,
      nextPost,
    };
  } catch (err) {
    console.error("Error in work page load:", err);

    // If it's already a SvelteKit error, just rethrow it
    if (err.status) {
      throw err;
    }

    // Otherwise wrap it in a 500 error
    throw error(500, `Failed to load post: ${err.message}`);
  }
};

export async function entries() {
  const { posts } = await parent();

  return posts.map((post) => ({
    work: post.slug,
  }));
}

export const prerender = true;
