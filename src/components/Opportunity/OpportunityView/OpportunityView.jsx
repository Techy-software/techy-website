import WhiteCard from "../../../reusable components/WhiteCard/WhiteCard";
import Seminar from "../../../assets/Seminar.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import OppOverview from "./OppOverview";
import OppSpeakers from "./OppSpeakers";
import {
  BarChart,
  Group,
  Language,
  Laptop,
  LocationOn,
  Star,
  Timer,
} from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { get } from "../../../utils/HtppService";

const OpportunityView = () => {
  const navigator = useNavigate();

  const { id } = useParams();
  const [oppDetails, setOppDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    console.log("Fetching data...");
    try {
      const data = await get(`/opportunities/${id}/`);
      console.log("Opportunity Details Data:", data);
      setOppDetails(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Box = ({ label, onClick, isActive }) => (
    <div
      className={`cursor-pointer p-2 px-4 rounded-3xl m-1.5 border-slate-300 border ${
        isActive ? "bg-[#FE9B01] text-white" : "bg-white text-black"
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
  const AcademyItems = ["Overview", "Speakers"];
  const [activeComponent, setActiveComponent] = useState("Overview");

  const handleClick = (label) => {
    setActiveComponent(label);
  };

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-600 text-lg">Loading...</div>
    );
  }

  return (
    <div>
      <div className="sticky top-0 z-10 flex justify-between items-center bg-white p-6 shadow pb-6">
        <div className="flex items-center">
          <button className="mr-2" onClick={() => navigator(-1)}>
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-bold mr-4">{oppDetails.title}</h1>
          <span className="ml-2 px-2 py-1 text-sm text-gray-500 bg-green-200 rounded">
            Active
          </span>
        </div>
        <div className="flex items-center">
          {/* <span className="text-gray-500 mr-4">Saved</span> */}
          <button className="bg-blue-500 text-white px-10 py-2 rounded w-100 ">
            Edit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 add-academy px-10 pt-10">
        <div className="col-span-4">
          <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden mx-auto">
            <img
              src={Seminar}
              alt="Event"
              className="w-full h-48 object-cover"
            />
            <div>
              <div className="p-5">
                <h2 className="text-xl font-bold mb-2">{oppDetails.title}</h2>
                <div className="flex items-center mb-3 text-yellow-600">
                  <Star />
                  <span className="text-black">Rating . ???</span>
                  <span className="ml-1 font-medium">5.0 (34 Reviews)???</span>
                </div>
                <div className="flex items-center mb-4">
                  <img
                    src={oppDetails.publisher.profilePicture}
                    alt="Organizer"
                    className="w-8 h-8 rounded-full mr-5"
                  />
                  <span className="font-medium">
                    {oppDetails.publisher.fullName}
                  </span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center mb-5">
                  <Language className="mr-2 text-gray-600" />
                  <span>{oppDetails.type}</span>
                </div>
                <div className="flex items-center mb-5">
                  <BarChart className="mr-2 text-gray-600" />
                  <span>{oppDetails.level}</span>
                </div>
                <div className="flex items-center mb-5">
                  <Timer className="mr-2 text-gray-600" />
                  <span>{oppDetails.duration}</span>
                </div>
                <div className="flex items-center mb-5">
                  <Group className="mr-2 text-gray-600" />
                  <span>From {oppDetails.ageRange} years old</span>
                </div>
                <div className="flex items-center mb-5">
                  <Laptop className="mr-2 text-gray-600" />
                  <span>Online / Offline attendees ???</span>
                </div>
                <div className="flex items-center my-5">
                  <LocationOn className="mr-2 text-gray-600" />
                  <span className="cursor-pointer text-blue-700">
                    {oppDetails.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8">
          <div className="">
            <div className="flex overflow-x-auto py-2 touch-pan-x">
              {AcademyItems.map((label) => (
                <Box
                  key={label}
                  label={label}
                  onClick={() => handleClick(label)}
                  isActive={activeComponent === label}
                />
              ))}
            </div>
            <div className="">
              {activeComponent === "Overview" && (
                <OppOverview details={oppDetails} />
              )}
              {activeComponent === "Speakers" && (
                <OppSpeakers speakers={oppDetails.speakers} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityView;
