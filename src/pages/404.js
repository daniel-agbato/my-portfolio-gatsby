import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Container from "../components/Container";
import ElementContainer from "../components/ElementContainer";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Container>
      <ElementContainer>
        <section className="flex flex-col md:flex-row gap-5 py-14 md:py-24 my-10">
          <div className="md:w-[40%]">
            <StaticImage
              src="../assets/images/scarecrow.png"
              alt="epouventaille"
              layout="fullWidth"
              placeholder="blurred"
              imgClassName="h-full w-full"
            />
          </div>
          <div className="flex flex-col items-start md:w-[60%] space-y-5 mt-7">
            <h1 className="clamp-2 md:clamp-1 font-heading font-bold">
              OOOPS... I have bad news for you
            </h1>
            <p className="clamp-4 md:clamp-3 max-w-xs md:max-w-lg">
              The page you're looking for does not exist or might be temporarily
              unavailable
            </p>
            <Link to="/" className="page-link clamp-4 group">
              Back to homepage{" "}
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
        </section>
      </ElementContainer>
    </Container>
  </Layout>
);

export default NotFoundPage;
