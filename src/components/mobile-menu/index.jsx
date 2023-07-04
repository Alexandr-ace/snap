import React from "react";
import NavItem from "../nav-item";
import { COMPANY, FEATURES } from "../header/constants";
import MenuItem from "../menu-item";
import Button from "../button";

const MobileMenu = ({ isOpen = false }) => {
  return (
    <React.Fragment>
      <div
        className={`absolute left-0 right-0 top-0 z-10 min-h-[150vh] bg-almost-black opacity-50 ${
          isOpen ? "flex" : "hidden"
        } `}
      ></div>
      <div
        className={`absolute right-0 top-0 z-20 min-h-[150vh] w-1/2 justify-center bg-white ${
          isOpen ? "flex" : "hidden"
        } `}
      >
        <nav className="mx-5 my-20 w-full space-y-5 text-lg">
          <NavItem text="Features">
            <div className="flex flex-col space-y-5 p-2">
              {FEATURES.map(({ text, icon }) => (
                <MenuItem icon={icon} text={text} />
              ))}
            </div>
          </NavItem>
          <NavItem text="Company">
            <div className="flex flex-col space-y-5 p-2">
              {COMPANY.map(({ text, icon }) => (
                <MenuItem icon={icon} text={text} />
              ))}
            </div>
          </NavItem>
          <NavItem text="Careers" />
          <NavItem text="About" />
          <div className="flex flex-col space-y-5">
            <Button>Login</Button>
            <Button hasborder={true}>Register</Button>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default MobileMenu;
