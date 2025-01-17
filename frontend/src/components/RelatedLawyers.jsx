import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const RelatedLawyers = ({ speciality, lawyerId }) => {
  const navigate = useNavigate();
  const { lawyers } = useContext(AppContext);

  const [relLawyers, setRelLawyers] = useState([]);

  useEffect(() => {
    if (lawyers.length > 0 && speciality) {
      const relatedLawyers = lawyers.filter(
        (lawyer) => lawyer.speciality === speciality && lawyer._id !== lawyerId
      );
      setRelLawyers(relatedLawyers);
    }
  }, [lawyers, speciality, lawyerId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-[#262626]">
      <h1 className="text-3xl font-medium">Related Lawyers</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Browse through our trusted lawyers who specialize in similar areas.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relLawyers.map((lawyer, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${lawyer._id}`);
              window.scrollTo(0, 0); // Scroll to top on navigate
            }}
            className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img className="bg-[#EAEFFF]" src={lawyer.image} alt={lawyer.name} />
            <div className="p-4">
              <div
                className={`flex items-center gap-2 text-sm text-center ${
                  lawyer.available ? "text-green-500" : "text-gray-500"
                }`}
              >
                <p
                  className={`w-2 h-2 rounded-full ${
                    lawyer.available ? "bg-green-500" : "bg-gray-500"
                  }`}
                ></p>
                <p>{lawyer.available ? "Available" : "Not Available"}</p>
              </div>
              <p className="text-[#262626] text-lg font-medium">{lawyer.name}</p>
              <p className="text-[#5C5C5C] text-sm">{lawyer.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedLawyers;
