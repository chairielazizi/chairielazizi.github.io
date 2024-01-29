import React from "react";

import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="py-8 lg:py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="logo" className="logo" />
          </a>
          <button className="btn btn-sm">Contact Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
