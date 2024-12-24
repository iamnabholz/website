export const load = async ({ fetch }) => {
  const response = await fetch("/api/works");
  const posts = await response.json();

  return { posts };
};

export const prerender = true;
