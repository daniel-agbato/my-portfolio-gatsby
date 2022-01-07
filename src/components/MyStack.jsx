import * as React from "react";
import { IconContext } from "react-icons";
import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiGatsby } from "react-icons/si";

import { StaticImage } from "gatsby-plugin-image";

function MyStack() {
  return (
    <IconContext.Provider
      value={{
        color: "var(--color-bg-dark-mode)",
        size: "4em",
      }}
    >
      <section id="stack" className="py-5 my-10 scroll-mt-28">
        <p className="sub-heading clamp-5">Thechnologies that I use</p>
        <h2 className="font-heading clamp-2 font-bold mb-7">
          My everyday stack
        </h2>
        <div className="grid grid-container-auto-fit gap-4">
          <div className="icon">
            <FaGithub />
          </div>
          <div className="icon">
            <FaHtml5 />
          </div>
          <div className="icon">
            <FaCss3Alt />
          </div>
          <div className="icon">
            <SiTailwindcss />
          </div>
          <div className="icon">
            <FaSass />
          </div>
          <div className="icon">
            <FaBootstrap />
          </div>
          <div className="icon">
            <SiJavascript />
          </div>
          <div className="icon">
            <FaReact />
          </div>
          <div className="icon">
            <div className="w-24">
              <StaticImage
                src="../assets/icons/next-js-seeklogo.com.svg"
                alt="nextJS logo"
                layout="constrained"
                placeholder="blurred"
                imgClassName=""
              />
            </div>
          </div>
          <div className="icon">
            <SiGatsby />
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
}

export default MyStack;
