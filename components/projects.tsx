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
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 w-full">
      <h1 className="mb-4 md:mb-8 text-5xl font-bold font-clash uppercase text-center">Projects</h1>
      <div className="relative w-full px-0 md:px-24 md:gap-12 flex flex-col md:flex-row">
        <div className="w-full">
          {projects.map((project, index) => (
            (index+1)%2==1 ?
            <React.Fragment key={index}>
              <Project project={project} />
              <ProjectSpace />
            </React.Fragment>
            :<></>
          ))}
        </div>
        <div className="w-full">
          {projects.map((project, index) => (
            (index+1)%2==0 ?
            <React.Fragment key={index}>
              <ProjectSpace />
              <Project project={project} />
            </React.Fragment>
            :<></>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectSpace(){
  return(
    <div className="h-0 md:h-32"></div>
  );
}
