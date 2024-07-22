import React from "react";
import TodaySales from "./TodaySales";
import TopCourses from "./TopCourses";
import TotalRevenue from "./TotalRevenue";
import VisitorInsights from "./VisitorInsights";

const Dashboard = () => {
  return (
    <div className="p-4">
    <div className="grid grid-cols-4 gap-4 mb-4">
      <TodaySales />
      <div className="col-span-1 bg-white p-4 shadow rounded">300 Total Order +5% from yesterday</div>
      <div className="col-span-1 bg-white p-4 shadow rounded">5 Courses Sold +1.2% from yesterday</div>
      <div className="col-span-1 bg-white p-4 shadow rounded">8 New Students 0.5% from yesterday</div>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <VisitorInsights />
      <TotalRevenue />
    </div>
    <TopCourses />
  </div>
  );
};

export default Dashboard;
