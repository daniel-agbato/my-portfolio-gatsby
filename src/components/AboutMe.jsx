import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import ElementContainer from "./ElementContainer";

function AboutMe({ home }) {
  return (
    <ElementContainer>
      <section className="py-5 my-10">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="sm:w-[55%] pt-0">
            <p className="sub-heading clamp-5">What kind of developper</p>
            <h2 className="font-heading clamp-2 font-bold mb-7">Who i'am ?</h2>
            <div className="space-y-7 xl:max-w-xl">
              <p className="clamp-4">
                Hi, I'm Daniel Agbato, your next{" "}
                <em className="text-var-accent font-bold">Web Developer</em>
                . I come from commerce world and now i've fixed myself a new
                goal of working in the tech world. <br />{" "}
                <em className="text-var-accent font-bold">
                  Learn - Do it - Repeat
                </em>
                , that's my everyday mindset to help me become a better
                developer. I see myself as a{" "}
                <em className="text-var-accent font-bold">
                  visual thinking person
                </em>{" "}
                so that's why a naturally feel comfortable with Front-End side,
                even though{" "}
                <em className="text-var-accent font-bold">
                  i also use the Back-End side
                </em>{" "}
                when i build some projects.
              </p>

              <div className="flex space-x-20">
                <div className="">
                  <h4 className="clamp-4 font-heading font-semibold mb-2">
                    Interests
                  </h4>
                  <ul className="list-disc list-inside pl-2">
                    <li>Coding/Computing</li>
                    <li>New techs</li>
                    <li>Football</li>
                    <li>Automobile</li>
                  </ul>
                </div>
                {/* <div className="">
                  <h4 className="clamp-4 font-heading font-semibold mb-2">
                    Experiences
                  </h4>
                  <ul className="list-disc list-inside pl-2">
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                  </ul>
                </div> */}
              </div>

              {home ? (
                <>
                  <hr />
                  <Link
                    to="/about#stack"
                    className="page-link clamp-4 hover:opacity-70"
                  >
                    Learn more about the developer{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-16 mt-[4px]"
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
                </>
              ) : (
                <>
                  <hr />
                  <div className="space-y-3">
                    <h3 className="clamp-4 font-heading font-bold">My Links</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://github.com/Dani2294"
                        target="_blank"
                        rel="noreferrer"
                        className="clamp-5 flex items-center justify-center h-7 w-20 border-2 border-var-primary rounded-xl font-bold hover:border-var-secondary hover:bg-var-secondary hover:text-var-off-white cursor-pointer transform hover:opacity-80 active:scale-95"
                      >
                        My GitHub
                      </a>
                      <a
                        href="./cv-daniel-agbato.pdf"
                        download
                        type="button"
                        target="_blank"
                        rel="noreferrer"
                        className="clamp-5 flex items-center justify-center h-7 w-20 border-2 border-var-primary rounded-xl font-bold hover:border-var-secondary hover:bg-var-secondary hover:text-var-off-white cursor-pointer transform hover:opacity-80 active:scale-95"
                      >
                        My Resume
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="rounded-md overflow-hidden mt-7 w-full lg:h-[530px] sm:mt-0 sm:w-[35%]">
            <StaticImage
              title="this is me yes"
              src="../assets/images/isThatMe.jpg"
              alt="my portrait"
              layout="fullWidth"
              placeholder="blurred"
              imgClassName="rounded-md object-cover object-top"
            />
          </div>
        </div>
      </section>
    </ElementContainer>
  );
}

export default AboutMe;
