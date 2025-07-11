// ./components/StudentDashboard/StudentDashboardMainPage.jsx
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import { Box } from "../AcademyDetails/AcademyDetails";
import points from "../../assets/points.png";
import { useLocation, useNavigate } from "react-router-dom";
import { get } from "../../utils/HtppService";

import OverviewStudent from "./OverViewStudent";
import PostsStudent from "./PostsStudent";
import GrowthStudent from "./GrowthStudent";
import OrderStudent from "./OrdersStudent";
import OpportunityStudent from "./OpportunityStudent";

// MUI person icon
import PersonIcon from "@mui/icons-material/Person";

const StudentDashboardMainPage = () => {
  const AcademyItems = [
    "Overview",
    "Posts",
    "Growth",
    "Orders",
    "Opportunities",
    "Leaderboard",
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const studentId = location.state?.student?.id;

  const [activeComponent, setActiveComponent] = useState("Overview");
  const [studentData, setStudentData] = useState({});
  const [studentCertificates, setStudentCertificates] = useState([]);

  useEffect(() => {
    if (!studentId) return;
    (async () => {
      try {
        const profile = await get(`/user/profile/${studentId}/`);
        setStudentData(profile);
        const certs = await get(`/user/profile/certificates/${studentId}/`);
        setStudentCertificates(certs);
      } catch (err) {
        console.error("Error fetching student data:", err);
      }
    })();
  }, [studentId]);

  const handleClick = (label) => setActiveComponent(label);

  return (
    <div>
      {/* Topbar */}
      <div className="sticky top-0 flex justify-between items-center bg-white p-6 shadow pb-6">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-2">
            {/* back arrow svg */}
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-bold mr-4">
            {studentData.fullName || "Student Profile"}
          </h1>
          <span className="ml-2 px-2 py-1 text-sm text-gray-500 bg-green-200 rounded">
            {studentData.isActive ? "Active" : "Inactive"}
          </span>
        </div>
        <button
          onClick={() => /* implement edit */ null}
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Edit
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-4 px-10 pt-10">
        {/* Left Pane */}
        <div className="col-span-3">
          <WhiteCard>
            <div className="flex flex-col items-center">
              {studentData.profilePicture ? (
                <img
                  src={studentData.profilePicture}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <Avatar sx={{ width: 96, height: 96, bgcolor: "grey.300" }}>
                  <PersonIcon sx={{ fontSize: 48 }} />
                </Avatar>
              )}
              <h2 className="text-xl font-bold mt-4">
                {studentData.fullName}
              </h2>
              <hr className="my-3" />

              {/* Points */}
              <div className="flex justify-between w-full bg-blue-700 rounded-lg p-2 my-3 mx-2">
                <div className="flex items-center gap-5">
                  <img src={points} alt="points" className="w-10" />
                  <div className="flex flex-col text-white">
                    <span className="font-bold">
                      {studentData.points || 0}
                    </span>
                    <span>Points</span>
                  </div>
                </div>
                <button className="bg-blue-500 rounded-lg p-2.5 font-semibold text-white text-sm hover:bg-blue-400">
                  History
                </button>
              </div>

              <hr className="my-3" />
              <div className="flex justify-between w-full my-3 mx-2">
                <span className="text-gray-500">PERSONAL INFO</span>
                <span
                  className="text-blue-500 font-bold cursor-pointer"
                  onClick={() => /* implement more details */ null}
                >
                  More Details
                </span>
              </div>
            </div>

            {/* Info Fields */}
            <div className="flex items-center mb-2">
              <PersonIcon className="mr-2 text-gray-600" />
              <span>{studentData.gender === 1 ? "Male" : "Female"}</span>
            </div>
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faCakeCandles}
                className="mr-2 w-5 h-5"
              />
              <span>{studentData.dateOfBirth}</span>
            </div>
            <hr className="my-3" />

            {/* Connections */}
            <div className="flex justify-between my-2">
              <span className="text-slate-500">Connections</span>
              <span className="text-blue-700 font-bold">
                {studentData.connectionsCount || 0}
              </span>
            </div>
            <div className="flex justify-between my-2">
              <span className="text-slate-500">Following</span>
              <span className="text-blue-700 font-bold">
                {studentData.followingCount || 0}
              </span>
            </div>
            <hr className="my-4" />

            {/* Certificates */}
            <div>
              <span className="text-slate-600 block mb-2">CERTIFICATES</span>
              {studentCertificates.map((cert) => (
                <div key={cert.id} className="flex items-center mb-4">
                  <img
                    src={cert.thumbnail}
                    alt={cert.name}
                    className="h-14 w-24 rounded-lg object-cover"
                  />
                  <div className="ml-4">
                    <p className="font-bold">{cert.name}</p>
                    <span className="text-slate-400">
                      {cert.issuingOrganization}
                    </span>
                    <div
                      className="cursor-pointer mt-1 flex items-center"
                      onClick={() =>
                        window.open(cert.certificateUrl, "_blank")
                      }
                    >
                      <FontAwesomeIcon
                        icon={faEye}
                        className="text-blue-700"
                      />
                      <span className="ml-2 text-blue-700 font-bold">
                        View credentials
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </WhiteCard>
        </div>

        {/* Right Pane */}
        <div className="col-span-9">
          {/* Tabs */}
          <div className="flex overflow-x-auto py-2">
            {AcademyItems.map((label) => (
              <Box
                key={label}
                label={label}
                isActive={activeComponent === label}
                onClick={() => handleClick(label)}
              />
            ))}
          </div>

          {/* Active Component */}
          <div className="mt-6">
            {activeComponent === "Overview" && <OverviewStudent />}
            {activeComponent === "Posts" && <PostsStudent studentId={studentId} />}
            {activeComponent === "Growth" && <GrowthStudent studentId={studentId} />}
            {activeComponent === "Orders" && <OrderStudent studentId={studentId} />}
            {activeComponent === "Opportunities" && <OpportunityStudent studentId={studentId} />}
            {activeComponent === "Leaderboard" && <div>Leaderboard Component</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardMainPage;
