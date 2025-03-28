// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./Auth.css"; // Separate CSS for styling

// // const LoginSignup = () => {
// //   const [state, setState] = useState("Sign Up");
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);

// //   const navigate = useNavigate();

// //   const validateEmail = (email) => {
// //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// //   };

// //   const onSubmitHandler = (event) => {
// //     event.preventDefault();
// //     setError("");

// //     if (!validateEmail(email)) {
// //       setError("Invalid email format");
// //       return;
// //     }
// //     if (password.length < 6) {
// //       setError("Password must be at least 6 characters long");
// //       return;
// //     }
// //     if (state === "Sign Up" && password !== confirmPassword) {
// //       setError("Passwords do not match");
// //       return;
// //     }

// //     if (state === "Sign Up") {
// //       // Store user details in localStorage (temporary authentication)
// //       localStorage.setItem("lawyerUser", JSON.stringify({ name, email, password }));
// //       alert("Signup successful! Please login.");
// //       setState("Login");
// //     } else {
// //       const storedUser = JSON.parse(localStorage.getItem("lawyerUser"));
// //       if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
// //         setError("Invalid login credentials");
// //         return;
// //       }
// //       alert("Login successful!");
// //       navigate("/lawstudent.html"); // Redirect to dashboard
// //     }
// //   };

// //   return (
// //     <form onSubmit={onSubmitHandler} className="auth-container">
// //       <div className="auth-box">
// //         <h2>{state === "Sign Up" ? "Create Account" : "Login"}</h2>
// //         <p>Please {state === "Sign Up" ? "sign up" : "log in"} to continue</p>
// //         {state === "Sign Up" && (
// //           <div className="input-group">
// //             <label>Full Name</label>
// //             <input
// //               type="text"
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //               required
// //             />
// //           </div>
// //         )}
// //         <div className="input-group">
// //           <label>Email</label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="input-group">
// //           <label>Password</label>
// //           <input
// //             type={showPassword ? "text" : "password"}
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //           <button type="button" onClick={() => setShowPassword(!showPassword)}>
// //             {showPassword ? "Hide" : "Show"}
// //           </button>
// //         </div>
// //         {state === "Sign Up" && (
// //           <div className="input-group">
// //             <label>Confirm Password</label>
// //             <input
// //               type="password"
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //               required
// //             />
// //           </div>
// //         )}
// //         {error && <p className="error">{error}</p>}
// //         <button type="submit" className="submit-btn">
// //           {state === "Sign Up" ? "Create Account" : "Login"}
// //         </button>
// //         <p>
// //           {state === "Sign Up" ? "Already have an account?" : "Don't have an account?"}{" "}
// //           <span onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")} className="switch-link">
// //             {state === "Sign Up" ? "Login here" : "Sign up here"}
// //           </span>
// //         </p>
// //       </div>
// //     </form>
// //   );
// // };

// // export default LoginSignup;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Auth.css"; // Separate CSS for styling

// const LoginSignup = () => {
//   const [state, setState] = useState("Sign Up");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [college, setCollege] = useState("");
//   const [passingYear, setPassingYear] = useState("");
//   const [phone, setPhone] = useState("");
//   const [degree, setDegree] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     setError("");

//     if (!validateEmail(email)) {
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

//     try {
//       const response = await fetch(
//         state === "Sign Up"
//           ? "http://localhost:4002/api/student/signup" // ✅ Port changed to 4000
//           : "http://localhost:4002/api/student/login", // ✅ Port changed to 4000
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(
//             state === "Sign Up"
//               ? { name, email, college, passingYear, phone, degree, password }
//               : { email, password }
//           ),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.msg || "Something went wrong");
//       }

//       if (state === "Sign Up") {
//         alert("Signup successful! Please login.");
//         setState("Login");
//       } else {
//         localStorage.setItem("token", data.token); // Store JWT Token
//         localStorage.setItem("student", JSON.stringify(data.user)); // Store User Data
//         alert("Login successful!");
//         navigate("/lawstudent.html"); // Redirect to dashboard
//       }
//     } catch (error) {
//       setError(error.message);
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
//               <label>College Name</label>
//               <input
//                 type="text"
//                 value={college}
//                 onChange={(e) => setCollege(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label>Year of Passing Out</label>
//               <input
//                 type="number"
//                 value={passingYear}
//                 onChange={(e) => setPassingYear(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label>Phone Number</label>
//               <input
//                 type="text"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label>Degree</label>
//               <input
//                 type="text"
//                 value={degree}
//                 onChange={(e) => setDegree(e.target.value)}
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

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Separate CSS for styling

const LoginSignup = () => {
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [passingYear, setPassingYear] = useState("");
  const [phone, setPhone] = useState("");
  const [degree, setDegree] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError("");

    if (!validateEmail(email)) {
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

    try {
      const response = await fetch(
        state === "Sign Up"
          ? "http://localhost:4002/api/student/signup" // ✅ Port changed to 4000
          : "http://localhost:4002/api/student/login", // ✅ Port changed to 4000
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            state === "Sign Up"
              ? { name, email, college, passingYear, phone, degree, password }
              : { email, password }
          ),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || "Something went wrong");
      }

      if (state === "Sign Up") {
        alert("Signup successful! Please login.");
        setState("Login");
      } else {
        localStorage.setItem("token", data.token); // Store JWT Token
        localStorage.setItem("student", JSON.stringify(data.user));
        //Store User Data

        alert("Login successful!");
        navigate("/lawstudent.html"); // Redirect to dashboard
      }
    } catch (error) {
      setError(error.message);
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
              <label>College Name</label>
              <input
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Year of Passing Out</label>
              <input
                type="number"
                value={passingYear}
                onChange={(e) => setPassingYear(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Degree</label>
              <input
                type="text"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                required
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
