import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaLaptop,
  FaUserFriends,
  FaSignal,
  FaCode,
} from "react-icons/fa";
import myImage from "../../../assets/Seminar.jpeg";

const CourseCard = () => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden bg-white shadow-md border border-gray-100">
      <img
        src={myImage}
        alt="Course Cover"
        className="w-full h-40 object-cover"
      />

      <div className="p-5 space-y-3 text-sm text-gray-700">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-blue-600">150 EGP</span>
          <span className="line-through text-gray-400">250 EGP</span>
        </div>

        <div className="flex items-center gap-2">
          <FaCode className="text-gray-500" />
          <span>Web development</span>
        </div>

        <div className="flex items-center gap-2">
          <FaSignal className="text-gray-500" />
          <span>Beginner level</span>
        </div>

        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-gray-500" />
          <span>3 months deadline</span>
        </div>

        <div className="flex items-center gap-2">
          <FaUserFriends className="text-gray-500" />
          <span>From 8 to 12 years old</span>
        </div>

        <div className="flex items-center gap-2">
          <FaLaptop className="text-gray-500" />
          <span>Online / Offline attendees</span>
        </div>

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-600" />
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            El-Gaish, Tanta Qism 2, Tanta, Gharbia
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
