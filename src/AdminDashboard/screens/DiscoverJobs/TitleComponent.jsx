import React from "react";

function TitleComponent() {
  return (
    <div className="flex flex-col items-start bg-blue-50 py-8 pl-11">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Discover <span className="text-orange-500">Jobs</span>
      </h2>
      <input
        type="text"
        placeholder="Search for jobs..."
        className="w-80 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
}

export default TitleComponent;
