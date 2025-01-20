// // import React, { useContext, useEffect, useState } from "react";
// // import { AppContext } from "../context/AppContext";
// // import { useNavigate, useParams } from "react-router-dom";

// // const Lawyers = () => {
// //   const { speciality } = useParams();
// //   const [filterDoc, setFilterDoc] = useState([]);
// //   const [showFilter, setShowFilter] = useState(false);
// //   const navigate = useNavigate();
// //   const { lawyers } = useContext(AppContext);

// //   // Function to filter lawyers based on specialty
// //   const applyFilter = () => {
// //     const filtered = speciality
// //       ? lawyers.filter((lawyer) => lawyer.speciality === speciality)
// //       : lawyers;
// //     setFilterDoc(filtered);
// //   };

// //   useEffect(() => {
// //     applyFilter();
// //   }, [lawyers, speciality]);

// //   const specialties = [
// //     "Criminal Lawyer",
// //     "Corporate Lawyer",
// //     "Civil Lawyer",
// //     "Family Lawyer",
// //     "Tax Lawyer",
// //     "Cyber Lawyer",
// //   ];

// //   return (
// //     <div className="px-4 sm:px-8">
// //       <p className="text-gray-600 text-lg">
// //         Browse through the Lawyers specialists.
// //       </p>

// //       <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
// //         {/* Toggle Filter Button for Mobile */}
// //         <button
// //           onClick={() => setShowFilter(!showFilter)}
// //           className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
// //             showFilter ? "bg-primary text-white" : ""
// //           }`}
// //         >
// //           Filters
// //         </button>

// //         {/* Filter Menu */}
// //         <div
// //           className={`flex-col gap-4 text-sm text-gray-600 ${
// //             showFilter ? "flex" : "hidden sm:flex"
// //           }`}
// //         >
// //           {specialties.map((item) => (
// //             <p
// //               key={item}
// //               onClick={() =>
// //                 speciality === item
// //                   ? navigate("/lawyers")
// //                   : navigate(`/lawyers/${item}`)
// //               }
// //               className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
// //                 speciality === item ? "bg-indigo-100 text-black" : ""
// //               }`}
// //             >
// //               {item}
// //             </p>
// //           ))}
// //         </div>

// //         {/* Lawyers Grid */}
// //         <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
// //           {filterDoc.length > 0 ? (
// //             filterDoc.map((item) => (
// //               <div
// //                 onClick={() => {

// //                   navigate(`/appointment/${item._id}`);
// //                   window.scrollTo(0, 0);
// //                 }}
// //                 className="border border-indigo-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
// //                 key={item._id}
// //               >
// //                 <img
// //                   className="bg-indigo-50 w-full h-40 object-cover"
// //                   src={item.image}
// //                   alt={item.name}
// //                 />
// //                 <div className="p-4">
// //                   <div className="flex items-center gap-2 text-sm text-green-500">
// //                     <p className="w-2 h-2 bg-green-500 rounded-full"></p>
// //                     <p>Available</p>
// //                   </div>
// //                   <p className="text-neutral-800 text-lg font-medium">
// //                     {item.name}
// //                   </p>
// //                   <p className="text-zinc-600 text-sm">{item.speciality}</p>
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <p className="text-center text-gray-500 w-full">
// //               No lawyers available for this specialty.
// //             </p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Lawyers;

// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import { useNavigate, useParams } from "react-router-dom";

// const Lawyers = () => {
//   const { speciality } = useParams();
//   const [filterLawyer, setFilterLawyer] = useState([]);
//   const [showFilter, setShowFilter] = useState(false);
//   const navigate = useNavigate();

//   const { lawyers } = useContext(AppContext);

//   const applyFilter = () => {
//     if (speciality) {
//       setFilterLawyer(
//         lawyers.filter((lawyer) => lawyer.speciality === speciality)
//       );
//     } else {
//       setFilterLawyer(lawyers);
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [lawyers, speciality]);

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
//           <p
//             onClick={() =>
//               speciality === "Criminal Lawyer"
//                 ? navigate("/Lawyers")
//                 : navigate("/Lawyers/Criminal Lawyer")
//             }
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//               speciality === "Criminal Lawyer"
//                 ? "bg-indigo-100 text-black "
//                 : ""
//             }`}
//           >
//             Criminal Lawyer
//           </p>
//           <p
//             onClick={() =>
//               speciality === "Corporate Lawyer"
//                 ? navigate("/lawyers")
//                 : navigate("/lawyers/Corporate Lawyer")
//             }
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//               speciality === "Corporate Lawyer"
//                 ? "bg-indigo-100 text-black "
//                 : ""
//             }`}
//           >
//             Corporate Lawyer
//           </p>
//           <p
//             onClick={() =>
//               speciality === "Civil Lawyer"
//                 ? navigate("/Lawyers")
//                 : navigate("/Lawyers/Civil Lawyer")
//             }
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//               speciality === "Civil Lawyer" ? "bg-indigo-100 text-black " : ""
//             }`}
//           >
//             Civil Lawyer
//           </p>
//           <p
//             onClick={() =>
//               speciality === "Family Lawyer"
//                 ? navigate("/Lawyers")
//                 : navigate("/Lawyers/Family Lawyer")
//             }
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//               speciality === "Family Lawyer" ? "bg-indigo-100 text-black " : ""
//             }`}
//           >
//             Family Lawyer
//           </p>
//           <p
//             onClick={() =>
//               speciality === "Tax Lawyer"
//                 ? navigate("/Lawyers")
//                 : navigate("/Lawyers/Tax Lawyer")
//             }
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//               speciality === "Tax Lawyer" ? "bg-indigo-100 text-black " : ""
//             }`}
//           >
//             Tax Lawyer
//           </p>
//           <p
//             onClick={() =>
//               speciality === "Cyber Lawyer"
//                 ? navigate("/Lawyers")
//                 : navigate("/Lawyers/Cyber Lawyer")
//             }
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//               speciality === "Cyber Lawyer" ? "bg-indigo-100 text-black " : ""
//             }`}
//           >
//             Cyber Lawyer
//           </p>
//         </div>
//         <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
//           {filterLawyer.map((item, index) => (
//             <div
//               onClick={() => {
//                 navigate(`/appointment/${item._id}`);
//                 window.scrollTo(0, 0);
//               }}
//               className="border border-indigo-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
//               key={index}
//             >
//               <img className="bg-indigo-50" src={item.image} alt="" />
//               <div className="p-4">
//                 <div className="flex items-center gap-2 text-sm text-center text-green-500">
//                   <p className="w-2 h-2 bg-green-500 rounded-full"></p>
//                   <p>Available</p>
//                 </div>
//                 <p className="text-neutral-800 text-lg font-medium">
//                   {item.name}
//                 </p>
//                 <p className="text-zinc-600 text-sm">{item.speciality}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Lawyers;
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";

const Lawyers = () => {
  const { speciality } = useParams();
  const [filterLawyer, setFilterLawyer] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const { lawyers } = useContext(AppContext);

  useEffect(() => {
    setFilterLawyer(
      speciality
        ? lawyers.filter((lawyer) => lawyer.speciality === speciality)
        : lawyers
    );
  }, [lawyers, speciality]);

  const specialities = [
    "Criminal Lawyer",
    "Corporate Lawyer",
    "Civil Lawyer",
    "Family Lawyer",
    "Tax Lawyer",
    "Cyber Lawyer",
  ];

  return (
    <div>
      <p className="text-gray-600">Browse through the Lawyers specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
        >
          Filters
        </button>
        <div
          className={`flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          {specialities.map((spec) => (
            <p
              key={spec}
              onClick={() =>
                speciality === spec
                  ? navigate("/lawyers")
                  : navigate(`/lawyers/${spec}`)
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === spec ? "bg-indigo-100 text-black" : ""
              }`}
            >
              {spec}
            </p>
          ))}
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterLawyer.map((lawyer) => (
            <div
              key={lawyer._id}
              onClick={() => {
                navigate(`/appointment/${lawyer._id}`);
                window.scrollTo(0, 0);
              }}
              className="border border-indigo-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img
                className="bg-indigo-50"
                src={lawyer.image}
                alt={lawyer.name}
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-neutral-800 text-lg font-medium">
                  {lawyer.name}
                </p>
                <p className="text-zinc-600 text-sm">{lawyer.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lawyers;
