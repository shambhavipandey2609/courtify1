import React from "react";
import "./Header.css";
import logo from "../assets/courtifylogo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Courtify Logo" />
        {/* <h1>Courtify</h1> */}
      </div>
      <nav className="header__nav">
        <a href="/" className="header__link">
          Home
        </a>
        {/* <a href="/dashboard" className="header__link">Dashboard</a> */}
        <a href="/contact" className="header__link">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
