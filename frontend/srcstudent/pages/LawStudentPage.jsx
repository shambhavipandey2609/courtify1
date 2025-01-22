import React, { useState } from "react";
import "./LawStudentPage.css";

const LawStudentPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", formData);
      // Send login data to the backend API
    } else {
      console.log("Signing up with:", formData);
      // Send signup data to the backend API
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ email: "", password: "", name: "" });
  };

  return (
    <div className="law-student-page">
      <div className="auth-container">
        <h2>{isLogin ? "Law Student Login" : "Law Student Sign Up"}</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="auth-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p onClick={toggleForm} className="toggle-form">
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default LawStudentPage;
