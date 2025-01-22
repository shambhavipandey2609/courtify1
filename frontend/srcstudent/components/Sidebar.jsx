import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css"; // CSS for styling the sidebar

const Sidebar = ({ activeMenu }) => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2>Student Options</h2>
      <ul>
        <li
          className={activeMenu === "dashboard" ? "active-menu" : ""}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </li>
        <li
          className={activeMenu === "research" ? "active-menu" : ""}
          onClick={() => navigate("/research")}
        >
          Research Papers
        </li>
        <li
          className={activeMenu === "internships" ? "active-menu" : ""}
          onClick={() => navigate("/internships")}
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
