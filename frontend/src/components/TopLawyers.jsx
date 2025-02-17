// // import React, { useContext } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { AppContext } from "../context/AppContext";

// // const TopLawyers = () => {
// //   const navigate = useNavigate();
// //   const { lawyers } = useContext(AppContext);
// //   console.log(lawyers);
// //   return (
// //     <div className="flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10">
// //       <h1 className="text-3xl font-medium">Top Lawyers to Book</h1>
// //       <p className="sm:w-1/3 text-center text-sm">
// //         Simply browse through our extensive list of trusted lawyers.
// //       </p>
// //       <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
// //         {lawyers.slice(0, 10).map((item, index) => (
// //           <div
// //             onClick={() => {
// //               navigate(`/appointment/${item._id}`);
// //               scrollTo(0, 0);
// //             }}
// //             className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
// //             key={index}
// //           >
// //             <img className="bg-[#EAEFFF]" src={item.image} alt="" />
// //             <div className="p-4">
// //               <div
// //                 className={`flex items-center gap-2 text-sm text-center ${
// //                   item.available ? "text-green-500" : "text-gray-500"
// //                 }`}
// //               >
// //                 <p
// //                   className={`w-2 h-2 rounded-full ${
// //                     item.available ? "bg-green-500" : "bg-gray-500"
// //                   }`}
// //                 ></p>
// //                 <p>{item.available ? "Available" : "Not Available"}</p>
// //               </div>
// //               <p className="text-[#262626] text-lg font-medium">{item.name}</p>
// //               <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <button
// //         onClick={() => {
// //           navigate("/lawyers");
// //           scrollTo(0, 0);
// //         }}
// //         className="bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10"
// //       >
// //         More
// //       </button>
// //     </div>
// //   );
// // };

// // export default TopLawyers;

// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// const TopLawyers = () => {
//   const navigate = useNavigate();
//   const { lawyers } = useContext(AppContext);

//   console.log("Lawyers in TopLawyers:", lawyers); // Check if mock data is available

//   return (
//     <div className="flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10">
//       <h1 className="text-3xl font-medium">Top Lawyers to Book</h1>
//       <p className="sm:w-1/3 text-center text-sm">
//         Simply browse through our extensive list of trusted lawyers.
//       </p>
//       <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
//         {lawyers.slice(0, 10).map((item, index) => (
//           <div
//             onClick={() => {
//               navigate(`/appointment/${item._id}`);
//               scrollTo(0, 0);
//             }}
//             className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
//             key={index}
//           >
//             <img className="bg-[#EAEFFF]" src={item.image} alt={item.name} />
//             <div className="p-4">
//               <div
//                 className={`flex items-center gap-2 text-sm text-center ${
//                   item.available ? "text-green-500" : "text-gray-500"
//                 }`}
//               >
//                 <p
//                   className={`w-2 h-2 rounded-full ${
//                     item.available ? "bg-green-500" : "bg-gray-500"
//                   }`}
//                 ></p>
//                 <p>{item.available ? "Available" : "Not Available"}</p>
//               </div>
//               <p className="text-[#262626] text-lg font-medium">{item.name}</p>
//               <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={() => {
//           navigate("/lawyers");
//           scrollTo(0, 0);
//         }}
//         className="bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10"
//       >
//         More
//       </button>
//     </div>
//   );
// };

// export default TopLawyers;

////////deepseek wala codeeeeee

// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// const TopLawyers = () => {
//   const navigate = useNavigate();
//   const { lawyers } = useContext(AppContext);

//   console.log("Lawyers in TopLawyers:", lawyers); // Check if mock data is available

//   return (
//     <div className="flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10">
//       <h1 className="text-3xl font-medium">Top Lawyers to Book</h1>
//       <p className="sm:w-1/3 text-center text-sm">
//         Simply browse through our extensive list of trusted lawyers.
//       </p>
//       <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
//         {lawyers.slice(0, 10).map((item, index) => (
//           <div
//             onClick={() => {
//               navigate(`/appointment/${item._id}`);
//               scrollTo(0, 0);
//             }}
//             className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
//             key={index}
//           >
//             <img className="bg-[#EAEFFF]" src={item.image} alt={item.name} />
//             <div className="p-4">
//               <div
//                 className={`flex items-center gap-2 text-sm text-center ${
//                   item.available ? "text-green-500" : "text-gray-500"
//                 }`}
//               >
//                 <p
//                   className={`w-2 h-2 rounded-full ${
//                     item.available ? "bg-green-500" : "bg-gray-500"
//                   }`}
//                 ></p>
//                 <p>{item.available ? "Available" : "Not Available"}</p>
//               </div>
//               <p className="text-[#262626] text-lg font-medium">{item.name}</p>
//               <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={() => {
//           navigate("/lawyers");
//           scrollTo(0, 0);
//         }}
//         className="bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10"
//       >
//         More
//       </button>
//     </div>
//   );
// };

// export default TopLawyers;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopLawyers = () => {
  const navigate = useNavigate();
  const { lawyers } = useContext(AppContext);

  console.log("Lawyers in TopLawyers:", lawyers); // Debugging

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10">
      <h1 className="text-3xl font-medium">Top Lawyers to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted lawyers.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {lawyers.length > 0 ? (
          lawyers.slice(0, 10).map((item, index) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                window.scrollTo(0, 0);
              }}
              className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={item._id} // Use `_id` instead of `index` for better performance
            >
              <img className="bg-[#EAEFFF]" src={item.image} alt={item.name} />
              <div className="p-4">
                <div
                  className={`flex items-center gap-2 text-sm text-center ${
                    item.available ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  <p
                    className={`w-2 h-2 rounded-full ${
                      item.available ? "bg-green-500" : "bg-gray-500"
                    }`}
                  ></p>
                  <p>{item.available ? "Available" : "Not Available"}</p>
                </div>
                <p className="text-[#262626] text-lg font-medium">
                  {item.name}
                </p>
                <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No lawyers found.</p>
        )}
      </div>
      <button
        onClick={() => {
          navigate("/lawyers");
          window.scrollTo(0, 0);
        }}
        className="bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        More
      </button>
    </div>
  );
};

export default TopLawyers;
