import projectsData from "$lib/projects.json";

export const load = async () => {
  // Filter projects where visible is true
  const projects = projectsData.filter((project) => project.visible === true);

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
    projects: sortedProjects,
  };
};

export const prerender = true;
export const ssr = false;
export const trailingSlash = "always";
