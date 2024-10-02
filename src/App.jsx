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
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import RoleCompoenent from "./components/role-component/role-component";
import AddNewRoleComponent from "./components/role-component/add-new-role-component";
import CourseLibraryComponent from "./components/course-library-component/course-library-component";
import AddStudentComponent from "./components/add-student-component/AddStudentComponent";
const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Content", "Setup", "Assign"];

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<AcademyDetails steps={steps} currentStep={1} />}
          />
          <Route path="/mentor" element={<MentorDashboardMainPage />} />
          <Route path="/Ac" element={<AddAcademy currentStep={1} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
