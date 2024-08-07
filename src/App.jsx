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
const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Content", "Setup", "Assign"];

  return (
    // <CourseDetilasComponent steps={steps} currentStep={currentStep} />
    // <AddMentorComponent/>
    // <AddAcademy currentStep={2} />
    // <MentorDashboardMainPage />
    <AddReward />
  );
};

export default App;
