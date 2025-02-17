// // // import React, { useState } from "react";

// // // const Login = () => {
// // //   const [state, setState] = useState("Sign Up");

// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   const onSubmitHandler = (event) => {
// // //     event.preventDefault();
// // //   };

// // //   return (
// // //     <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
// // //       <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
// // //         <p className="text-2xl font-semibold">
// // //           {state === "Sign Up" ? "Create Account" : "Login"}
// // //         </p>
// // //         <p>
// // //           Please {state === "Sign Up" ? "sign up" : "log in"} to book
// // //           appointment
// // //         </p>
// // //         {state === "Sign Up" ? (
// // //           <div className="w-full ">
// // //             <p>Full Name</p>
// // //             <input
// // //               onChange={(e) => setName(e.target.value)}
// // //               value={name}
// // //               className="border border-zinc-300 rounded w-full p-2 mt-1"
// // //               type="text"
// // //               required
// // //             />
// // //           </div>
// // //         ) : null}
// // //         <div className="w-full ">
// // //           <p>Email</p>
// // //           <input
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             value={email}
// // //             className="border border-zinc-300 rounded w-full p-2 mt-1"
// // //             type="email"
// // //             required
// // //           />
// // //         </div>
// // //         <div className="w-full ">
// // //           <p>Password</p>
// // //           <input
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             value={password}
// // //             className="border border-zinc-300 rounded w-full p-2 mt-1"
// // //             type="password"
// // //             required
// // //           />
// // //         </div>
// // //         <button className="bg-primary text-white w-full py-2 rounded-md text-base">
// // //           {state === "Sign Up" ? "Create account" : "Login"}
// // //         </button>
// // //         {state === "Sign Up" ? (
// // //           <p>
// // //             Already have an account?{" "}
// // //             <span
// // //               onClick={() => setState("Login")}
// // //               className="text-primary underline cursor-pointer"
// // //             >
// // //               Login here
// // //             </span>
// // //           </p>
// // //         ) : (
// // //           <p>
// // //             Create an new account?{" "}
// // //             <span
// // //               onClick={() => setState("Sign Up")}
// // //               className="text-primary underline cursor-pointer"
// // //             >
// // //               Click here
// // //             </span>
// // //           </p>
// // //         )}
// // //       </div>
// // //     </form>
// // //   );
// // // };

// // // export default Login;

// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // const Login = () => {
// //   const [state, setState] = useState("Login");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const navigate = useNavigate();

// //   const onSubmitHandler = async (event) => {
// //     event.preventDefault();

// //     try {
// //       const response = await axios.post("http://localhost:4000/login", {
// //         email,
// //         password,
// //       });

// //       localStorage.setItem("token", response.data.token); // Store JWT token
// //       alert("Login Successful!");
// //       navigate("/MyProfile"); // Redirect to profile page
// //     } catch (error) {
// //       alert(error.response?.data?.message || "Login failed");
// //     }
// //   };

// //   return (
// //     <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
// //       <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
// //         <p className="text-2xl font-semibold">
// //           {state === "Sign Up" ? "Create Account" : "Login"}
// //         </p>
// //         <p>
// //           Please {state === "Sign Up" ? "sign up" : "log in"} to book
// //           appointments
// //         </p>

// //         <div className="w-full">
// //           <p>Email</p>
// //           <input
// //             onChange={(e) => setEmail(e.target.value)}
// //             value={email}
// //             className="border border-zinc-300 rounded w-full p-2 mt-1"
// //             type="email"
// //             required
// //           />
// //         </div>
// //         <div className="w-full">
// //           <p>Password</p>
// //           <input
// //             onChange={(e) => setPassword(e.target.value)}
// //             value={password}
// //             className="border border-zinc-300 rounded w-full p-2 mt-1"
// //             type="password"
// //             required
// //           />
// //         </div>

// //         <button className="bg-primary text-white w-full py-2 rounded-md text-base">
// //           {state === "Sign Up" ? "Create account" : "Login"}
// //         </button>

// //         {state === "Sign Up" ? (
// //           <p>
// //             Already have an account?{" "}
// //             <span
// //               onClick={() => setState("Login")}
// //               className="text-primary underline cursor-pointer"
// //             >
// //               Login here
// //             </span>
// //           </p>
// //         ) : (
// //           <p>
// //             Create a new account?{" "}
// //             <span
// //               onClick={() => setState("Sign Up")}
// //               className="text-primary underline cursor-pointer"
// //             >
// //               Click here
// //             </span>
// //           </p>
// //         )}
// //       </div>
// //     </form>
// //   );
// // };

// // export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [state, setState] = useState("Login");
//   const [name, setName] = useState(""); // For signup
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [gender, setGender] = useState("");
//   const [dob, setDob] = useState("");
//   const navigate = useNavigate();

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     try {
//       // Define API endpoint based on state (Login or Signup)
//       const url =
//         state === "Sign Up"
//           ? "http://localhost:4000/api/signup"
//           : "http://localhost:4000/api/login";
//       const data =
//         state === "Sign Up" ? { name, email, password } : { email, password };

//       const response = await axios.post(url, data);

//       // ✅ Store JWT token in localStorage
//       localStorage.setItem("token", response.data.token);

//       // ✅ Redirect user to Profile Page
//       alert(
//         state === "Sign Up"
//           ? "Account Created! Please log in."
//           : "Login Successful!"
//       );
//       navigate("/my-profile");
//     } catch (error) {
//       alert(error.response?.data?.message || "Something went wrong!");
//     }
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
//       <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
//         <p className="text-2xl font-semibold">
//           {state === "Sign Up" ? "Create Account" : "Login"}
//         </p>
//         <p>
//           Please {state === "Sign Up" ? "sign up" : "log in"} to book
//           appointments
//         </p>

//         {state === "Sign Up" && (
//           <div className="w-full">
//             <p>Full Name</p>
//             <input
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//               className="border border-zinc-300 rounded w-full p-2 mt-1"
//               type="text"
//               required
//             />
//           </div>
//         )}

//         <div className="w-full">
//           <p>Email</p>
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="email"
//             required
//           />
//         </div>

//         <div className="w-full">
//           <p>Password</p>
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="password"
//             required
//           />
//         </div>

//         <button className="bg-primary text-white w-full py-2 rounded-md text-base">
//           {state === "Sign Up" ? "Create account" : "Login"}
//         </button>

//         {state === "Sign Up" ? (
//           <p>
//             Already have an account?{" "}
//             <span
//               onClick={() => setState("Login")}
//               className="text-primary underline cursor-pointer"
//             >
//               Login here
//             </span>
//           </p>
//         ) : (
//           <p>
//             Create a new account?{" "}
//             <span
//               onClick={() => setState("Sign Up")}
//               className="text-primary underline cursor-pointer"
//             >
//               Click here
//             </span>
//           </p>
//         )}
//       </div>
//     </form>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("Login");
  const [name, setName] = useState(""); // Signup name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const url =
        state === "Sign Up"
          ? "http://localhost:4000/api/signup"
          : "http://localhost:4000/api/login";
      const data =
        state === "Sign Up"
          ? { name, email, password, phone, address, gender, dob }
          : { email, password };

      const response = await axios.post(url, data);

      localStorage.setItem("token", response.data.token);
      alert(
        state === "Sign Up"
          ? "Account Created! Please log in."
          : "Login Successful!"
      );
      navigate("/my-profile");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>Please {state === "Sign Up" ? "sign up" : "log in"} to continue.</p>

        {state === "Sign Up" && (
          <>
            <div className="w-full">
              <p>Full Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                type="text"
                required
              />
            </div>
            <div className="w-full">
              <p>Phone</p>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                type="text"
                required
              />
            </div>
            <div className="w-full">
              <p>Address</p>
              <input
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                type="text"
                required
              />
            </div>
            <div className="w-full">
              <p>Gender</p>
              <select
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                className="border border-zinc-300 rounded w-full p-2 mt-1"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="w-full">
              <p>Birthday</p>
              <input
                onChange={(e) => setDob(e.target.value)}
                value={dob}
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                type="date"
                required
              />
            </div>
          </>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            required
          />
        </div>

        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          {state === "Sign Up" ? "Create account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
