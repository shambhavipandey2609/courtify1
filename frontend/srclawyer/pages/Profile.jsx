import React from "react";
import "./Profile.css";
import lawyerPhoto from "../assets/lawyerphoto.jpg";

const Profile = () => {
  const lawyerData = {
    name: "Sharwani Pandey",
    email: "sharwanipandey@gmail.com",
    specialization: "Criminal Law",
    experience: "10 Years",
    address: "123A Banaras Road, Uttar Pradesh",
    contact: "+91 9610482090",
    profileImage: lawyerPhoto,
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={lawyerData.profileImage}
          alt="Lawyer Profile"
          className="profile-image"
        />
        <h1 className="text-xl font-bold">{lawyerData.name}</h1>
        <p className="text-gray-600">{lawyerData.specialization}</p>
      </div>

      <div className="profile-details">
        <h2 className="text-lg font-semibold">Profile Details</h2>
        <p><strong>Email:</strong> {lawyerData.email}</p>
        <p><strong>Experience:</strong> {lawyerData.experience}</p>
        <p><strong>Address:</strong> {lawyerData.address}</p>
        <p><strong>Contact:</strong> {lawyerData.contact}</p>
      </div>
    </div>
  );
};

export default Profile;
