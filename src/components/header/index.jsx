import React from "react";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import NavItem from "../nav-item";

const Header = () => {
  return (
    <header className="flex">
      <LogoIcon />
      <nav>
        <NavItem />
        <NavItem />
        <NavItem />
      </nav>
    </header>
  );
};

export default Header;
