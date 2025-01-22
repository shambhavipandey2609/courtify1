import React from "react";
import "./styles/index.css";
import { useNavigate } from "react-router-dom";

const LawStudentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="law-student-page">
      <h1>Welcome to Courtify</h1>
      <p>Your gateway to legal internships and research papers.</p>
      <div className="buttons">
        <button onClick={() => navigate("/dashboard")} className="btn btn-primary">
          Login
        </button>
        <button onClick={() => navigate("/register")} className="btn btn-secondary">
          Register
        </button>
      </div>
    </div>
  );
};

export default LawStudentPage;
