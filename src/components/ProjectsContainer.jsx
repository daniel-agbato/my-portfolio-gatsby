import * as React from "react";

import ProjectCard from "./ProjectCard";

function ProjectsContainer({ projects }) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
      {projects.map(({ node: project }) => {
        const id = project.id;

        return <ProjectCard key={id} project={project} />;
      })}
    </div>
  );
}

export default ProjectsContainer;
