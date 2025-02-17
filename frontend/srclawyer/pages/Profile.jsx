// import React from "react";
// import "./Profile.css";
// import lawyerPhoto from "../assets/lawyerphoto.jpg";

// const Profile = () => {
//   const lawyerData = {
//     name: "Sharwani Pandey",
//     email: "sharwanipandey@gmail.com",
//     specialization: "Criminal Law",
//     experience: "10 Years",
//     address: "123A Banaras Road, Uttar Pradesh",
//     contact: "+91 9610482090",
//     profileImage: lawyerPhoto,
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <img
//           src={lawyerData.profileImage}
//           alt="Lawyer Profile"
//           className="profile-image"
//         />
//         <h1 className="text-xl font-bold">{lawyerData.name}</h1>
//         <p className="text-gray-600">{lawyerData.specialization}</p>
//       </div>

//       <div className="profile-details">
//         <h2 className="text-lg font-semibold">Profile Details</h2>
//         <p><strong>Email:</strong> {lawyerData.email}</p>
//         <p><strong>Experience:</strong> {lawyerData.experience}</p>
//         <p><strong>Address:</strong> {lawyerData.address}</p>
//         <p><strong>Contact:</strong> {lawyerData.contact}</p>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import "./Profile.css";
import lawyerPhoto from "../assets/lawyerphoto.jpg";

const Profile = () => {
  const [lawyerData, setLawyerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("lawyerToken");

      if (!token) {
        setError("User not authenticated");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:4000/api/lawyers/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch profile");
        }

        setLawyerData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={lawyerPhoto} // Keep default image or allow upload
          alt="Lawyer Profile"
          className="profile-image"
        />
        <h1 className="text-xl font-bold">{lawyerData.name}</h1>
        <p className="text-gray-600">{lawyerData.areaOfPractice}</p>
      </div>

      <div className="profile-details">
        <h2 className="text-lg font-semibold">Profile Details</h2>
        <p>
          <strong>Email:</strong> {lawyerData.email}
        </p>
        <p>
          <strong>Experience:</strong> {lawyerData.yearsOfExperience} years
        </p>
        <p>
          <strong>Phone:</strong> {lawyerData.phoneNumber}
        </p>
        <p>
          <strong>Bar Council ID:</strong> {lawyerData.barCouncilId}
        </p>
      </div>
    </div>
  );
};

export default Profile;
