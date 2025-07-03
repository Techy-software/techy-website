import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="h-screen">
      <Sidebar />

      <div className="flex flex-col h-full">
        <Topbar />

        <div className="flex-1 p-4 overflow-y-auto pl-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
