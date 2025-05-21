import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import { faPerson, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarDays,
  faEnvelope,
  faEye,
} from "@fortawesome/free-regular-svg-icons";
import { Box } from "../AcademyDetails/AcademyDetails";
import PersonalPicture from "../../assets/PersonalPicture.png";
import { useState } from "react";
import postImage from "../../assets/postImage.jpeg";
import OverviewMentor from "./OverviewMentor";
import { useNavigate } from "react-router-dom";
import { HttpClient } from "../../utils/HttpClient";

const MentorDashboardMainPage = () => {
  const AcademyItems = [
    "Overview",
    "Courses (4)",
    "Students (120)",
    "Feedbacks",
  ];
  const navigator = useNavigate();
  const [activeComponent, setActiveComponent] = useState("Overview");

  // const { data, isLoading } = useMentor({ url: "mentors/37/contact/" });

  const data = HttpClient.get("mentors/37/contact/");

  console.log("data", data);
  const handleClick = (label) => {
    setActiveComponent(label);
  };
  return (
    <div>
      <div className="sticky top-0 flex justify-between items-center bg-white p-6 shadow pb-6">
        <div className="flex items-center">
          <button
            className="mr-2"
            onClick={() => {
              navigator(-1);
            }}
          >
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
          <h1 className="text-2xl font-bold mr-4">Mentor #123</h1>
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
        <div className="col-span-3">
          <WhiteCard>
            <div className="flex items-center flex-col">
              <img
                src={PersonalPicture}
                alt="Academy Photo"
                className="w-24 rounded-full"
              />
              <h2 className="text-xl font-bold mt-4">Ahmed Mealy</h2>
              <hr className="my-3" />
              <div className="flex justify-between mx-2 w-full my-3">
                <span className="text-gray-500">PERSONAL INFO</span>
                <span
                  className="text-blue-500 font-bold ml-2 cursor-pointer"
                  onClick={() => {
                    navigator("/MentorDetails");
                  }}
                >
                  More Details
                </span>
              </div>
            </div>
            <div className="flex">
              <FontAwesomeIcon icon={faPerson} className="mr-2 w-5 h-5 mb-4" />
              <span>Male</span>
            </div>
            <div className="flex">
              <FontAwesomeIcon icon={faCalendarDays} className="mr-2 w-5 h-5" />
              <span>Joined at 11 Apr. 2023</span>
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
            <hr className="my-4" />
            <div>
              <span className="text-slate-600 my-4">CERTIFICATES</span>
              <div className="flex items-center">
                <img
                  src={postImage}
                  alt="Certificate 1"
                  className="h-14 rounded-lg object-cover"
                />
                <div className="ms-4">
                  <p className="font-bold">The Designed to STEM Online...</p>
                  <span className="text-slate-400">Techy</span>
                  <div className="cursor-pointer">
                    <FontAwesomeIcon
                      icon={faEye}
                      style={{ color: "#0011FF" }}
                    />
                    <span className="ms-2 text-blue-700 font-bold">
                      View credentials
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </WhiteCard>
        </div>
        <div className="col-span-9">
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
              {activeComponent === "Overview" && <OverviewMentor />}
              {activeComponent === "Component 3" && (
                <div>Content for Component 3</div>
              )}
              {activeComponent === "Feedbacks" && <div></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboardMainPage;
