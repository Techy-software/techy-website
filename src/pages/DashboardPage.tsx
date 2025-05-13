import DashboardTopBar from "../components/DashboardTopBar";
import TodaySales from "../components/TodaySales";
import TopCourses from "../components/TopCourses";
import TotalRevenue from "../components/TotalRevenue";
import VisitorInsights from "../components/VisitorInsights";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="">
      {/* <DashboardTopBar /> */}
      <div className="grid grid-cols-2 gap-4 ">
        <TodaySales />
        <VisitorInsights />
        <TotalRevenue />
      </div>
      <div className="mt-6">
        <TopCourses />
      </div>
    </div>
  );
};

export default DashboardPage;
