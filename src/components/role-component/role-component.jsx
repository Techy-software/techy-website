import React, { useEffect, useState } from "react";
import Role from "../../reusable components/Role-table/role-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { get } from "../../utils/HtppService";

const RoleComponent = () => {
  const [roleData, setRoleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await get("school/management/roles/");
      if (response && Array.isArray(response)) {
        setRoleData(response);
        console.log("Role data fetched successfully:", response);
      } else {
        setRoleData([]);
        setError("Invalid response format received from server.");
      }
    } catch (err) {
      console.error("Error fetching role data:", err);
      setError("Failed to fetch roles. Please check your connection or try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <div className="header-component flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Manage Roles</h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded hover:bg-blue-600 flex items-center"
          onClick={() => navigate("/addNewRole")}
        >
          <span className="relative flex items-center justify-center mr-3">
            <FontAwesomeIcon
              icon={faCircle}
              className="absolute text-white w-6 h-6"
            />
            <FontAwesomeIcon
              icon={faPlus}
              className="relative text-blue-500 w-3 h-3"
            />
          </span>
          Add Role
        </button>
      </div>

      <hr className="mb-4" />

      <div className="mx-2">
        {loading ? (
          <p className="text-gray-600">Loading roles...</p>
        ) : error ? (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline ml-1">{error}</span>
            <span
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
              onClick={() => setError(null)}
              style={{ cursor: "pointer" }}
            >
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 5.652a1 1 0 00-1.414 0L10 8.586 7.066 5.652a1 1 0 10-1.414 1.414L8.586 10l-2.934 2.934a1 1 0 101.414 1.414L10 11.414l2.934 2.934a1 1 0 001.414-1.414L11.414 10l2.934-2.934a1 1 0 000-1.414z" />
              </svg>
            </span>
          </div>
        ) : roleData && roleData.length === 0 ? (
          <p className="text-gray-600">No roles found.</p>
        ) : (
          <Role data={roleData} />
        )}
      </div>
    </div>
  );
};

export default RoleComponent;
