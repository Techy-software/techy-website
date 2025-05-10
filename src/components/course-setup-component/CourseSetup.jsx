import React from "react";
import OverViewCourseSetup from "./OverViewCourseSetup";
import CompletionCourseSetup from "./CompletionCourseSetup"

const CourseSetup = ({ currentStep, headerStep }) => {
  switch (currentStep) {
    case 0:
      return <OverViewCourseSetup currentStep={currentStep} headerStep={headerStep} />;
    case 1:
      return <CompletionCourseSetup currentStep={currentStep} />;
    default:
      return <p className="h-100 w-100 text-center">Invalid Page</p>;
  }
};

export default CourseSetup;