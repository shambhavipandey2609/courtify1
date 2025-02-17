// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";

// export const AppContext = createContext();

// const AppContextProvider = (props) => {
//   const currencySymbol = "₹";

//   // Mock lawyers data
//   const mockLawyers = [
//     {
//       _id: "1",
//       name: "John Doe",
//       speciality: "Criminal Law",
//       available: true,
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       _id: "2",
//       name: "Jane Smith",
//       speciality: "Corporate Law",
//       available: false,
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       _id: "3",
//       name: "Alice Johnson",
//       speciality: "Family Law",
//       available: true,
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       _id: "4",
//       name: "Bob Brown",
//       speciality: "Immigration Law",
//       available: true,
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       _id: "5", // New lawyer entry
//       name: "Emily Davis",
//       speciality: "Intellectual Property Law",
//       available: true,
//       image: "https://via.placeholder.com/150",
//     },
//   ];

//   const [lawyers, setLawyers] = useState(mockLawyers); // Use mock data
//   const [token, setToken] = useState(
//     localStorage.getItem("token") ? localStorage.getItem("token") : ""
//   );
//   const [userData, setUserData] = useState(null);

//   // Provide context values
//   const value = {
//     lawyers, // Use mock lawyers data
//     currencySymbol,
//     token,
//     setToken,
//     userData,
//     setUserData,
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
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [lawyers, setLawyers] = useState([]); // Holds the list of lawyers
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userData, setUserData] = useState(null); // Holds user profile data

  // Fetch lawyers from API
  const getLawyersData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/lawyer/list`);
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
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
        headers: { token },
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
