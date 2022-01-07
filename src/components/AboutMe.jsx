import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import ElementContainer from "./ElementContainer";

function AboutMe({ home }) {
  return (
    <ElementContainer>
      <section className="py-5 my-10">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-[55%] pt-0">
            <p className="sub-heading clamp-5">What kind of developper</p>
            <h2 className="font-heading clamp-2 font-bold mb-7">Who i'am ?</h2>
            <div className="space-y-7 sm:max-w-md md:max-w-xl">
              <p className="clamp-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus,{" "}
                <em className="text-var-accent font-bold">
                  accusantium officia
                </em>
                . Quia minus quo neque distinctio. Quibusdam ea aperiam,
                eligendi dolores minima aliquid, sapiente vero iste recusandae
                assumenda ipsa repellat!
              </p>
              <p className="clamp-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                architecto dolore nesciunt iusto et explicabo! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Pariatur consequatur
                natus qui totam.
              </p>

              {home ? (
                <>
                  <hr />
                  <Link to="/about#stack" className="page-link clamp-4 group">
                    Learn more about the developer{" "}
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
                        className="h-7 w-20 bg-var-very-dark-blue rounded-lg text-var-off-white clamp-5 flex items-center justify-center"
                      >
                        My GitHub
                      </a>
                      {/*  <a
                        href={`../docs/my-cv.pdf`}
                        target="_blank"
                        rel="noreferrer"
                        className="h-7 w-20 bg-var-very-dark-blue rounded-lg text-var-off-white clamp-5 flex items-center justify-center"
                      >
                        Print my CV
                      </a> */}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="rounded-md overflow-hidden mt-7 w-full xs:h-full base:h-[470px] md:mt-0 md:w-[35%] md:h-full">
            <StaticImage
              src="../assets/images/isThatMe.jpg"
              alt="my portrait"
              layout="fullWidth"
              placeholder="blurred"
              imgClassName="w-full h-full rounded-md object-cover object-top"
            />
          </div>
        </div>
      </section>
    </ElementContainer>
  );
}

export default AboutMe;
