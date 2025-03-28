// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import { useNavigate, useParams } from "react-router-dom";

// const Lawyers = () => {
//   const { speciality } = useParams();
//   const [filterLawyer, setFilterLawyer] = useState([]);
//   const [showFilter, setShowFilter] = useState(false);
//   const navigate = useNavigate();

//   const { lawyers } = useContext(AppContext);

//   useEffect(() => {
//     setFilterLawyer(
//       speciality
//         ? lawyers.filter((lawyer) => lawyer.speciality === speciality)
//         : lawyers
//     );
//   }, [lawyers, speciality]);

//   const specialities = [
//     "Criminal Lawyer",
//     "Corporate Lawyer",
//     "Civil Lawyer",
//     "Family Lawyer",
//     "Tax Lawyer",
//     "Cyber Lawyer",
//   ];

//   return (
//     <div>
//       <p className="text-gray-600">Browse through the Lawyers specialist.</p>
//       <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
//         <button
//           onClick={() => setShowFilter(!showFilter)}
//           className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
//             showFilter ? "bg-primary text-white" : ""
//           }`}
//         >
//           Filters
//         </button>
//         <div
//           className={`flex-col gap-4 text-sm text-gray-600 ${
//             showFilter ? "flex" : "hidden sm:flex"
//           }`}
//         >
//           {specialities.map((spec) => (
//             <p
//               key={spec}
//               onClick={() =>
//                 speciality === spec
//                   ? navigate("/lawyers")
//                   : navigate(`/lawyers/${spec}`)
//               }
//               className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//                 speciality === spec ? "bg-indigo-100 text-black" : ""
//               }`}
//             >
//               {spec}
//             </p>
//           ))}
//         </div>
//         <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
//           {filterLawyer.map((lawyer) => (
//             <div
//               key={lawyer._id}
//               onClick={() => {
//                 navigate(`/appointment/${lawyer._id}`);
//                 window.scrollTo(0, 0);
//               }}
//               className="border border-indigo-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
//             >
//               <img
//                 className="bg-indigo-50"
//                 src={lawyer.image}
//                 alt={lawyer.name}
//               />
//               <div className="p-4">
//                 <div className="flex items-center gap-2 text-sm text-green-500">
//                   <p className="w-2 h-2 bg-green-500 rounded-full"></p>
//                   <p>Available</p>
//                 </div>
//                 <p className="text-neutral-800 text-lg font-medium">
//                   {lawyer.name}
//                 </p>
//                 <p className="text-zinc-600 text-sm">{lawyer.speciality}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Lawyers;

/////////prev code abhi wala

// import React, { useContext } from "react";
// import { AppContext } from "../context/AppContext";

// const Lawyers = () => {
//   const { lawyers } = useContext(AppContext);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Available Lawyers</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {lawyers.map((lawyer) => (
//           <div
//             key={lawyer._id}
//             className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//           >
//             <h3 className="text-xl font-semibold">{lawyer.name}</h3>
//             <p className="text-gray-600">{lawyer.areaOfPractice}</p>
//             <p className="text-gray-600">
//               {lawyer.yearsOfExperience} years of experience
//             </p>
//             <p className="text-gray-600">{lawyer.phoneNumber}</p>
//             <p className="text-gray-600">{lawyer.email}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Lawyers;

// import React, { useContext } from "react";
// import { AppContext } from "../context/AppContext";

// const Lawyers = () => {
//   const { lawyers } = useContext(AppContext);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Available Lawyers</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {lawyers.map((lawyer) => (
//           <div
//             key={lawyer._id}
//             className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//           >
//             {lawyer.photo && (
//               <img
//                 src={lawyer.photo}
//                 alt={`${lawyer.name}'s profile`}
//                 className="w-full h-40 object-cover rounded-lg mb-2"
//               />
//             )}
//             <h3 className="text-xl font-semibold">{lawyer.name}</h3>
//             <p className="text-gray-600">{lawyer.areaOfPractice}</p>
//             <p className="text-gray-600">
//               {lawyer.yearsOfExperience} years of experience
//             </p>
//             <p className="text-gray-600">{lawyer.phoneNumber}</p>
//             <p className="text-gray-600">{lawyer.email}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Lawyers;

// import React, { useContext } from "react";
// import { AppContext } from "../context/AppContext";

// const Lawyers = () => {
//   const { lawyers } = useContext(AppContext);
//   const BASE_URL = "http://localhost:4001"; // Backend URL

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Available Lawyers</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {lawyers.map((lawyer) => (
//           <div
//             key={lawyer._id}
//             className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//           >
//             {lawyer.photo && (
//               <img
//                 src={`${BASE_URL}${lawyer.photo}`} // Fix: Add backend URL
//                 alt={`${lawyer.name}'s profile`}
//                 className="w-full h-40 object-cover rounded-lg mb-2"
//                 onError={(e) => (e.target.src = "/default-profile.png")} // Fallback if image fails
//               />
//             )}
//             <h3 className="text-xl font-semibold">{lawyer.name}</h3>
//             <p className="text-gray-600">{lawyer.areaOfPractice}</p>
//             <p className="text-gray-600">
//               {lawyer.yearsOfExperience} years of experience
//             </p>
//             <p className="text-gray-600">{lawyer.phoneNumber}</p>
//             <p className="text-gray-600">{lawyer.email}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Lawyers;

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Lawyers = () => {
  const { lawyers } = useContext(AppContext);
  const navigate = useNavigate();
  // const BASE_URL = "http://localhost:4001"; // Backend URL
  // const CLOUDINARY_BASE_URL =
  // "https://res.cloudinary.com/dxvxqtpew/image/upload/";

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Available Lawyers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {lawyers.map((lawyer) => (
          <div
            key={lawyer._id}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => {
              navigate(`/appointment/${lawyer._id}`);
              window.scrollTo(0, 0);
            }} // <-- This ensures the click redirects
          >
            {/* <img
              src={`https://res.cloudinary.com/dlqsemxcz/image/upload/${lawyer.photo}`}
              alt={`${lawyer.name}'s profile`}
              className="w-full h-40 object-cover rounded-lg mb-2"
              onError={(e) => (e.target.src = "/default-profile.png")}
            /> */}
            {/* <img
              src={
                lawyer.photo
                  ? `${CLOUDINARY_BASE_URL}${lawyer.photo}`
                  : "/default-profile.png"
              }
              alt={`${lawyer.name}'s profile`}
              className="w-full h-40 object-cover rounded-lg mb-2"
              onError={(e) => (e.target.src = "/default-profile.png")}
            /> */}
            {/* <img
              src={
                lawyer.photo.startsWith("http")
                  ? lawyer.photo // Use the full URL directly
                  : `https://res.cloudinary.com/dxvxqtpew/image/upload/${lawyer.photo}`
              }
              alt={`${lawyer.name}'s profile`}
              className="w-full h-40 object-cover rounded-lg mb-2"
              onError={(e) => {
                if (e.target.src !== "/default-profile.png") {
                  e.target.src = "/default-profile.png"; // Fallback image
                }
              }} */}
            {/* /> */}
            <img
              src={
                lawyer.photo
                  ? lawyer.photo.startsWith("http") // If it's a full URL, use it directly
                    ? lawyer.photo
                    : `https://res.cloudinary.com/dxvxqtpew/image/upload/${lawyer.photo}`
                  : "/default-profile.png" // If no photo exists, use default
              }
              alt={`${lawyer.name || "Lawyer"}'s profile`}
              className="w-full h-40 object-cover rounded-lg mb-2"
              onError={(e) => {
                if (e.target.src !== "/default-profile.png") {
                  e.target.src = "/default-profile.png"; // Prevent infinite loop on error
                }
              }}
            />

            <h3 className="text-xl font-semibold">{lawyer.name}</h3>
            <p className="text-gray-600">{lawyer.areaOfPractice}</p>
            <p className="text-gray-600">
              {lawyer.yearsOfExperience} years of experience
            </p>
            <p className="text-gray-600">{lawyer.phoneNumber}</p>
            <p className="text-gray-600">{lawyer.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lawyers;
