import React from "react";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { ReactComponent as MenuIcon } from "../../images/icon-menu.svg";
import { ReactComponent as MenuCloseIcon } from "../../images/icon-close-menu.svg";
import NavItem from "../nav-item";
import NavMenu from "../nav-menu";
import { COMPANY, FEATURES } from "./constants";
import Button from "../button";
import MobileMenu from "../mobile-menu";

const Header = () => {
  const [isMobileOpenMenu, setIsMobileOpenMenu] = React.useState(false);

  return (
    <header className="flex items-center">
      <LogoIcon />
      <nav className="ml-8 hidden items-center space-x-6 xl:flex">
        <NavItem text="Feature">
          <NavMenu items={FEATURES} />
        </NavItem>
        <NavItem text="Company">
          <NavMenu items={COMPANY} />
        </NavItem>
        <NavItem text="Careers" />
        <NavItem text="About" />
      </nav>
      <div className=" ml-auto hidden space-x-5 xl:flex">
        <Button>Loggin</Button>
        <Button hasborder={true}>Register</Button>
      </div>
      <div
        className="z-30 ml-auto flex cursor-pointer xl:hidden"
        onClick={() => setIsMobileOpenMenu(!isMobileOpenMenu)}
      >
        {isMobileOpenMenu ? <MenuCloseIcon /> : <MenuIcon />}
      </div>
      <MobileMenu isOpen={isMobileOpenMenu} />
    </header>
  );
};

export default Header;
