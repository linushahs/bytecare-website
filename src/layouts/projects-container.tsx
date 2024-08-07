import { projectCategoriesGroq, projectGroq } from "@/sanity/groq";
import { sanityClient } from "@/sanity/lib/client";
import React from "react";
import ProjectsSection from "./projects-section";

async function ProjectsContainer({ withFilters = true }) {
  const [projects, categories] = await Promise.all([
    sanityClient.fetch(projectGroq(), {}, { cache: "no-store" }),
    sanityClient.fetch(projectCategoriesGroq(), {}, { cache: "no-store" }),
  ]);

  return (
    <>
      <ProjectsSection
        initialProjects={projects}
        withFilters={withFilters}
        categories={categories}
      />
    </>
  );
}

export default ProjectsContainer;
