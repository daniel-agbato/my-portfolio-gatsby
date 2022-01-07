import * as React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

function ProjectCard({ project }) {
  const img = getImage(project.image);
  const title = project.title;
  const desc = project.description;
  const stack = project.stack;
  const url = project.url;
  return (
    <div className="flex flex-col bg-var-off-white overflow-hidden rounded-b-lg shadow-element">
      <GatsbyImage image={img} alt={title} />
      <div className="flex flex-col px-4 sm:px-6 pt-6 pb-4 sm:pt-8 sm:pb-6 mt-auto">
        {/* <!-- Project Title --> */}
        <h3 className="font-heading clamp-3 font-semibold">{title}</h3>

        <hr className="mt-4 mb-3" />

        {/* <!-- Porject description --> */}
        <p className="clamp-5 line-clamp-3 hover:line-clamp-none active:line-clamp-none">
          {desc}
        </p>

        <div className="mt-auto">
          {/* <!-- Project Stack --> */}
          <p className="font-bold clamp-4 mt-5 mb-1">Build with:</p>
          <div className="flex flex-wrap space-x-2">
            {stack?.map((item, idx) => (
              <span
                className="border-2 border-var-primary rounded-md py-0.5 px-2 clamp-5 font-bold mt-1"
                key={`${item}-${idx}`}
              >
                {item}
              </span>
            ))}
          </div>

          <hr className="my-4" />

          {/* Project links */}
          <div className="flex items-center space-x-3">
            <a
              href={url[0]}
              target="_blank"
              className="block rounded-xl shadow bg-var-secondary text-var-off-white py-2 px-4 transform hover:opacity-80 active:scale-95"
            >
              Demo
            </a>
            <a
              href={url[1]}
              target="_blank"
              className="block rounded-xl shadow bg-var-primary text-var-off-white py-2 px-4 transform hover:opacity-80 active:scale-95"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
