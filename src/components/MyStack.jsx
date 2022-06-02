import * as React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaHtml5, FaCss3Alt, FaSass, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiStyledcomponents,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiSymfony,
} from "react-icons/si";

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
        <h2 className="font-heading clamp-2 font-bold mb-7">My stack</h2>
        <div className="grid grid-container-auto-fit gap-4">
          <div className="icon">
            <FaGithub title="github" />
          </div>
          <div className="icon">
            <FaHtml5 title="html5" />
          </div>
          <div className="icon">
            <FaCss3Alt title="css3" />
          </div>
          <div className="icon">
            <SiTailwindcss title="tailwindcss" />
          </div>
          <div className="icon">
            <SiStyledcomponents title="styled-components" />
          </div>
          <div className="icon">
            <SiJavascript title="javascript" />
          </div>
          <div className="icon">
            <SiTypescript title="typescript" />
          </div>
          <div className="icon">
            <FaReact title="react" />
          </div>
          <div className="icon">
            <SiPhp title="php" />
          </div>
          <div className="icon">
            <SiSymfony title="symfony" />
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
}

export default MyStack;
