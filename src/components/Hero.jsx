import * as React from "react";
import Container from "./Container";
import ElementContainer from "./ElementContainer";

function Hero() {
  return (
    <Container>
      <ElementContainer>
        <section className="hero xs:pt-12 base:pt-24 pb-16 my-10">
          <div className="flex flex-col space-y-8 md:flex-row md:justify-between md:space-y-0">
            <h1 className="font-heading clamp-1 font-bold leading-[1.2] w-full">
              Hello, I'm <br />
              <span className="text-var-secondary">Daniel Agbato.</span>
            </h1>
            <p className="clamp-3 w-full md:self-center md:w-[80%]">
              A self-taught{" "}
              <em className="font-bold text-var-accent">Web Developer</em>
              ,
              <br />
              who will make your project ideas live.
            </p>
          </div>
          <div className="flex justify-start mt-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-6 animate-bounce"
              fill="none"
              viewBox="0 24 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 70l-4 4m0 0l-4-4m4 4V3"
              />
            </svg>
          </div>
        </section>
      </ElementContainer>
    </Container>
  );
}

export default Hero;
