import React, { useState } from "react";
// import CourseLibraryComponent from './components/course-library-component/course-library-component';
import CourseDetilasComponent from "./components/course-details-component/course-details-component";
import AddMentorComponent from "./components/add-mentor-component/add-mentor-component";
import AddAcademy from "./components/AddAcademy/AddAcademy";
import JobDetails from "./components/jobs-component/JobDetails";
import AcademyDetails from "./components/AcademyDetails/AcademyDetails";
import MentorDashboardMainPage from "./components/MentorDashboard/MentorDashboardMainPage";
import Rewards from "./components/Reward/Rewards";
import RewardDetails from "./components/Reward/RewardDetails";
import AddReward from "./components/Reward/AddReward";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import Role from "./components/role-component/role-component";
import AddRole from "./components/role-component/add-new-role-component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Content", "Setup", "Assign"];

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AddAcademy currentStep={0} />} />
          <Route path="/mentor" element={<MentorDashboardMainPage />} />
          <Route path="/role" element={<Role />} />
          <Route path="/addRole" element={<AddRole/>} />
          <Route path="/addMentor" element={<AddMentorComponent/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
