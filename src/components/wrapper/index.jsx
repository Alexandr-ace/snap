import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="container mx-auto min-h-screen px-2 py-4 ">{children}</div>
  );
};

export default Wrapper;
