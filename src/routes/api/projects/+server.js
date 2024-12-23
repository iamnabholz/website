import { json } from "@sveltejs/kit";
import projectsData from "$lib/content/projects.json";

export const prerender = true;

export function GET() {
  // Filter projects where visible is true
  const visibleProjects = projectsData.filter(
    (project) => project.visible === true,
  );
  return json(visibleProjects);
}
