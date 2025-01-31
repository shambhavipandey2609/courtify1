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

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "₹";

  // Mock lawyers data
  const mockLawyers = [
    {
      _id: "1",
      name: "John Doe",
      speciality: "Criminal Law",
      available: true,
      image: "https://via.placeholder.com/150",
    },
    {
      _id: "2",
      name: "Jane Smith",
      speciality: "Corporate Law",
      available: false,
      image: "https://via.placeholder.com/150",
    },
    {
      _id: "3",
      name: "Alice Johnson",
      speciality: "Family Law",
      available: true,
      image: "https://via.placeholder.com/150",
    },
    {
      _id: "4",
      name: "Bob Brown",
      speciality: "Immigration Law",
      available: true,
      image: "https://via.placeholder.com/150",
    },
    {
      _id: "5", // New lawyer entry
      name: "Emily Davis",
      speciality: "Intellectual Property Law",
      available: true,
      image: "https://via.placeholder.com/150",
    },
  ];

  const [lawyers, setLawyers] = useState(mockLawyers); // Use mock data
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [userData, setUserData] = useState(null);

  // Provide context values
  const value = {
    lawyers, // Use mock lawyers data
    currencySymbol,
    token,
    setToken,
    userData,
    setUserData,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
