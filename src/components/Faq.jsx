import * as React from "react";
import { IconContext } from "react-icons";
import Accordion from "./Accordion";

function Faq() {
  return (
    <IconContext.Provider value={{}}>
      <section id="stack" className="py-5 my-10">
        <p className="sub-heading clamp-5">You got questions, here's answers</p>
        <h2 className="font-heading clamp-2 font-bold mb-7">
          Frequently Asked Questions
        </h2>
        <Accordion />
      </section>
    </IconContext.Provider>
  );
}

export default Faq;
