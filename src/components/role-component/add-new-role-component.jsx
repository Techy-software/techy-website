import React, { useState } from "react";
import CoursesTable from "../../reusable components/Courses-LG-View/CourseTable";
import { useNavigate } from "react-router-dom";

const AddNewRoleComponent = () => {
  const navigator = useNavigate();
  const [content, setContent] = useState(() => getContent("option1"));
  const [selectedOption, setSelectedOption] = useState("option1");
  const [currentPage, setCurrentPage] = useState(1); // Ensure this state is initialized correctly
  const totalPages = 6;

  const handleMenuChoice = (choice) => {
    setSelectedOption(choice); // Track selected option
    setContent(getContent(choice, currentPage, setCurrentPage));
    totalPages; // Pass currentPage and setCurrentPage to getContent
  };

  return (
    <div>
      {/* Top Bar */}
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
          <h1 className="text-2xl font-bold mr-4">Add new role</h1>
        </div>
        <div className="flex items-center">
          <div className="flex items-center space-x-4 p-2">
            {/* Left Side - Saved Checkmark */}
            <div className="flex items-center space-x-3 p-2">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-400">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span className="text-gray-500">Saved</span>
            </div>

            {/* Right Side - Ellipsis Button */}
            <button className="w-8 h-8 flex items-center justify-center border border-blue-400 rounded-full p-2">
              <svg
                className="w-4 h-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v0M12 12v0M12 18v0"
                ></path>
              </svg>
            </button>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="main-container">
        <div className="menu-container">
          <h2>Publish Opportunity</h2>
          <div className="menu">
            <button
              className={`mr-4 ${
                selectedOption === "option1" ? "selected" : ""
              }`}
              onClick={() => handleMenuChoice("option1")}
            >
              Role details
            </button>
            <button
              className={`mr-4 ${
                selectedOption === "option2" ? "selected" : ""
              }`}
              onClick={() => handleMenuChoice("option2")}
            >
              Privileges
            </button>
            <button
              className={`${selectedOption === "option3" ? "selected" : ""}`}
              onClick={() => handleMenuChoice("option3")}
            >
              Users
            </button>
          </div>
        </div>

        <div className="content-parent">
          <div className="content">{content}</div>
        </div>
      </div>
    </div>
  );
};

const getContent = (choice, currentPage, setCurrentPage, totalPages) => {
  const users = [
    {
      name: "Ahmed Mealy",
      email: "ahmed@gmail.com",
      mobile: "+2011424532845",
      gender: "Male",
      status: "Draft",
    },
    {
      name: "Ahmed Mealy",
      email: "ahmed@gmail.com",
      mobile: "+2011424532845",
      gender: "Male",
      status: "Active",
    },
    {
      name: "Ahmed Mealy",
      email: "ahmed@gmail.com",
      mobile: "+2011424532845",
      gender: "Male",
      status: "Disabled",
    },
    {
      name: "Ahmed Mealy",
      email: "ahmed@gmail.com",
      mobile: "+2011424532845",
      gender: "Male",
      status: "Draft",
    },
    {
      name: "Ahmed Mealy",
      email: "ahmed@gmail.com",
      mobile: "+2011424532845",
      gender: "Male",
      status: "Active",
    },
    {
      name: "Ahmed Mealy",
      email: "ahmed@gmail.com",
      mobile: "+2011424532845",
      gender: "Male",
      status: "Draft",
    },
  ];

  switch (choice) {
    case "option1":
      return (
        <div>
          <div className="w-full p-6 border border-gray-200 rounded-lg bg-white">
            <h3 className="mb-4 text-xl font-bold border-b border-gray-200 pb-2">
              Role details
            </h3>
            <form className="space-y-6">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium" htmlFor="roleTitle">
                  Role title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="roleTitle"
                  name="roleTitle"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter role title"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="mb-2 text-sm font-medium"
                  htmlFor="description"
                >
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter description"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      );
    case "option2":
      return (
        <div className="p-6 bg-white shadow-lg rounded-md">
          <h2 className="text-lg font-semibold mb-4">Privileges</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-2 text-gray-700 text-center">
                    Privileges
                  </th>
                  <th className="px-4 py-2 text-gray-700 text-center">View</th>
                  <th className="px-4 py-2 text-gray-700 text-center">Add</th>
                  <th className="px-4 py-2 text-gray-700 text-center">Edit</th>
                  <th className="px-4 py-2 text-gray-700 text-center">
                    Delete
                  </th>
                  <th className="px-4 py-2 text-gray-700 text-center">
                    Export
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Courses",
                  "Students",
                  "Mentors",
                  "Coupons",
                  "Payment methods",
                  "Jobs",
                ].map((privilege, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-50" : ""}`}
                  >
                    <td className="px-4 py-2 text-gray-700 text-center border">
                      {privilege}
                    </td>
                    <td className="px-4 py-2 text-center border">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                    </td>
                    <td className="px-4 py-2 text-center border">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                    </td>
                    <td className="px-4 py-2 text-center border">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                    </td>
                    <td className="px-4 py-2 text-center border">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                    </td>
                    <td className="px-4 py-2 text-center border">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    case "option3":
      return <CoursesTable></CoursesTable>;
    default:
      return null;
  }
};

export default AddNewRoleComponent;
