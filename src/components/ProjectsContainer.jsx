import * as React from "react";

import ProjectCard from "./ProjectCard";

function ProjectsContainer({ projects, filterVal }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.length < 1 ? (
        <p>No {filterVal} projects to show yet...</p>
      ) : (
        projects.reverse().map(({ node: project }) => {
          const id = project.id;
          return <ProjectCard key={id} project={project} />;
        })
      )}
    </div>
  );
}

export default ProjectsContainer;
