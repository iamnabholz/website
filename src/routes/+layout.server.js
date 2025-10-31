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

  // Sort projects with a three-tier priority system
  const sortedProjects = projects.sort((a, b) => {
    // Second priority: items with an "order" property come next
    // If both have order numbers, sort by those numbers (ascending)
    const aHasOrder = a.order !== undefined;
    const bHasOrder = b.order !== undefined;

    if (aHasOrder && bHasOrder) {
      return a.order - b.order;
    }

    // If only one has an order, that one comes first
    if (aHasOrder && !bHasOrder) return -1;
    if (!aHasOrder && bHasOrder) return 1;

    // First priority: items marked as "current" float to the top
    // If 'a' is current and 'b' is not, 'a' comes first (return -1)
    if (a.current && !b.current) return -1;
    if (!a.current && b.current) return 1;

    // Third priority: everything else maintains its original position
    return 0;
  });

  return {
    posts,
    projects: sortedProjects,
    pathname,
  };
};
