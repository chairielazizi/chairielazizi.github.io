import React from "react";
import { Link } from "react-scroll";

import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="py-8 lg:py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="logo" className="logo" />
          </a>
          <Link activeClass="active" smooth={true} spy={true} to="contact">
            <button className="btn btn-sm">Contact Me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
