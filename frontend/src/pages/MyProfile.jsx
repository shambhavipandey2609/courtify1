// // import React, { useState } from "react";
// // import { assets } from "../assets/assets";

// // const MyProfile = () => {
// //   const [isEdit, setIsEdit] = useState(false);

// //   const [userData, setUserData] = useState({
// //     name: "Richard James",
// //     image: assets.profile_pic,
// //     email: "richardjames@gmail.com",
// //     phone: "+1  123 456 7890",
// //     address: {
// //       line1: "57th Cross, Richmond",
// //       line2: "Circle, Church Road, London",
// //     },
// //     gender: "Male",
// //     dob: "2000-01-20",
// //   });

// //   return (
// //     <div className="max-w-lg flex flex-col gap-2 text-sm">
// //       <img className="w-36 rounded" src={userData.image} alt="" />

// //       {isEdit ? (
// //         <input
// //           className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
// //           type="text"
// //           onChange={(e) =>
// //             setUserData((prev) => ({ ...prev, name: e.target.value }))
// //           }
// //           value={userData.name}
// //         />
// //       ) : (
// //         <p className="font-medium text-3xl text-neutral-800 mt-4">
// //           {userData.name}
// //         </p>
// //       )}

// //       <hr className="bg-zinc-400 h-[1px] border-none" />
// //       <div>
// //         <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
// //         <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
// //           <p className="font-medium">Email id:</p>
// //           <p className="text-blue-500">{userData.email}</p>
// //           <p className="font-medium">Phone:</p>
// //           {isEdit ? (
// //             <input
// //               className="bg-gray-100 max-w-52"
// //               type="text"
// //               onChange={(e) =>
// //                 setUserData((prev) => ({ ...prev, phone: e.target.value }))
// //               }
// //               value={userData.phone}
// //             />
// //           ) : (
// //             <p className="text-blue-400">{userData.phone}</p>
// //           )}
// //           <p className="font-medium">Address:</p>
// //           {isEdit ? (
// //             <p>
// //               <input
// //                 className="bg-gray-50"
// //                 type="text"
// //                 onChange={(e) =>
// //                   setUserData((prev) => ({
// //                     ...prev,
// //                     address: { ...prev.address, line1: e.target.value },
// //                   }))
// //                 }
// //                 value={userData.address.line1}
// //               />
// //               <br />
// //               <input
// //                 className="bg-gray-50"
// //                 type="text"
// //                 onChange={(e) =>
// //                   setUserData((prev) => ({
// //                     ...prev,
// //                     address: { ...prev.address, line2: e.target.value },
// //                   }))
// //                 }
// //                 value={userData.address.line2}
// //               />
// //             </p>
// //           ) : (
// //             <p className="text-gray-500">
// //               {userData.address.line1} <br /> {userData.address.line2}
// //             </p>
// //           )}
// //         </div>
// //       </div>
// //       <div>
// //         <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
// //         <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
// //           <p className="font-medium">Gender:</p>
// //           {isEdit ? (
// //             <select
// //               className="max-w-20 bg-gray-100"
// //               onChange={(e) =>
// //                 setUserData((prev) => ({ ...prev, gender: e.target.value }))
// //               }
// //               value={userData.gender}
// //             >
// //               <option value="Male">Male</option>
// //               <option value="Female">Female</option>
// //             </select>
// //           ) : (
// //             <p className="text-gray-400">{userData.gender}</p>
// //           )}
// //           <p className="font-medium">Birthday:</p>
// //           {isEdit ? (
// //             <input
// //               className="max-w-28 bg-gray-100"
// //               type="date"
// //               onChange={(e) =>
// //                 setUserData((prev) => ({ ...prev, dob: e.target.value }))
// //               }
// //               value={userData.dob}
// //             />
// //           ) : (
// //             <p className="text-gray-400">{userData.dob}</p>
// //           )}
// //         </div>
// //       </div>
// //       <div className="mt-10">
// //         {isEdit ? (
// //           <button
// //             onClick={() => setIsEdit(false)}
// //             className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
// //           >
// //             Save information
// //           </button>
// //         ) : (
// //           <button
// //             onClick={() => setIsEdit(true)}
// //             className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
// //           >
// //             Edit
// //           </button>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MyProfile;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { assets } from "../assets/assets";

// const MyProfile = () => {
//   const [isEdit, setIsEdit] = useState(false);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           alert("No authentication token found. Please log in.");
//           return;
//         }

//         const response = await axios.get("http://localhost:4000/api/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setUserData(response.data); // ✅ Set user data from backend response
//       } catch (error) {
//         console.error("Error fetching profile:", error);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   if (!userData) {
//     return <p>Loading profile...</p>;
//   }

//   return (
//     <div className="max-w-lg flex flex-col gap-2 text-sm">
//       <img className="w-36 rounded" src={assets.profile_pic} alt="Profile" />

//       {isEdit ? (
//         <input
//           className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
//           type="text"
//           onChange={(e) =>
//             setUserData((prev) => ({ ...prev, name: e.target.value }))
//           }
//           value={userData.name}
//         />
//       ) : (
//         <p className="font-medium text-3xl text-neutral-800 mt-4">
//           {userData.name}
//         </p>
//       )}

//       <hr className="bg-zinc-400 h-[1px] border-none" />
//       <div>
//         <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
//         <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
//           <p className="font-medium">Email:</p>
//           <p className="text-blue-500">{userData.email}</p>
//           <p className="font-medium">Phone:</p>
//           {isEdit ? (
//             <input
//               className="bg-gray-100 max-w-52"
//               type="text"
//               onChange={(e) =>
//                 setUserData((prev) => ({ ...prev, phone: e.target.value }))
//               }
//               value={userData.phone || ""}
//             />
//           ) : (
//             <p className="text-blue-400">{userData.phone || "Not provided"}</p>
//           )}
//           <p className="font-medium">Address:</p>
//           {isEdit ? (
//             <p>
//               <input
//                 className="bg-gray-50"
//                 type="text"
//                 onChange={(e) =>
//                   setUserData((prev) => ({
//                     ...prev,
//                     address: { ...prev.address, line1: e.target.value },
//                   }))
//                 }
//                 value={userData.address?.line1 || ""}
//               />
//               <br />
//               <input
//                 className="bg-gray-50"
//                 type="text"
//                 onChange={(e) =>
//                   setUserData((prev) => ({
//                     ...prev,
//                     address: { ...prev.address, line2: e.target.value },
//                   }))
//                 }
//                 value={userData.address?.line2 || ""}
//               />
//             </p>
//           ) : (
//             <p className="text-gray-500">
//               {userData.address || "No address provided"}
//             </p>
//           )}
//         </div>
//       </div>

//       <div>
//         <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
//         <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
//           <p className="font-medium">Gender:</p>
//           <p className="text-gray-400">{userData.gender || "N/A"}</p>
//           <p className="font-medium">Birthday:</p>
//           <p className="text-gray-400">{userData.dob || "N/A"}</p>
//         </div>
//       </div>

//       <div className="mt-10">
//         {isEdit ? (
//           <button
//             onClick={() => setIsEdit(false)}
//             className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
//           >
//             Save information
//           </button>
//         ) : (
//           <button
//             onClick={() => setIsEdit(true)}
//             className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
//           >
//             Edit
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyProfile;

import { useEffect, useState } from "react";
import axios from "axios";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("No authentication token found. Please log in.");
          return;
        }

        const response = await axios.get("http://localhost:4000/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserData(response.data); // ✅ Set user data from backend response
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  // const handleSave = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       alert("No authentication token found. Please log in.");
  //       return;
  //     }

  //     const response = await axios.put(
  //       "http://localhost:4000/api/profile",
  //       {
  //         name: userData.name,
  //         phone: userData.phone,
  //         address: userData.address,
  //         gender: userData.gender,
  //         dob: userData.dob,
  //       },
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     );

  //     alert(response.data.message); // ✅ Show success message
  //     setIsEdit(false);
  //   } catch (error) {
  //     alert("Failed to update profile.");
  //     console.error("Error updating profile:", error);
  //   }
  // };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No authentication token found. Please log in.");
        return;
      }

      const response = await axios.put(
        "http://localhost:4000/api/profile",
        {
          name: userData.name,
          phone: userData.phone,
          address: userData.address, // ✅ Ensure this is being sent correctly
          gender: userData.gender,
          dob: userData.dob,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert(response.data.message); // ✅ Show success message
      setIsEdit(false);
    } catch (error) {
      console.error("Error updating profile:", error.response?.data || error);
      alert(
        "Failed to update profile. " + (error.response?.data?.message || "")
      );
    }
  };

  if (!userData) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={assets.profile_pic} alt="Profile" />

      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={userData.name}
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              value={userData.phone || ""}
            />
          ) : (
            <p className="text-blue-400">{userData.phone || "Not provided"}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-full"
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, address: e.target.value }))
              }
              value={userData.address || ""}
            />
          ) : (
            <p className="text-gray-500">
              {userData.address || "No address provided"}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender || "N/A"}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-100"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-400">{userData.dob || "N/A"}</p>
          )}
        </div>
      </div>

      <div className="mt-10">
        {isEdit ? (
          <button
            onClick={handleSave}
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
          >
            Save information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
