import * as React from "react";
import { FaChevronUp } from "react-icons/fa";
import { Disclosure, Transition } from "@headlessui/react";

function AccordionItem({ question, answer }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`flex justify-between items-center w-full py-2 px-3 rounded-lg text-left text-var-primary border-2 border-var-primary ${
              open ? "bg-var-primary" : ""
            }`}
          >
            <span className={`clamp-4 ${open ? "text-var-off-white" : ""}`}>
              {question}
            </span>
            <FaChevronUp
              className={`w-5 h-5 ${
                open
                  ? "transform rotate-180 text-var-off-white"
                  : "text-var-primary"
              }`}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-150 ease-in"
            enterFrom="transform scale-y-0 opacity-0"
            enterTo="transform scale-y-100 opacity-100"
            leave="transition duration-100 ease-out"
            leaveFrom="transform scale-y-100 opacity-100"
            leaveTo="transform scale-y-0 opacity-0"
          >
            <Disclosure.Panel className="pt-3 pb-2 px-3 bg-slate-50 text-sm rounded-b-lg leading-6">
              {answer}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

export default AccordionItem;
