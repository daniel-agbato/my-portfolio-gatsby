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
      <GatsbyImage
        image={img}
        alt={title}
        className="h-[70%] transform transition duration-1000 md:hover:scale-105"
      />
      <div className="flex flex-col justify-between h-full px-4 sm:px-6 pt-6 pb-4">
        <div className="">
          {/* <!-- Project Title --> */}
          <h3 className="font-heading clamp-3 md:clamp-4 font-semibold">
            {title}
          </h3>

          <hr className="mt-4 mb-3" />

          {/* <!-- Porject description --> */}
          <p className="clamp-5 md:line-clamp-3 hover:line-clamp-none active:line-clamp-none max-w-sm">
            {desc}
          </p>
        </div>

        <div className="">
          {/* <!-- Project Stack --> */}
          <p className="font-bold clamp-4 mt-5 mb-1">Built with:</p>
          <div className="flex flex-wrap space-x-2">
            {stack?.map((item, idx) => (
              <span
                className="border border-var-primary rounded-md py-0.5 px-2 clamp-5 font-bold mt-1"
                key={`${item}-${idx}`}
              >
                {item}
              </span>
            ))}
          </div>

          <hr className="my-4" />

          {/* Project links */}
          <div className="flex items-center space-x-3 text-center">
            <a
              href={url[0]}
              target="_blank"
              rel="noreferrer"
              className="block w-full rounded-xl shadow-md bg-var-secondary text-var-off-white py-2 px-4 transform hover:opacity-80 active:scale-95 cursor-pointer"
            >
              Demo
            </a>
            <a
              href={url[1]}
              target="_blank"
              rel="noreferrer"
              className="block w-full rounded-xl shadow-md bg-var-primary text-var-off-white py-2 px-4 transform hover:opacity-80 active:scale-95 cursor-pointer"
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
