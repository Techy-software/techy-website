import React from "react";

const Topbar = ({ title = "Dashboard" }) => {
  return (
    <div className="sticky top-0 z-10 flex justify-between items-center bg-white p-4 shadow-md">
      <div className="text-xl font-bold">{title}</div>
      <div className="flex items-center">
        <button className="mr-4">Export</button>
        <div className="flex items-center">
          <img
            src="profile.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span>Ahmed Mealy</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
