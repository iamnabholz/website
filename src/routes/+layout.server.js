export const prerender = true;
export const ssr = false;
export const trailingSlash = "always";

export const load = async ({ fetch, url }) => {
  const { pathname } = url;

  const [projectsResponse, postsResponse] = await Promise.all([
    fetch("/api/projects"),
    fetch("/api/works"),
  ]);

  const projects = await projectsResponse.json();
  const posts = await postsResponse.json();

  const sortedProjects = projects.sort((a, b) => {
    const aHasOrder = a.order !== undefined;
    const bHasOrder = b.order !== undefined;

    if (aHasOrder && bHasOrder) {
      return a.order - b.order;
    }

    if (aHasOrder && !bHasOrder) return -1;
    if (!aHasOrder && bHasOrder) return 1;

    if (a.current && !b.current) return -1;
    if (!a.current && b.current) return 1;

    return 0;
  });

  return {
    posts,
    projects: sortedProjects,
    pathname,
  };
};
