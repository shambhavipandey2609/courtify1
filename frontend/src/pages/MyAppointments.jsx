// import React, { useContext } from "react";
// import { AppContext } from "../context/AppContext";

// const MyAppointments = () => {
//   const { lawyers } = useContext(AppContext);

//   return (
//     <div>
//       <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
//         My appointments
//       </p>
//       <div className="">
//         {lawyers.slice(0, 2).map((item, index) => (
//           <div
//             key={index}
//             className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
//           >
//             <div>
//               <img className="w-32 bg-indigo-50" src={item.image} alt="" />
//             </div>
//             <div className="flex-1 text-sm text-zinc-600">
//               <p className="text-neutral-800 font-semibold">{item.name}</p>
//               <p>{item.speciality}</p>
//               <p className="text-zinc-700 font-medium mt-1">Address:</p>
//               <p className="text-xs">{item.address.line1}</p>
//               <p className="text-xs">{item.address.line2}</p>
//               <p className="text-xs mt-1">
//                 <span className="text-sm text-neutral-700 font-medium">
//                   Date & Time:
//                 </span>{" "}
//                 25, July, 2024 | 8:30 PM
//               </p>
//             </div>
//             <div></div>
//             <div className="flex flex-col gap-2 justify-end">
//               <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300">
//                 Pay Online
//               </button>
//               <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300">
//                 Cancel appointment
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyAppointments;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// // const MyAppointments = () => {
// //   const [appointments, setAppointments] = useState([]);

// //   const fetchAppointments = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:4001/api/consultations/client", {
// //         withCredentials: true,
// //       });
// //       setAppointments(response.data.data);
// //     } catch (error) {
// //       console.error("Error fetching appointments:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchAppointments();
// //   }, []);
// useEffect(() => {
//   const fetchAppointments = async () => {
//     try {
//       const res = await axios.get("http://localhost:4000/api/consultations/client", {
//         headers: {
//           Authorization: `Bearer ${yourTokenHere}` // if using JWT
//         },
//         withCredentials: true // if using sessions
//       });

//       setAppointments(res.data.data); // check if 'data' exists
//     } catch (err) {
//       console.error("Error fetching appointments:", err);
//     }
//   };

//   fetchAppointments();
// }, []);

//   return (
//     <div className="py-8">
//       <h2 className="text-2xl font-semibold mb-6">My Appointments</h2>
//       {appointments.length === 0 ? (
//         <p>No appointments found.</p>
//       ) : (
//         appointments.map((appt) => (
//           <div
//             key={appt._id}
//             className="border p-4 mb-4 rounded shadow-sm bg-white"
//           >
//             <p><strong>Lawyer:</strong> {appt.bar_council_id || "Unknown"}</p>
//             <p><strong>Address:</strong> {appt.address || "Not provided"}</p>
//             <p><strong>Fees:</strong> ₹{appt.fees || "N/A"}</p>
//             <p><strong>Date:</strong> {appt.date}</p>
//             <p><strong>Time:</strong> {appt.time}</p>
//             <button
//               className="mt-2 px-4 py-1 rounded text-white"
//               style={{ backgroundColor: appt.status === "accepted" ? "green" : "gray" }}
//             >
//               {appt.status === "accepted" ? "Accepted" : "Pending"}
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// //};

// export default MyAppointments;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const MyAppointments = () => {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const res = await axios.get("http://localhost:4000/api/consultations/client", {
//           withCredentials: true
//         });
//         setAppointments(res.data.data);
//       } catch (err) {
//         console.error("Error fetching appointments:", err);
//       }
//     };

//     fetchAppointments();
//   }, []);

//   return (
//     <div className="py-8">
//       <h2 className="text-2xl font-semibold mb-6">My Appointments</h2>
//       {appointments.length === 0 ? (
//         <p>No appointments found.</p>
//       ) : (
//         appointments.map((appt) => (
//           <div
//             key={appt._id}
//             className="border p-4 mb-4 rounded shadow-sm bg-white"
//           >
            
//             <p><strong>Lawyer ID:</strong> {appt.bar_council_id || "Unknown"}</p>
//             <p><strong>Address:</strong> {appt.address || "Not provided"}</p>
//             <p><strong>Fees:</strong> ₹{appt.fees || "N/A"}</p>
//             <p><strong>Date:</strong> {appt.date}</p>
//             <p><strong>Time:</strong> {appt.time}</p>
//             <button
//               className="mt-2 px-4 py-1 rounded text-white"
//               style={{ backgroundColor: appt.status === "accepted" ? "green" : "gray" }}
//             >
//               {appt.status === "accepted" ? "Accepted" : "Pending"}
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default MyAppointments;

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userData, token } = useContext(AppContext);

  useEffect(() => {
    console.log("Current token:", token); // Check if token exists
  console.log("User data:", userData);
    const fetchAppointments = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/consultations/client",
          {
            headers: {
              Authorization: `Bearer ${token}`
            },
            withCredentials: true
          }
        );
        
        setAppointments(res.data.data || []);
      } catch (err) {
        console.error("Error fetching appointments:", err);
      } finally {
        setLoading(false);
      }
    };

    if (token && userData) {
      fetchAppointments();
    }
  }, [token, userData]);

  if (loading) {
    return <div>Loading appointments...</div>;
  }

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-semibold mb-6">My Appointments</h2>
      
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="space-y-4">
          {appointments.map((appt) => (
            <div key={appt._id} className="border p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-3">
                {appt.lawyer?.image && (
                  <img 
                    src={appt.lawyer.image} 
                    alt="Lawyer" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                <div>
                  <h3 className="font-semibold">{appt.lawyer?.name || "Lawyer"}</h3>
                  <p className="text-sm text-gray-600">
                    {appt.date} at {appt.time}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  appt.status === "accepted" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-yellow-100 text-yellow-800"
                }`}>
                  {appt.status}
                </span>
                
                {appt.status === "accepted" && (
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Join Meeting
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;