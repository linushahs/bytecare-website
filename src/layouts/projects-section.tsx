"use client";

import { useEffect, useState } from "react";
import Button from "../components/ui/button";
import ProjectsCard from "../components/projects-card";
import { sanityClient } from "@/sanity/lib/client";
import { projectGroq } from "@/sanity/groq";

function ProjectsSection() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    sanityClient.fetch(projectGroq()).then(async (res) => {
      setProjects(res);
    });
  }, []);

  console.log(projects);

  const [selectedCategory, setSelectedCategory] = useState("all projects");

  return (
    <div className="flex flex-col w-full items-center gap-16">
      {/* projects categories button =============================== */}
      <div className="flex gap-8 mb-10 w-full flex-wrap justify-center sm:flex-nowrap">
        {["all projects", "mobile app", "web development"].map((category) => (
          <Button
            key={category}
            variant={category === selectedCategory ? "default" : "outline"}
            color={category === selectedCategory ? "primary" : "fill"}
            onClick={() => setSelectedCategory(category)}
            className="py-3 rounded-full capitalize "
          >
            {category}
          </Button>
        ))}
      </div>

      {projects.map((project) => (
        <ProjectsCard
          key={project._id}
          thumbnail={project.thumbnail}
          title={project.title}
          tags={project.tags}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default ProjectsSection;
