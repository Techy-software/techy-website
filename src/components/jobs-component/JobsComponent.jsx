import React from "react";
import { useNavigate } from "react-router-dom";

const JobsComponent = () => {
  const navigator = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white w-full p-4 shadow top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Jobs</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => navigator("/job-details")}
          >
            Add Job
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8">
        {/* Search bar + filter */}
        <div className="bg-white p-6 rounded-md shadow mb-6">
          <div className="flex items-center max-w-2xl w-full mx-auto">
            {/* Search */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-12 pl-10 pr-4 rounded-l-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                  />
                </svg>
              </div>
            </div>

            {/* Filter Button */}
            <button className="h-12 w-12 bg-white border border-l-0 border-gray-300 rounded-r-md flex items-center justify-center hover:bg-gray-100">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4h18M3 10h18M5 16h14M7 20h10"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="relative p-6 bg-white shadow rounded-lg border border-gray-200 min-h-[280px] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold">English Mentor</h2>
                    <span className="text-sm text-gray-500">
                      Posted 4 days ago
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 p-2 bg-blue-100 rounded-md">
                    <svg
                      className="w-6 h-6 text-blue-600 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 6h-3a2 2 0 00-2-2h-6a2 2 0 00-2 2H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zM9 4h6a1 1 0 011 1v1H8V5a1 1 0 011-1zM4 8h16v11H4V8z" />
                    </svg>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                    Full-Time
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                    On-site
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium mb-2 px-2.5 py-0.5 rounded">
                    Entry level
                  </span>
                </div>

                {/* Description */}
                <div className="text-gray-700 text-sm">
                  Experienced • 2+ Yrs of Exp • Education/Teaching • Education •
                  IB • Teaching Diploma • MYP • Teacher
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsComponent;
