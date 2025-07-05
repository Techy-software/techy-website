import { Outlet } from "react-router-dom";
import NavBar from "../AdminDashboard/components/NavBar/NavBar";

const LandingLayout = () => {
  return (
    <div className="landing-layout">
      <NavBar />
      <div className="landing-layout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default LandingLayout;
