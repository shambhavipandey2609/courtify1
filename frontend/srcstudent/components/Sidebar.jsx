import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">Options</h2>
      <ul className="sidebar__menu">
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/research-papers">Research Papers</a></li>
        <li><a href="/internships">Internships</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
