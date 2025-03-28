// // import React from "react";
// // import "./Profile.css";
// // import lawyerPhoto from "../assets/lawyerphoto.jpg";

// // const Profile = () => {
// //   const lawyerData = {
// //     name: "Sharwani Pandey",
// //     email: "sharwanipandey@gmail.com",
// //     specialization: "Criminal Law",
// //     experience: "10 Years",
// //     address: "123A Banaras Road, Uttar Pradesh",
// //     contact: "+91 9610482090",
// //     profileImage: lawyerPhoto,
// //   };

// //   return (
// //     <div className="profile-container">
// //       <div className="profile-header">
// //         <img
// //           src={lawyerData.profileImage}
// //           alt="Lawyer Profile"
// //           className="profile-image"
// //         />
// //         <h1 className="text-xl font-bold">{lawyerData.name}</h1>
// //         <p className="text-gray-600">{lawyerData.specialization}</p>
// //       </div>

// //       <div className="profile-details">
// //         <h2 className="text-lg font-semibold">Profile Details</h2>
// //         <p><strong>Email:</strong> {lawyerData.email}</p>
// //         <p><strong>Experience:</strong> {lawyerData.experience}</p>
// //         <p><strong>Address:</strong> {lawyerData.address}</p>
// //         <p><strong>Contact:</strong> {lawyerData.contact}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;

// import { useEffect, useState } from "react";
// import "./Profile.css";
// import lawyerPhoto from "../assets/lawyerphoto.jpg";

// const Profile = () => {
//   const [lawyerData, setLawyerData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = localStorage.getItem("lawyerToken");

//       if (!token) {
//         setError("User not authenticated");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(
//           "http://localhost:4001/api/lawyers/profile",
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${token}`,
//               Accept: "application/json",
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const data = await response.json();

//         // if (!response.ok) {
//         //   throw new Error(data.error || "Failed to fetch profile");
//         // }

//         if (!response.ok) {
//           const text = await response.text(); // Check if it's HTML
//           if (text.startsWith("<!DOCTYPE html>")) {
//             throw new Error("Unexpected HTML response, check backend.");
//           } else {
//             throw new Error(text || "Failed to fetch profile");
//           }
//         }
//         setLawyerData(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (loading) return <p>Loading profile...</p>;
//   if (error) return <p className="error">{error}</p>;

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <img
//           src={lawyerPhoto} // Keep default image or allow upload
//           alt="Lawyer Profile"
//           className="profile-image"
//         />
//         <h1 className="text-xl font-bold">{lawyerData.name}</h1>
//         <p className="text-gray-600">{lawyerData.areaOfPractice}</p>
//       </div>

//       <div className="profile-details">
//         <h2 className="text-lg font-semibold">Profile Details</h2>
//         <p>
//           <strong>Email:</strong> {lawyerData.email}
//         </p>
//         <p>
//           <strong>Experience:</strong> {lawyerData.yearsOfExperience} years
//         </p>
//         <p>
//           <strong>Phone:</strong> {lawyerData.phoneNumber}
//         </p>
//         <p>
//           <strong>Bar Council ID:</strong> {lawyerData.barCouncilId}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import { useEffect, useState } from "react";
import axios from "axios";

const LawyerProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [lawyerData, setLawyerData] = useState(null);

  useEffect(() => {
    const fetchLawyerProfile = async () => {
      try {
        const lawyerToken = localStorage.getItem("lawyerToken"); // ✅ Fetch lawyer token
        if (!lawyerToken) {
          alert("No authentication token found. Please log in.");
          return;
        }
        console.log("Lawyer Token:", localStorage.getItem("lawyerToken"));

        const response = await axios.get(
          "http://localhost:4001/api/lawyers/profile",
          {
            headers: { Authorization: `Bearer ${lawyerToken}` },
          }
        );

        setLawyerData(response.data); // ✅ Store lawyer profile data
      } catch (error) {
        console.error(
          "Error fetching lawyer profile:",
          error.response?.data || error
        );
      }
    };

    fetchLawyerProfile();
  }, []);

  if (!lawyerData) {
    return <p>Loading lawyer profile...</p>;
  }

  return (
    <div>
      <h2>Welcome, {lawyerData.name}</h2>
      <p>Email: {lawyerData.email}</p>
      <p>Bar council ID: {lawyerData.barCouncilId} </p>
      <p>Year Of Experience: {lawyerData.yearsOfExperience}</p>
      <p>Phone: {lawyerData.phoneNumber || "Not provided"}</p>
      <p>Specialization: {lawyerData.areaOfPractice || "N/A"}</p>

      <button onClick={() => setIsEdit(!isEdit)}>
        {isEdit ? "Cancel" : "Edit"}
      </button>

      {isEdit && (
        <button onClick={() => console.log("Update function here")}>
          Save
        </button>
      )}
    </div>
  );
};

export default LawyerProfile;
