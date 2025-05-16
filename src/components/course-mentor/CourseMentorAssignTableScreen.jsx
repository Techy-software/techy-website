import React, { useState } from "react";
import { FaFilter, FaTh, FaBars, FaPlus, FaEllipsisV } from "react-icons/fa";

const mentors = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  name: "Ahmed Mealy",
  visible: false,
  manage: false,
  performance: false,
  qa: false,
}));

const CourseMentorAssignTableScreen = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const [pageSize, setPageSize] = useState(6);

  const handleCheckboxChange = (index, field) => {
    mentors[index][field] = !mentors[index][field];
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border rounded-md w-64"
          />
          <button className="p-2 border rounded-md bg-gray-100">
            <FaFilter />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 border rounded-md bg-gray-100">
            <FaTh />
          </button>
          <button className="p-2 border rounded-md bg-gray-100">
            <FaBars />
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center gap-2">
            <FaPlus /> New Mentors
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-50 text-gray-600 text-sm">
              <th className="p-3">Mentor</th>
              <th className="p-3">Visible</th>
              <th className="p-3">Manage</th>
              <th className="p-3">Performance</th>
              <th className="p-3">Q&A</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mentors.map((mentor, idx) => (
              <tr
                key={mentor.id}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="p-3">{mentor.name}</td>
                <td className="p-3 text-center">
                  <input
                    type="checkbox"
                    checked={mentor.visible}
                    onChange={() => handleCheckboxChange(idx, "visible")}
                  />
                </td>
                <td className="p-3 text-center">
                  <input
                    type="checkbox"
                    checked={mentor.manage}
                    onChange={() => handleCheckboxChange(idx, "manage")}
                  />
                </td>
                <td className="p-3 text-center">
                  <input
                    type="checkbox"
                    checked={mentor.performance}
                    onChange={() => handleCheckboxChange(idx, "performance")}
                  />
                </td>
                <td className="p-3 text-center">
                  <input
                    type="checkbox"
                    checked={mentor.qa}
                    onChange={() => handleCheckboxChange(idx, "qa")}
                  />
                </td>
                <td className="p-3 text-center">
                  <button className="text-blue-600">
                    <FaEllipsisV />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer: Pagination and Page Size */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <label className="text-sm">Show </label>
          <select
            className="border rounded-md px-2 py-1 ml-1"
            value={pageSize}
            onChange={(e) => setPageSize(parseInt(e.target.value))}
          >
            {[6, 10, 20].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, "...", 5, 6].map((num, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded-md ${
                num === currentPage
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => typeof num === "number" && setCurrentPage(num)}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseMentorAssignTableScreen;
