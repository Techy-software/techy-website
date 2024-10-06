import React from "react";
import Role from "../../reusable components/Role-table/role-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCircle } from "@fortawesome/free-solid-svg-icons";
const RoleCompoenent = () => {
  return (
    <div>
      <div>
        <div className="header-component">
          <h2>Manage roles</h2>
          <button className="px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded hover:bg-blue-600 flex items-center">
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
        <hr />
      </div>

      <div className="mx-4 mt-4">
        <Role />
      </div>
    </div>
  );
};

export default RoleCompoenent;
