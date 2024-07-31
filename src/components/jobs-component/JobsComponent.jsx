import React from "react";

const JobsComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white w-full p-4 shadow  top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Jobs</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Job
          </button>
        </div>
      </div>

      <div className="max-w-full mx-auto p-8">
        <div className="bg-white p-8 rounded-md shadow mx-2">
          {/* Search bar and filter icon */}
          <div className="flex items-center mb-6">
            <div className="relative w-1/4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
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
                    d="M8 4a8 8 0 108 8 8 8 0 00-8-8zm2 10l4 4"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full p-3 pl-10 rounded-l-xl border border-gray-300 bg-gray-100"
              />
            </div>
            <button className="ml-3 p-3 bg-white border border-gray-300 rounded-r-md">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18M3 8h18M5 12h14M7 16h10"
                />
              </svg>
            </button>
          </div>

          {/* Job listings */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="relative p-6 bg-white shadow rounded-lg border border-gray-200"
              >
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
                <div className="text-gray-700 text-sm">
                  Experienced • 2+ Yrs of Exp • Education/Teaching • Education •
                  IB • Teaching Diploma • MYP • Teacher
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsComponent;
