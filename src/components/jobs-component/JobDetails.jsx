import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const JobDetails = () => {
  const navigator = useNavigate();
  const [jobDescription, setJobDescription] = useState("");
  const [jobRequirements, setJobRequirements] = useState("");
  const [selectedTab, setSelectedTab] = useState("jobDetails");
  const [completedTabs, setCompletedTabs] = useState({
    jobDetails: false,
    additionalInfo: false,
  });
  const [disabledTabs, setDisabledTabs] = useState({
    jobDetails: false,
    additionalInfo: false,
  });

  // Define separate state variables for each input
  const [experienceNeeded, setExperienceNeeded] = useState("Option 1");
  const [careerLevel, setCareerLevel] = useState("Option 1");
  const [educationLevel, setEducationLevel] = useState("Option 1");
  const [gender, setGender] = useState("Option 1");
  const [workplace, setWorkplace] = useState("Option 1");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [currency, setCurrency] = useState("Option 1");
  const [jobCategories, setJobCategories] = useState("");
  const [numberOfCandidates, setNumberOfCandidates] = useState("");

  const handleTabChange = (tab) => {
    if (tab !== selectedTab) {
      setCompletedTabs((prevState) => ({
        ...prevState,
        [tab]: true,
        [selectedTab]: true,
      }));
      setDisabledTabs((prevState) => ({
        ...prevState,
        [selectedTab]: true,
      }));
    }
    setSelectedTab(tab);
  };

  // Update the dropdown change handlers
  const handleDropdownChange = (setter) => (event) => {
    setter(event.target.value);
  };

  // Update the input change handlers
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col overflow-x-hidden">
      {/* Top bar */}
      <div className="sticky top-0 z-10 flex justify-between items-center bg-white p-6 shadow mb-6">
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
          <h1 className="text-2xl font-bold mr-4">Post a job</h1>
          <span className="ml-2 px-2 py-1 text-sm text-gray-500 bg-gray-200 rounded">
            Draft
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 mr-4">Saved</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      </div>

      <div className="flex flex-1 w-full mx-4 mb-6">
        {/* Sidebar */}
        <div className="w-1/4 p-6 rounded-lg mr-4 flex-shrink-0">
          <h2 className="text-xl font-bold mb-4">Publish Job</h2>
          <div className="flex flex-col">
            <div
              onClick={() =>
                !disabledTabs.jobDetails && handleTabChange("jobDetails")
              }
              className={`flex items-center cursor-pointer mb-4 p-3 rounded-lg ${
                selectedTab === "jobDetails"
                  ? "bg-white border-l-4 border-blue-500"
                  : "bg-gray-100"
              } ${
                disabledTabs.jobDetails ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full mr-2 ${
                  completedTabs.jobDetails ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                {completedTabs.jobDetails && <FaCheck className="text-white" />}
              </div>
              <span
                className={`text-lg ${
                  selectedTab === "jobDetails"
                    ? "text-blue-500"
                    : "text-gray-700"
                }`}
              >
                Job Details
              </span>
            </div>
            <div
              onClick={() =>
                !disabledTabs.additionalInfo &&
                handleTabChange("additionalInfo")
              }
              className={`flex items-center cursor-pointer p-3 rounded-lg ${
                selectedTab === "additionalInfo"
                  ? "bg-white border-l-4 border-blue-500"
                  : "bg-gray-100"
              } ${
                disabledTabs.additionalInfo
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full mr-2 ${
                  completedTabs.additionalInfo ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                {completedTabs.additionalInfo && (
                  <FaCheck className="text-white" />
                )}
              </div>
              <span
                className={`text-lg ${
                  selectedTab === "additionalInfo"
                    ? "text-blue-500"
                    : "text-gray-700"
                }`}
              >
                Additional Information
              </span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 bg-white p-6 mr-10 rounded-lg shadow overflow-y-auto">
          {selectedTab === "jobDetails" && (
            <>
              <h2 className="text-xl font-bold mb-4 p-5">Job Details</h2>
              <hr className="border-gray-300 mb-6 " />
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col">
                  <label className="block text-sm font-bold mb-2">
                    Job title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-sm font-bold mb-2">
                    Job Type <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded">
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold mb-2">
                  Job Description <span className="text-red-500">*</span>
                </label>
                <ReactQuill
                  value={jobDescription}
                  onChange={setJobDescription}
                  className="bg-white"
                  style={{ minHeight: "200px" }} // Adjust height as needed
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  Job Requirements <span className="text-red-500">*</span>
                </label>
                <ReactQuill
                  value={jobRequirements}
                  onChange={setJobRequirements}
                  className="bg-white"
                  style={{ minHeight: "200px" }} // Adjust height as needed
                />
              </div>
            </>
          )}
          {selectedTab === "additionalInfo" && (
            <div>
              <h2 className="text-xl font-bold mb-4 p-5">
                Additional Information
              </h2>
              <hr className="border-gray-300 mb-6 mx-3" />
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div className="flex flex-col">
                    <label className="block text-sm font-bold mb-2">
                      Experience Needed <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full h-12 px-4 border border-gray-300 rounded"
                      value={experienceNeeded}
                      onChange={handleDropdownChange(setExperienceNeeded)}
                    >
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-sm font-bold mb-2">
                      Career Level <span className="text-red-500">*</span>
                    </label>
                    <select
                     className="w-full h-12 px-4 border border-gray-300 rounded"
                      value={careerLevel}
                      onChange={handleDropdownChange(setCareerLevel)}
                    >
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div className="flex flex-col">
                    <label className="block text-sm font-bold mb-2">
                      Education Level <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full h-12 px-4 border border-gray-300 rounded"
                      value={educationLevel}
                      onChange={handleDropdownChange(setEducationLevel)}
                    >
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-sm font-bold mb-2">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full h-12 px-4 border border-gray-300 rounded"
                      value={gender}
                      onChange={handleDropdownChange(setGender)}
                    >
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div className="flex flex-col">
                    <label className="block text-sm font-bold mb-2">
                      Workplace <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full h-12 px-4 border border-gray-300 rounded"
                      value={workplace}
                      onChange={handleDropdownChange(setWorkplace)}
                    >
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-sm font-bold mb-2">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded"
                      value={location}
                      onChange={handleInputChange(setLocation)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div className="flex flex-col">
                    <label className="block text-sm font-bold mb-2">
                      Salary <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full h-12 px-4 border border-gray-300 rounded"
                      value={salary}
                      onChange={handleInputChange(setSalary)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-sm font-bold mb-2">
                      Currency <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full h-12 px-4 border border-gray-300 rounded"
                      value={currency}
                      onChange={handleDropdownChange(setCurrency)}
                    >
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div className="flex flex-col">
                    <label className="block text-sm font-bold mb-2">
                      Job Categories <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded"
                      value={jobCategories}
                      onChange={handleInputChange(setJobCategories)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-sm font-bold mb-2">
                      Number of Needed Candidates{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded"
                      value={numberOfCandidates}
                      onChange={handleInputChange(setNumberOfCandidates)}
                    />
                  </div>
                </div>
                <div className="w-full mt-6">
                  <label className="block text-sm font-bold mb-2">
                    Additional Notes
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
