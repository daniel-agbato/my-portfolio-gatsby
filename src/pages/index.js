import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/seo";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Container from "../components/Container";
import HomeProjects from "../components/HomeProjects";

const IndexPage = ({ data }) => {
  const projects = data.allProjectsJson.edges.reverse().slice(0, 3);

  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <HomeProjects projects={projects} />
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
