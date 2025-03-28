// import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css"; // CSS file for the sidebar styling

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const navigate = useNavigate();
  const handleNavigation = (menu) => {
    setActiveMenu(menu);

    // ✅ Add navigation logic
    if (menu === "dashboard") navigate("/lawyer.html");
    else if (menu === "consultations") navigate("/provide-consultation");
    else if (menu === "internships") navigate("/post-internship");
    else if (menu === "profile") navigate("/lawyer-profile");
  };
  return (
    <div className="sidebar">
      <h2>Lawyer Options</h2>
      <ul>
        <li
          className={activeMenu === "dashboard" ? "active-menu" : ""}
          onClick={() => handleNavigation("dashboard")}
        >
          Dashboard
        </li>
        <li
          className={activeMenu === "consultations" ? "active-menu" : ""}
          onClick={() => handleNavigation("consultations")}
        >
          Consultations
        </li>
        <li
          className={activeMenu === "internships" ? "active-menu" : ""}
          onClick={() => handleNavigation("internships")}
        >
          Internships
        </li>
        <li
          className={activeMenu === "profile" ? "active-menu" : ""}
          onClick={() => handleNavigation("profile")}
        >
          Profile
        </li>
      </ul>
    </div>
  );
};
Sidebar.propTypes = {
  activeMenu: PropTypes.string.isRequired, // Ensure activeMenu is a string and required
  setActiveMenu: PropTypes.func.isRequired, // Ensure activeMenu is a string and required
};
export default Sidebar;
