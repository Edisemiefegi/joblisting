import React from "react";

function Section({ children, className }) {
  return (
    <div className={`py-8 md:w-10/12 w-11/12 mx-auto ${className}`}>
      {children}
    </div>
  );
}

export default Section;
