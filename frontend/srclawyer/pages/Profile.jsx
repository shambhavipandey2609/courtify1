import React from "react";

const Profile = () => {
  const lawyerData = {
    name: "John Doe",
    email: "johndoe@example.com",
    specialization: "Criminal Law",
    experience: "10 Years",
    address: "123 Main Street, City, State",
    contact: "+1 212-456-7890",
    profileImage: "https://via.placeholder.com/150", // Placeholder image
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
      <div className="flex items-center gap-6">
        <img
          src={lawyerData.profileImage}
          alt="Lawyer Profile"
          className="w-32 h-32 rounded-full border"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{lawyerData.name}</h1>
          <p className="text-gray-600">{lawyerData.specialization}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Profile Details</h2>
        <p><strong>Email:</strong> {lawyerData.email}</p>
        <p><strong>Experience:</strong> {lawyerData.experience}</p>
        <p><strong>Address:</strong> {lawyerData.address}</p>
        <p><strong>Contact:</strong> {lawyerData.contact}</p>
      </div>
    </div>
  );
};

export default Profile;
