import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const Topbar = ({ title = "Dashboard" }) => {
  return (
    <div className="sticky top-0 z-10 flex justify-end items-center bg-white p-4 shadow-md">
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faMessage}
          className="text-gray-600 mr-4 border p-1.5 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faBell}
          className="text-gray-600 mr-4 border p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
        />
        <div className="flex items-center">
          <div className="flex items-center bg-gray-100 p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
            <span>Ahmed Mealy</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="ml-2 text-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
