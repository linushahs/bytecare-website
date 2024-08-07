"use client";

import { Category, Project } from "@/sanity/groq/interface";
import { useEffect, useState } from "react";
import ProjectsCard from "../components/projects-card";
import Button from "../components/ui/button";
import { filterProjects } from "@/sanity/service";

interface ProjectsSectionProps {
  initialProjects: Project[];
  withFilters?: boolean;
  categories: Category[];
}

function ProjectsSection({
  initialProjects,
  withFilters,
  categories,
}: ProjectsSectionProps) {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedCategory, setSelectedCategory] = useState("1");

  useEffect(() => {
    const fetchprojects = async () => {
      if (selectedCategory === "1") {
        setProjects(initialProjects);
        return;
      }

      const res = await filterProjects(selectedCategory);
      setProjects(res);
    };

    fetchprojects();
  }, [selectedCategory]);

  const handleFilterChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  console.log(projects);

  return (
    <div className="flex flex-col w-full items-center gap-16">
      {/* projects categories button =============================== */}
      {withFilters && (
        <div className="flex gap-8 mb-10 w-full flex-wrap justify-center sm:flex-nowrap">
          {[{ _id: "1", title: "all projects" }]
            .concat(categories)
            .map((category) => (
              <Button
                key={category._id}
                variant={
                  category._id === selectedCategory ? "default" : "outline"
                }
                color={category._id === selectedCategory ? "primary" : "fill"}
                onClick={() => handleFilterChange(category._id)}
                className="py-3 rounded-full capitalize "
              >
                {category.title}
              </Button>
            ))}
        </div>
      )}

      {projects.map((project) => (
        <ProjectsCard
          key={project._id}
          thumbnail={project.thumbnail}
          title={project.title}
          tags={project.categories.map((category) => category.title)}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default ProjectsSection;
