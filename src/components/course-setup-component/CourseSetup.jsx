import React from "react";
import OverViewCourseSetup from "./OverViewCourseSetup";
import CompletionCourseSetup from "./CompletionCourseSetup";
import CourseFAQSetup from "./FAQsCourseSetup";
import CoursePaymentSetup from "./CoursePaymentSetup";
import CoursePublishingSetup from "./CoursePublishingSetup";

const CourseSetup = ({ currentStep, headerStep }) => {
  switch (currentStep) {
    case 0:
      return (
        <OverViewCourseSetup
          currentStep={currentStep}
          headerStep={headerStep}
        />
      );
    case 1:
      return <CompletionCourseSetup currentStep={currentStep} />;
    case 2:
      return <CourseFAQSetup currentStep={currentStep} />;
    case 3:
      return <CoursePaymentSetup currentStep={currentStep} />;
    case 4:
      return <CoursePublishingSetup currentStep={currentStep} />;
    default:
      return <p className="h-100 w-100 text-center">Invalid Page</p>;
  }
};

export default CourseSetup;
