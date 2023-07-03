import React from "react";

const MobileMenu = ({ isOpen = false }) => {
  return (
    <React.Fragment>
      <div
        className={`absolute left-0 right-0 top-0 z-10 min-h-[150vh] bg-almost-black opacity-50 ${
          isOpen ? "flex" : "hidden"
        } `}
      ></div>
    </React.Fragment>
  );
};

export default MobileMenu;
