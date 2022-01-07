import * as React from "react";

function ElementContainer({ children }) {
  return (
    <div className="relative rounded-xl bg-white shadow-element px-4">
      {children}
    </div>
  );
}

export default ElementContainer;
