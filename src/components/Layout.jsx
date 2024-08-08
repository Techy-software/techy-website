import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Topbar />
      <Sidebar />
      <main className="ml-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
