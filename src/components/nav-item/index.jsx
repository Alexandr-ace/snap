import React from "react";

const NavItem = ({ text = "" }) => {
  return (
    <div className="relative">
      <div className="flex cursor-pointer space-x-2 ">
        <span className="text-medium">{text}</span>
      </div>
    </div>
  );
};

export default NavItem;
