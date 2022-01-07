import * as React from "react";
import AboutMe from "../components/AboutMe";
import Container from "../components/Container";
import ElementContainer from "../components/ElementContainer";
import Faq from "../components/Faq";

import Layout from "../components/layout";
import MyStack from "../components/MyStack";
import Seo from "../components/seo";

const AboutPage = () => (
  <Layout>
    <Seo title="About Page" />
    <Container>
      <h1 className="clamp-1 font-bold font-heading mt-10">About</h1>
      <AboutMe home={false} />
      <ElementContainer>
        <MyStack />
      </ElementContainer>
      <ElementContainer>
        <Faq />
      </ElementContainer>
    </Container>
  </Layout>
);

export default AboutPage;
