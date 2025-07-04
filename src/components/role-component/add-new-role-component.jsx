// AddNewRoleComponent.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get, post } from "../../utils/HtppService"; // adjust import as needed

const PAGE_SIZE = 5;

const AddNewRoleComponent = () => {
  const navigate = useNavigate();

  // Role details
  const [roleTitle, setRoleTitle] = useState("");
  const [description, setDescription] = useState("");

  // Privileges: static list; adjust names as needed
  const [privileges, setPrivileges] = useState([
    { name: "COURSES", view: false, add: false, edit: false, delete: false },
    { name: "STUDENTS", view: false, add: false, edit: false, delete: false },
    { name: "MENTORS", view: false, add: false, edit: false, delete: false },
    { name: "COUPONS", view: false, add: false, edit: false, delete: false },
    { name: "PAYMENT_METHODS", view: false, add: false, edit: false, delete: false },
    { name: "JOBS", view: false, add: false, edit: false, delete: false },
  ]);

  // Users
  const [usersList, setUsersList] = useState(null); // null = not yet fetched; [] = fetched but empty
  const [usersLoading, setUsersLoading] = useState(false);
  const [usersError, setUsersError] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]); // store selected user IDs or objects, adjust per backend

  const [currentPage, setCurrentPage] = useState(1);

  // Tab selection
  const [selectedOption, setSelectedOption] = useState("option1");

  // Fetch users when Users tab is selected, if not already fetched
  const fetchUsers = async () => {
    setUsersLoading(true);
    setUsersError(null);
    try {
      // Adjust endpoint as needed
      const response = await get("school/management/users/");
      if (response && Array.isArray(response)) {
        setUsersList(response);
        // Reset pagination if needed
        setCurrentPage(1);
      } else {
        setUsersList([]);
        setUsersError("Invalid response format when fetching users.");
      }
    } catch (err) {
      console.error("Error fetching users:", err);
      setUsersList([]);
      setUsersError("Failed to fetch users. Please try again later.");
    } finally {
      setUsersLoading(false);
    }
  };

  const handleMenuChoice = (choice) => {
    setSelectedOption(choice);
    // When switching to Users tab, trigger fetch if not yet fetched
    if (choice === "option3" && usersList === null) {
      fetchUsers();
    }
    // Reset any form-level messages if desired
  };

  // Handle privilege checkbox toggles
  const handlePrivilegeChange = (index, field, checked) => {
    setPrivileges((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [field]: checked,
      };
      return updated;
    });
  };

  // Handle user selection toggles
  const handleUserSelect = (userId, checked) => {
    setSelectedUsers((prev) => {
      if (checked) {
        // add if not present
        if (!prev.includes(userId)) {
          return [...prev, userId];
        }
        return prev;
      } else {
        // remove if present
        return prev.filter((id) => id !== userId);
      }
    });
  };

  // Submit handler
  const handleSubmit = async () => {
    // Basic validation
    if (!roleTitle.trim()) {
      alert("Role title is required.");
      return;
    }
    if (!description.trim()) {
      alert("Description is required.");
      return;
    }

    // Construct payload
    const body = {
      // If your backend requires an 'id' for edit, include here; for new, omit or null.
      name: roleTitle.trim(),
      description: description.trim(),
      privileges: privileges.map((p) => ({
        name: p.name,
        view: p.view,
        add: p.add,
        edit: p.edit,
        delete: p.delete,
      })),
      users: selectedUsers.length > 0 ? selectedUsers : null,
    };

    try {
      // Adjust endpoint and method if needed (POST vs PUT)
      const response = await post("school/management/roles", body);
      console.log("Role created/updated:", response);
      // Optionally show a success message or toast
      // Then navigate back or to roles list:
      navigate(-1);
    } catch (err) {
      console.error("Error creating/updating role:", err);
      alert("Failed to submit. Please try again later.");
    }
  };

  // Pagination helpers for users table
  const totalPages = usersList
    ? Math.ceil(usersList.length / PAGE_SIZE) || 1
    : 1;

  const displayedUsers =
    usersList && usersList.length > 0
      ? usersList.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
      : [];

  // JSX for Role Details tab
  const renderRoleDetails = () => (
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
            value={roleTitle}
            onChange={(e) => setRoleTitle(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium" htmlFor="description">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
      </form>
    </div>
  );

  // JSX for Privileges tab
  const renderPrivileges = () => (
    <div className="p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-lg font-semibold mb-4">Privileges</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-4 py-2 text-gray-700 text-center">Privilege</th>
              <th className="px-4 py-2 text-gray-700 text-center">View</th>
              <th className="px-4 py-2 text-gray-700 text-center">Add</th>
              <th className="px-4 py-2 text-gray-700 text-center">Edit</th>
              <th className="px-4 py-2 text-gray-700 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {privileges.map((priv, index) => (
              <tr
                key={priv.name}
                className={`${index % 2 === 0 ? "bg-gray-50" : ""}`}
              >
                <td className="px-4 py-2 text-gray-700 text-center border">
                  {priv.name.replace(/_/g, " ")}
                </td>
                {["view", "add", "edit", "delete"].map((field) => (
                  <td
                    key={field}
                    className="px-4 py-2 text-center border"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                      checked={privileges[index][field]}
                      onChange={(e) =>
                        handlePrivilegeChange(index, field, e.target.checked)
                      }
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // JSX for Users tab
  const renderUsers = () => {
    if (usersLoading) {
      return <p className="text-gray-600">Loading users...</p>;
    }
    if (usersError) {
      return (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline ml-1">{usersError}</span>
          <span
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => setUsersError(null)}
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
      );
    }
    if (usersList && usersList.length === 0) {
      return <p className="text-gray-600">No users found.</p>;
    }
    // usersList is array
    return (
      <div className="bg-white p-4 rounded-md shadow">
        <h2 className="text-lg font-semibold mb-4">Select Users</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border text-center">Select</th>
                <th className="px-4 py-2 border text-left">Name</th>
                <th className="px-4 py-2 border text-left">Email</th>
                <th className="px-4 py-2 border text-left">Mobile</th>
                <th className="px-4 py-2 border text-left">Gender</th>
                <th className="px-4 py-2 border text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {displayedUsers.map((user) => {
                // Assuming each user object has an 'id' field; adjust if different
                const userId = user.id;
                const checked = selectedUsers.includes(userId);
                return (
                  <tr key={userId} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border text-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                        checked={checked}
                        onChange={(e) =>
                          handleUserSelect(userId, e.target.checked)
                        }
                      />
                    </td>
                    <td className="px-4 py-2 border">{user.name}</td>
                    <td className="px-4 py-2 border">{user.email}</td>
                    <td className="px-4 py-2 border">{user.mobile}</td>
                    <td className="px-4 py-2 border">{user.gender}</td>
                    <td className="px-4 py-2 border">{user.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* Pagination controls */}
        <div className="flex justify-between items-center mt-4">
          <button
            className={`px-3 py-1 border rounded ${currentPage === 1
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "text-blue-600 border-blue-600 hover:bg-blue-50"
              }`}
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`px-3 py-1 border rounded ${currentPage === totalPages
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "text-blue-600 border-blue-600 hover:bg-blue-50"
              }`}
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="sticky top-0 z-10 flex justify-between items-center bg-white p-6 shadow mb-6">
        <div className="flex items-center">
          <button className="mr-2" onClick={() => navigate(-1)}>
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
          <h1 className="text-2xl font-bold mr-4">Add New Role</h1>
        </div>
        <div className="flex items-center">
          <div className="flex items-center space-x-4 p-2">
            {/* Left Side - Saved Checkmark (could be dynamic) */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v0M12 12v0M12 18v0"></path>
              </svg>
            </button>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="main-container flex">
        {/* Sidebar / Menu */}
        <div className="menu-container w-1/4 px-4">
          <h2 className="text-lg font-semibold mb-4">Publish Opportunity</h2>
          <div className="menu flex flex-col space-y-2">
            <button
              className={`text-left px-3 py-2 rounded ${selectedOption === "option1"
                ? "bg-blue-100 font-medium"
                : "hover:bg-gray-100"
                }`}
              onClick={() => handleMenuChoice("option1")}
            >
              Role details
            </button>
            <button
              className={`text-left px-3 py-2 rounded ${selectedOption === "option2"
                ? "bg-blue-100 font-medium"
                : "hover:bg-gray-100"
                }`}
              onClick={() => handleMenuChoice("option2")}
            >
              Privileges
            </button>
            <button
              className={`text-left px-3 py-2 rounded ${selectedOption === "option3"
                ? "bg-blue-100 font-medium"
                : "hover:bg-gray-100"
                }`}
              onClick={() => handleMenuChoice("option3")}
            >
              Users
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="content-parent w-3/4 px-4">
          {selectedOption === "option1" && renderRoleDetails()}
          {selectedOption === "option2" && renderPrivileges()}
          {selectedOption === "option3" && renderUsers()}
        </div>
      </div>
    </div>
  );
};

export default AddNewRoleComponent;
