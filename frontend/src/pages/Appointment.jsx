import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedLawyers from "../components/RelatedLawyers";

const Appointment = () => {
  const { lawyerId } = useParams();
  const { lawyers, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [lawyerInfo, setLawyerInfo] = useState(null);
  const [lawyerSlots, setLawyerSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchLawyerInfo = async () => {
    const lawyerInfo = lawyers.find((lawyer) => lawyer._id === lawyerId);
    setLawyerInfo(lawyerInfo);
  };

  const getAvailableSlots = async () => {
    setLawyerSlots([]);

    // getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setLawyerSlots((prev) => [...prev, timeSlots]);
    }
  };

  const bookAppointment = async () => {
    const date = lawyerSlots[slotIndex][0].datetime;

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const slotDate = `${day}_${month}_${year}`;
    console.log(slotDate, slotTime);
  };

  useEffect(() => {
    if (lawyers.length > 0) {
      fetchLawyerInfo();
    }
  }, [lawyers, lawyerId]);

  useEffect(() => {
    if (lawyerInfo) {
      getAvailableSlots();
    }
  }, [lawyerInfo]);

  return lawyerInfo ? (
    <div>
      {/* ---------- Lawyer Details ----------- */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className="bg-primary w-full sm:max-w-72 rounded-lg"
            src={lawyerInfo.image}
            alt=""
          />
        </div>

        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {lawyerInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>
              {lawyerInfo.qualification} - {lawyerInfo.practiceArea}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {lawyerInfo.experience} years
            </button>
          </div>

          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About <img className="w-3" src={assets.info_icon} alt="" />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">
              {lawyerInfo.about}
            </p>
          </div>

          <p className="text-gray-500 font-medium mt-4">
            Consultation fee:{" "}
            <span className="text-gray-600">
              {currencySymbol}
              {lawyerInfo.fees}
            </span>
          </p>
        </div>
      </div>

      {/* Booking slots */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {lawyerSlots.length &&
            lawyerSlots.map((item, index) => (
              <div
                onClick={() => setSlotIndex(index)}
                key={index}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                  slotIndex === index
                    ? "bg-primary text-white"
                    : "border border-gray-200"
                }`}
              >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
        </div>

        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {lawyerSlots.length &&
            lawyerSlots[slotIndex].map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                key={index}
                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                  item.time === slotTime
                    ? "bg-primary text-white"
                    : "text-gray-400 border border-gray-300"
                }`}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>

        <button
          onClick={bookAppointment}
          className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6"
        >
          Book a consultation
        </button>
      </div>

      {/* Listing Related Lawyers */}
      <RelatedLawyers practiceArea={lawyerInfo.practiceArea} lawyerId={lawyerId} />
    </div>
  ) : null;
};

export default Appointment;
