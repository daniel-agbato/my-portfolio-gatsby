import * as React from "react";

function Container({ children }) {
  return (
    <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4">
      {children}
    </div>
  );
}

export default Container;
