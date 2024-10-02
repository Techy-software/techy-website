import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-blue-600 text-white w-32 h-screen fixed top-0 left-0 pt-16">
      <nav className="mt-8">
        <ul>
          <li className="px-6 py-2 hover:bg-blue-500">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="px-6 py-2 hover:bg-blue-500">
            <Link to="/sales">Sales</Link>
          </li>
          <li className="px-6 py-2 hover:bg-blue-500">
            <Link to="/courses">Courses</Link>
          </li>
          <li className="px-6 py-2 hover:bg-blue-500">
            <Link to="/analytics">Analytics</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
