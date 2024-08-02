import React, { useState } from "react";
// import CourseLibraryComponent from './components/course-library-component/course-library-component';
import CourseDetilasComponent from "./components/course-details-component/course-details-component";
import AddMentorComponent from "./components/add-mentor-component/add-mentor-component";
import AddAcademy from "./components/AddAcademy/AddAcademy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Content", "Setup", "Assign"];

  return (
    // <CourseDetilasComponent steps={steps} currentStep={currentStep} />
    // <AddMentorComponent/>
    // <AddAcademy currentStep={2} />
    <Settings />
  );
};

export default App;
