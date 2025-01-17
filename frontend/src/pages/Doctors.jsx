import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the Lawyers specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${
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
          <p
            onClick={() =>
              speciality === "Criminal Lawyer"
                ? navigate("/doctors")
                : navigate("/doctors/Criminal Lawyer")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Criminal Lawyer"
                ? "bg-indigo-100 text-black "
                : ""
            }`}
          >
            Criminal Lawyer
          </p>
          <p
            onClick={() =>
              speciality === "Corporate Lawyer"
                ? navigate("/doctors")
                : navigate("/doctors/Corporate Lawyer")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Corporate Lawyer"
                ? "bg-indigo-100 text-black "
                : ""
            }`}
          >
            Corporate Lawyer
          </p>
          <p
            onClick={() =>
              speciality === "Civil Lawyer"
                ? navigate("/doctors")
                : navigate("/doctors/Civil Lawyer")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Civil Lawyer" ? "bg-indigo-100 text-black " : ""
            }`}
          >
            Civil Lawyer
          </p>
          <p
            onClick={() =>
              speciality === "Family Lawyer"
                ? navigate("/doctors")
                : navigate("/doctors/Family Lawyer")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Family Lawyer" ? "bg-indigo-100 text-black " : ""
            }`}
          >
            Family Lawyer
          </p>
          <p
            onClick={() =>
              speciality === "Tax Lawyer"
                ? navigate("/doctors")
                : navigate("/doctors/Tax Lawyer")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Tax Lawyer" ? "bg-indigo-100 text-black " : ""
            }`}
          >
            Tax Lawyer
          </p>
          <p
            onClick={() =>
              speciality === "Cyber Lawyer"
                ? navigate("/doctors")
                : navigate("/doctors/Cyber Lawyer")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Cyber Lawyer" ? "bg-indigo-100 text-black " : ""
            }`}
          >
            Cyber Lawyer
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                window.scrollTo(0, 0);
              }}
              className="border border-indigo-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-indigo-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-neutral-800 text-lg font-medium">
                  {item.name}
                </p>
                <p className="text-zinc-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
