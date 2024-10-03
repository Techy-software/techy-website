import React from "react";
import { Outlet } from "react-router-dom"; // To render the nested routes
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1 ml-32">
        {/* Topbar */}
        <Topbar />

        {/* Main content outlet for nested routes */}
        <div className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
