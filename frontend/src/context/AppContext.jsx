// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";

// // Create Context
// export const AppContext = createContext();

// const AppContextProvider = (props) => {
//   const currencySymbol = "₹";
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const [lawyers, setLawyers] = useState([]); // Holds the list of lawyers
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [userData, setUserData] = useState(null); // Holds user profile data

//   // Fetch lawyers from API
//   const getLawyersData = async () => {
//     try {
//       const { data } = await axios.get(`${backendUrl}/api/lawyer/list`);
//       if (data.success) {
//         setLawyers(data.lawyers); // Store the real data from MongoDB
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
//         setUserData(data.userData);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching user profile:", error);
//       toast.error("Failed to load user profile. Please try again.");
//     }
//   };

//   // Fetch lawyers when the component mounts
//   useEffect(() => {
//     getLawyersData();
//   }, []);

//   // Fetch user profile when token changes
//   useEffect(() => {
//     if (token) {
//       loadUserProfileData();
//     }
//   }, [token]);

//   // Provide context values to other components
//   const value = {
//     lawyers, // List of lawyers from MongoDB
//     getLawyersData, // Function to refresh lawyers list
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

// Create Context
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "₹";
  const backendUrl = "http://localhost:4001"; // Replace with your backend URL

  const [lawyers, setLawyers] = useState([]); // Holds the list of lawyers
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userData, setUserData] = useState(null); // Holds user profile data

  // Fetch lawyers from API
  const getLawyersData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/lawyers/list`);
      if (data.success) {
        setLawyers(data.lawyers); // Store the real data from MongoDB
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching lawyers:", error);
      toast.error("Failed to load lawyers. Please try again.");
    }
  };

  // Fetch user profile data
  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/lawyers/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      toast.error("Failed to load user profile. Please try again.");
    }
  };

  // Fetch lawyers when the component mounts
  useEffect(() => {
    getLawyersData();
  }, []);

  // Fetch user profile when token changes
  useEffect(() => {
    if (token) {
      loadUserProfileData();
    }
  }, [token]);

  // Provide context values to other components
  const value = {
    lawyers, // List of lawyers from MongoDB
    getLawyersData, // Function to refresh lawyers list
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
