import * as React from "react";
import { useState } from "react";
import { graphql } from "gatsby";
import Container from "../components/Container";
import ElementContainer from "../components/ElementContainer";

import Layout from "../components/Layout";
import ProjectsContainer from "../components/ProjectsContainer";
import Seo from "../components/seo";

const Projects = ({ data }) => {
  const arr = data.allProjectsJson.edges;
  const projects =
    arr[0].node.title === "Loopstudio landing page" ? arr.reverse() : arr;
  const [projectsArr, setProjectsArr] = useState(projects);
  const [filterVal, setFilterVal] = useState("all");

  function handleChange(e) {
    const val = e.target.value;
    setFilterVal(val);
    if (val === "all") {
      return setProjectsArr(projects);
    }
    const filteredProjects = projects.filter(project => {
      const arr = project.node;
      return arr.stack.includes(val);
    });
    setProjectsArr(filteredProjects);
  }

  return (
    <Layout>
      <Seo title="Projects Page" />
      <Container>
        <h1 className="clamp-1 font-bold font-heading mt-10">All Projects</h1>
        <ElementContainer>
          <section className="py-5 my-10">
            <div className="flex items-center space-x-2 mb-7">
              <p className="clamp-4 font-bold">Filter projects:</p>
              <select
                value={filterVal}
                onChange={handleChange}
                name="filter"
                className="bg-transparent py-1 border-2 border-var-primary rounded-lg clamp-4"
              >
                <option value="all">All</option>
                <option value="html&amp;css">Html &amp; Css</option>
                <option value="vanillaJS">Vanilla JS</option>
                <option value="react">React</option>
                <option value="php">Php</option>
              </select>
            </div>
            <ProjectsContainer projects={projectsArr} filterVal={filterVal} />
          </section>
        </ElementContainer>
      </Container>
    </Layout>
  );
};

export default Projects;

export const pageQuery = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          id
          description
          title
          url
          stack
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
