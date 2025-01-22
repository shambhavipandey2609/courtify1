import React from "react";
import "./Header.css"; // CSS for styling the header
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <img src="/assets/logo.png" alt="Logo" />
        <span>Law Student Portal</span>
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/research">Research Papers</a>
        <a href="/internships">Internships</a>
        <a href="/profile">Profile</a>
      </nav>
    </header>
  );
};

export default Header;
