import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import Topbar from "../Topbar";
import Academy from "../../assets/Academy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import Feed from "./Feed";
import Overview from "./Overview";

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

const AcademyDetails = ({}) => {
  const AcademyItems = [
    "Feeds",
    "Overview",
    "Courses (10)",
    "Orders (2)",
    "Mentors (7)",
    "Students (100)",
    "Feedback",
  ];
  const [activeComponent, setActiveComponent] = useState("Feeds");

  const handleClick = (label) => {
    setActiveComponent(label);
  };

  return (
    <div>
      <Topbar />
      <div className="sticky top-0 z-10 flex justify-between items-center bg-white p-6 shadow pb-6">
        <div className="flex items-center">
          <button className="mr-2">
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
          <h1 className="text-2xl font-bold mr-4">Academy #123</h1>
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
          <WhiteCard>
            <div className="flex items-center flex-col">
              <img src={Academy} alt="Academy Photo" className="w-24" />
              <h2 className="text-xl font-bold mt-4">Techy School</h2>
              <hr className="my-3" />
              <div className="flex justify-between mx-2 w-full my-3">
                <span className="text-gray-500">Academy Details</span>
                <span className="text-blue-500 font-bold ml-2">
                  More Details
                </span>
              </div>
            </div>
            <div className="flex">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2 w-5 h-5" />
              <span>El Dokki, Al Qahirah, Egypt</span>
            </div>
            <div className="my-4">
              <span className="text-slate-600 my-4">CONTACT INFO</span>
            </div>
            <div className="flex my-4">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <span>+20 114 6432 345</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <span>Techy.School@gmail.com</span>
            </div>
          </WhiteCard>
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
              {activeComponent === "Feeds" && <Feed />}
              {activeComponent === "Overview" && <Overview />}
              {activeComponent === "Component 3" && (
                <div>Content for Component 3</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyDetails;
