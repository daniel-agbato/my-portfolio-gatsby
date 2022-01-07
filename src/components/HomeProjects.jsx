import * as React from "react";
import Container from "./Container";
import ElementContainer from "./ElementContainer";
import ProjectsContainer from "./ProjectsContainer";
import { Link } from "gatsby";

function HomeProjects({ projects }) {
  return (
    <Container>
      <ElementContainer>
        <section className="py-5 my-10">
          <div className="flex justify-between items-center mb-7">
            <div>
              <p className="sub-heading clamp-5">My works</p>
              <h2 className="font-heading clamp-2 font-bold">
                Recents projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden sm:flex page-link clamp-4 group"
            >
              See all projects{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-16 mt-[4px] group-hover:ml-3"
                fill="none"
                viewBox="10 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M30 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
          <ProjectsContainer projects={projects} />
          <Link
            to="/projects"
            className="sm:hidden page-link clamp-3 sm:clamp-4 group mt-5"
          >
            See all projects{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-16 mt-[4px] group-hover:ml-3"
              fill="none"
              viewBox="10 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M30 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </section>
      </ElementContainer>
    </Container>
  );
}

export default HomeProjects;
