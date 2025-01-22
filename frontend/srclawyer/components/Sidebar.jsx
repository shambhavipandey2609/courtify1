import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css"; // CSS file for the sidebar styling

const Sidebar = ({ activeMenu }) => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2>Lawyer Options</h2>
      <ul>
        <li
          className={activeMenu === "dashboard" ? "active-menu" : ""}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </li>
        <li
          className={activeMenu === "consultations" ? "active-menu" : ""}
          onClick={() => navigate("/provide-consultation")}
        >
          Consultations
        </li>
        <li
          className={activeMenu === "internships" ? "active-menu" : ""}
          onClick={() => navigate("/post-internship")}
        >
          Internships
        </li>
        <li
          className={activeMenu === "profile" ? "active-menu" : ""}
          onClick={() => navigate("/profile")}
        >
          Profile
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
