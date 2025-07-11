import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMessage, faChevronDown, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const Topbar = ({ title = "Dashboard" }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // ✅ Proper typing
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    secureLocalStorage.removeItem("securityToken");
    secureLocalStorage.removeItem("tokenDate");
    navigate("/", { replace: true });
  };

  return (
    <div className="sticky top-0 z-10 flex justify-end items-center bg-white p-4 shadow-md">
      <div className="flex items-center relative" ref={dropdownRef}>
        <FontAwesomeIcon
          icon={faMessage}
          className="text-gray-600 mr-4 border p-1.5 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faBell}
          className="text-gray-600 mr-4 border p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
        />

        <div
          className="flex items-center bg-gray-100 p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          <span>Ahmed Mealy</span>
          <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-gray-600" />
        </div>

        {dropdownOpen && (
          <div className="absolute right-0 top-12 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
