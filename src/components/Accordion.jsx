import * as React from "react";
import AccordionItem from "./AccordionItem";

function Accordion() {
  return (
    <div className="w-full md:max-w-xl space-y-4">
      <AccordionItem
        question="Why you wanted to be a web developer ?"
        answer="Since my youth, I've always been interested by technologies. In 2020, I dove into the world of web development and I fell in love with it. I start my self-taught learning path with YouTube and online course for a year, during which I build some personal projects (including this portfolio website) and amasses a lot of experience"
      />
      <AccordionItem
        question="What's your commonly use technologies ?"
        answer="I see myself as a fast learner but, I'm a big fan of React (and everything related to it). I also really like working with Tailwind Css or Styled-components. I've solid base in Php, Symfony, TypeScript and I'm also comfortable with HTML, pure Css/Sass and Vanilla JS."
      />
      <AccordionItem
        question="What's your dream job ?"
        answer="Sincerely, anywhere where I feel good and can learn, practice, improve my coding skills. I'm confident and ready to work with a team to help each other and the company!"
      />
      <AccordionItem
        question="What's the meaning of life ?"
        answer="The meaning of life is: 42"
      />
    </div>
  );
}

export default Accordion;
