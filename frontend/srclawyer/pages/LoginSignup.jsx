// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Auth.css"; // Ensure this CSS file exists

// const LoginSignup = () => {
//   const [state, setState] = useState("Sign Up");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [barCouncilId, setBarCouncilId] = useState("");
//   const [areaOfPractice, setAreaOfPractice] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [yearsOfExperience, setYearsOfExperience] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();
//   const API_BASE_URL = "http://localhost:4001/api/lawyers"; // Backend URL

//   // Function to handle API requests for signup & login
//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     setError("");

//     if (!email.includes("@")) {
//       setError("Invalid email format");
//       return;
//     }
//     if (password.length < 6) {
//       setError("Password must be at least 6 characters long");
//       return;
//     }
//     if (state === "Sign Up" && password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     const userData = { email, password };

//     if (state === "Sign Up") {
//       userData.name = name;
//       userData.barCouncilId = barCouncilId;
//       userData.areaOfPractice = areaOfPractice;
//       userData.phoneNumber = phoneNumber;
//       userData.yearsOfExperience = yearsOfExperience;
//     }

//     try {
//       const response = await fetch(
//         `${API_BASE_URL}/${state === "Sign Up" ? "signup" : "login"}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(userData),
//         }
//       );
//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || "Something went wrong!");
//       }

//       if (state === "Sign Up") {
//         alert("Signup successful! Please login.");
//         setState("Login"); // Switch to login screen
//       } else {
//         alert("Login successful!");
//         localStorage.setItem("lawyerToken", data.token); // Store JWT token
//         navigate("/lawyer.html"); // Redirect to dashboard
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className="auth-container">
//       <div className="auth-box">
//         <h2>{state === "Sign Up" ? "Create Account" : "Login"}</h2>
//         <p>Please {state === "Sign Up" ? "sign up" : "log in"} to continue</p>

//         {state === "Sign Up" && (
//           <>
//             <div className="input-group">
//               <label>Full Name</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label>Bar Council ID</label>
//               <input
//                 type="text"
//                 value={barCouncilId}
//                 onChange={(e) => setBarCouncilId(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label>Area of Practice</label>
//               <input
//                 type="text"
//                 value={areaOfPractice}
//                 onChange={(e) => setAreaOfPractice(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label>Phone Number</label>
//               <input
//                 type="text"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label>Years of Experience</label>
//               <input
//                 type="number"
//                 value={yearsOfExperience}
//                 onChange={(e) => setYearsOfExperience(e.target.value)}
//                 required
//               />
//             </div>
//           </>
//         )}

//         <div className="input-group">
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="input-group">
//           <label>Password</label>
//           <input
//             type={showPassword ? "text" : "password"}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="button" onClick={() => setShowPassword(!showPassword)}>
//             {showPassword ? "Hide" : "Show"}
//           </button>
//         </div>

//         {state === "Sign Up" && (
//           <div className="input-group">
//             <label>Confirm Password</label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//         )}

//         {error && <p className="error">{error}</p>}

//         <button type="submit" className="submit-btn">
//           {state === "Sign Up" ? "Create Account" : "Login"}
//         </button>

//         <p>
//           {state === "Sign Up"
//             ? "Already have an account?"
//             : "Don't have an account?"}{" "}
//           <span
//             onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
//             className="switch-link"
//           >
//             {state === "Sign Up" ? "Login here" : "Sign up here"}
//           </span>
//         </p>
//       </div>
//     </form>
//   );
// };

// export default LoginSignup;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Ensure this CSS file exists

const LoginSignup = () => {
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [barCouncilId, setBarCouncilId] = useState("");
  const [areaOfPractice, setAreaOfPractice] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [photo, setPhoto] = useState(null); // New state for profile picture
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const API_BASE_URL = "http://localhost:4001/api/lawyers"; // Backend URL

  // Function to handle API requests for signup & login
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError("");

    if (!email.includes("@")) {
      setError("Invalid email format");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (state === "Sign Up" && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const formData = new FormData(); // Use FormData to handle file uploads
    formData.append("email", email);
    formData.append("password", password);

    if (state === "Sign Up") {
      formData.append("name", name);
      formData.append("barCouncilId", barCouncilId);
      formData.append("areaOfPractice", areaOfPractice);
      formData.append("phoneNumber", phoneNumber);
      formData.append("yearsOfExperience", yearsOfExperience);
      if (photo) formData.append("photo", photo); // Append photo if selected
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}/${state === "Sign Up" ? "signup" : "login"}`,
        {
          method: "POST",
          body: formData, // Send FormData instead of JSON
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong!");
      }

      if (state === "Sign Up") {
        alert("Signup successful! Please login.");
        setState("Login"); // Switch to login screen
      } else {
        alert("Login successful!");
        localStorage.setItem("lawyerToken", data.token); // Store JWT token
        navigate("/lawyer.html"); // Redirect to dashboard
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="auth-container">
      <div className="auth-box">
        <h2>{state === "Sign Up" ? "Create Account" : "Login"}</h2>
        <p>Please {state === "Sign Up" ? "sign up" : "log in"} to continue</p>

        {state === "Sign Up" && (
          <>
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Bar Council ID</label>
              <input
                type="text"
                value={barCouncilId}
                onChange={(e) => setBarCouncilId(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Area of Practice</label>
              <input
                type="text"
                value={areaOfPractice}
                onChange={(e) => setAreaOfPractice(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Years of Experience</label>
              <input
                type="number"
                value={yearsOfExperience}
                onChange={(e) => setYearsOfExperience(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Upload Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])} // Handle file selection
              />
            </div>
          </>
        )}

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {state === "Sign Up" && (
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}

        {error && <p className="error">{error}</p>}

        <button type="submit" className="submit-btn">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <p>
          {state === "Sign Up"
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <span
            onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
            className="switch-link"
          >
            {state === "Sign Up" ? "Login here" : "Sign up here"}
          </span>
        </p>
      </div>
    </form>
  );
};

export default LoginSignup;
