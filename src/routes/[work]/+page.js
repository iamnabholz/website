import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
  try {
    // Step 1: Import all markdown posts
    const allPosts = import.meta.glob('../../lib/content/work/*.md');

    // Convert the glob imports into an array of promises
    const posts = await Promise.all(
      Object.entries(allPosts).map(async ([path, resolver]) => {
        const post = await resolver();
        return {
          path,
          content: post.default,
          meta: post.metadata
        };
      })
    );

    // Step 2: Find the current post
    const currentPostIndex = posts.findIndex(post => post.meta.href === "/" + params.work);

    if (currentPostIndex === -1) {
      throw error(404, 'Post not found');
    }

    // Step 3: Get next and previous posts
    const nextPost = posts[currentPostIndex + 1] || null; // Null if no next post
    const previousPost = posts[currentPostIndex - 1] || null; // Null if no previous post

    return {
      content: posts[currentPostIndex].content,
      meta: posts[currentPostIndex].meta,
      nextPost: nextPost?.meta,
      previousPost: previousPost?.meta
    };
  } catch (err) {
    throw error(404, 'Post not found');
  }
};
