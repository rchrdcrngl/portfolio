"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { ProjectData } from "@/lib/types";

type ProjectsProps = {
  projects: ProjectData[];
}

export default function Projects({ projects }: ProjectsProps) {
  const { ref } = useSectionInView("Projects", 0.1);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project project={project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
