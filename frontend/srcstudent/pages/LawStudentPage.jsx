import React, { useState } from "react";
import "./LawStudentPage.css";

const LawStudentPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? "Logged in successfully!" : "Account created successfully!");
  };

  return (
    <div className="law-student-page">
      <div className="law-student-page__container">
        <h1>{isLogin ? "Law Student Login" : "Law Student Signup"}</h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="input-field"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="input-field"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="input-field"
          />
          {!isLogin && (
            <input
              type="text"
              name="college"
              placeholder="College Name"
              required
              className="input-field"
            />
          )}
          <button type="submit" className="btn btn-primary">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p onClick={toggleMode} className="toggle-mode">
          {isLogin
            ? "Don't have an account? Sign up here."
            : "Already have an account? Login here."}
        </p>
      </div>
    </div>
  );
};

export default LawStudentPage;
