import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import { faCakeCandles, faPerson } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Box } from "../AcademyDetails/AcademyDetails";
import { useEffect, useState } from "react";
import postImage from "../../assets/postImage.jpeg";
import points from "../../assets/points.png";
import { useLocation, useNavigate } from "react-router-dom";
import OverviewStudent from "./OverViewStudent";
import PostsStudent from "./PostsStudent";
import { get } from "../../utils/HtppService";
import GrowthStudent from "./GrowthStudent";
import OrderStudent from "./OrdersStudent";
import OpportunityStudent from "./OpportunityStudent";

const StudentDashboardMainPage = () => {
  const AcademyItems = [
    "Overview",
    "Posts",
    "Growth",
    "Orders",
    "Opportunities",
    "Leaderboard",
  ];
  const navigator = useNavigate();
  const [activeComponent, setActiveComponent] = useState("Overview");
  const [studentData, setStudentData] = useState({});
  const [studentCertificates, setStudentCertificates] = useState([]);
  const location = useLocation();
  const studentId = location.state?.student.id;

  const fetchData = async () => {
    try {
      const response = await get(`/user/profile/${studentId}/`);
      setStudentData(response);
      const responseCertificates = await get(
        `/user/profile/certificates/${studentId}/`
      );
      setStudentCertificates(responseCertificates);
      console.log("Certificates:", responseCertificates);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          <h1 className="text-2xl font-bold mr-4">Student #123</h1>
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
                src={studentData.profilePicture}
                alt="Profile Photo"
                className="w-24 rounded-full"
              />
              <h2 className="text-xl font-bold mt-4">{studentData.fullName}</h2>
              <hr className="my-3" />
              <div className="flex justify-between mx-2 w-full my-3 bg-blue-700 rounded-lg p-2">
                <div className="flex items-center gap-5">
                  <img src={points} alt="points" className="w-10" />
                  <div className="flex flex-col items-center text-white">
                    <span className="font-bold">10,000</span>
                    <span>Points</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="bg-blue-500 rounded-lg p-2.5 font-semibold text-white text-sm hover:bg-blue-400">
                    History
                  </button>
                </div>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between mx-2 w-full my-3">
                <span className="text-gray-500">PERSONAL INFO</span>
                <span
                  className="text-blue-500 font-bold ml-2 cursor-pointer"
                  onClick={() => {}}
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
              <span>
                <FontAwesomeIcon
                  icon={faCakeCandles}
                  className="mr-2 w-5 h-5"
                />{" "}
                {studentData.dateOfBirth}
              </span>
            </div>
            <hr className="m-3" />
            <div className="flex my-4 justify-between">
              <span className="text-slate-500">Connections</span>
              <span className="text-blue-700 font-bold">
                {studentData.connectionsCount}
              </span>
            </div>
            <div className="flex my-4 justify-between">
              <span className="text-slate-500">Following</span>
              <span className="text-blue-700 font-bold">
                {studentData.followingCount}
              </span>
            </div>
            <hr className="my-4" />
            <div>
              <span className="text-slate-600 my-4 block">CERTIFICATES</span>
              {studentCertificates.map((cert) => (
                <div key={cert.id} className="flex items-center mb-4">
                  <img
                    src={cert.thumbnail}
                    alt={`Certificate ${cert.id}`}
                    className="h-14 w-24 rounded-lg object-cover"
                  />
                  <div className="ms-4">
                    <p className="font-bold">{cert.name}</p>
                    <span className="text-slate-400">
                      {cert.issuingOrganization}
                    </span>
                    <div
                      className="cursor-pointer mt-1"
                      onClick={() => window.open(cert.certificateUrl, "_blank")}
                    >
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
              ))}
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
              {activeComponent === "Overview" && <OverviewStudent />}
              {activeComponent === "Posts" && (
                <PostsStudent studentId={studentId} />
              )}
              {activeComponent === "Growth" && (
                <GrowthStudent studentId={studentId} />
              )}
              {activeComponent === "Orders" && (
                <OrderStudent studentId={studentId} />
              )}
              {activeComponent === "Opportunities" && (
                <OpportunityStudent studentId={studentId} />
              )}
              {activeComponent === "Feedbacks" && <div></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardMainPage;
