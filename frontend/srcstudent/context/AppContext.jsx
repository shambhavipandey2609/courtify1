// // import { createContext, useEffect, useState } from "react";
// // import { toast } from "react-toastify";
// // import axios from "axios";

// // export const AppContext = createContext();

// // const AppContextProvider = (props) => {
// //   const currencySymbol = "₹";
// //   const backendUrl = import.meta.env.VITE_BACKEND_URL;

// //   const [lawyers, setLawyers] = useState([]);  // Renamed from setDoctors to setLawyers
// //   const [token, setToken] = useState(
// //     localStorage.getItem("token") ? localStorage.getItem("token") : ""
// //   );
// //   const [userData, setUserData] = useState(false);

// //   // Getting Lawyers using API
// //   const getLawyersData = async () => {  // Renamed from getDoctosData to getLawyersData
// //     try {
// //       const { data } = await axios.get(backendUrl + "/api/lawyer/list");  // Renamed endpoint
// //       if (data.success) {
// //         setLawyers(data.lawyers);  // Renamed from setDoctors to setLawyers
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //       toast.error(error.message);
// //     }
// //   };

// //   // Getting User Profile using API
// //   const loadUserProfileData = async () => {
// //     try {
// //       const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
// //         headers: { token },
// //       });

// //       if (data.success) {
// //         setUserData(data.userData);
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //       toast.error(error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     console.log("Lawyers:", lawyers); // Debugging line
// //     setFilterLawyer(
// //       speciality
// //         ? lawyers.filter((lawyer) => lawyer.speciality === speciality)
// //         : lawyers
// //     );
// //   }, [lawyers, speciality]);

// //   useEffect(() => {
// //     getLawyersData();
// //   }, []);

// //   useEffect(() => {
// //     if (token) {
// //       loadUserProfileData();
// //     }
// //   }, [token]);

// //   const value = {
// //     lawyers,
// //     getLawyersData,
// //     currencySymbol,
// //     backendUrl,
// //     token,
// //     setToken,
// //     userData,
// //     setUserData,
// //     loadUserProfileData,
// //   };

// //   return (
// //     <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
// //   );
// // };

// // export default AppContextProvider;

// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";

// export const AppContext = createContext();

// const AppContextProvider = (props) => {
//   const currencySymbol = "₹";
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const [lawyers, setLawyers] = useState([]); // Holds the list of lawyers
//   const [token, setToken] = useState(
//     localStorage.getItem("token") ? localStorage.getItem("token") : ""
//   );
//   const [userData, setUserData] = useState(null); // Holds user profile data

//   // Fetch lawyers from API
//   const getLawyersData = async () => {
//     try {
//       const { data } = await axios.get(`${backendUrl}/api/lawyer/list`); // Fetch lawyers
//       if (data.success) {
//         setLawyers(data.lawyers); // Store the lawyers data in state
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching lawyers:", error);
//       toast.error("Failed to load lawyers. Please try again.");
//     }
//   };

//   // Fetch user profile data
//   const loadUserProfileData = async () => {
//     try {
//       const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
//         headers: { token },
//       });

//       if (data.success) {
//         setUserData(data.userData); // Store user data in state
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching user profile:", error);
//       toast.error("Failed to load user profile. Please try again.");
//     }
//   };

//   // Load lawyers data when the component mounts
//   useEffect(() => {
//     getLawyersData();
//   }, []);

//   // Load user profile data if a token exists
//   useEffect(() => {
//     if (token) {
//       loadUserProfileData();
//     }
//   }, [token]);

//   // Provide context values
//   const value = {
//     lawyers, // List of lawyers
//     getLawyersData, // Function to refresh lawyers data
//     currencySymbol,
//     backendUrl,
//     token,
//     setToken,
//     userData,
//     setUserData,
//     loadUserProfileData,
//   };

//   return (
//     <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
//   );
// };

// export default AppContextProvider;



import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "₹";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [lawstudents, setLawstudents] = useState([]); // Holds the list of law students
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [userData, setUserData] = useState(null); // Holds user profile data

  // Fetch law students from API
  const getLawstudentsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/lawstudent/list`); // Fetch law students
      if (data.success) {
        setLawstudents(data.lawstudents); // Store the law students data in state
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching law students:", error);
      toast.error("Failed to load law students. Please try again.");
    }
  };

  // Fetch user profile data
  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
        headers: { token },
      });

      if (data.success) {
        setUserData(data.userData); // Store user data in state
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      toast.error("Failed to load user profile. Please try again.");
    }
  };

  // Load law students data when the component mounts
  useEffect(() => {
    getLawstudentsData();
  }, []);

  // Load user profile data if a token exists
  useEffect(() => {
    if (token) {
      loadUserProfileData();
    }
  }, [token]);

  // Provide context values
  const value = {
    lawstudents, // List of law students
    getLawstudentsData, // Function to refresh law students data
    currencySymbol,
    backendUrl,
    token,
    setToken,
    userData,
    setUserData,
    loadUserProfileData,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
