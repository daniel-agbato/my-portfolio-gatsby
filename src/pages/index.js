import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/seo";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Container from "../components/Container";
import HomeProjects from "../components/HomeProjects";

const IndexPage = ({ data }) => {
  const arr = data.allProjectsJson.edges;
  const projects =
    arr[0].node.title === "Loopstudio landing page" ? arr.reverse() : arr;

  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <HomeProjects projects={projects.slice(0, 3)} />
      <Container>
        <AboutMe home={true} />
      </Container>
    </Layout>
  );
};

export default IndexPage;

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
