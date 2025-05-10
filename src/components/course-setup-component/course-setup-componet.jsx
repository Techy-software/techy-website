import React from "react";
import HorizontalSteps from "../../reusable components/HorizontalSteps/HorizontalSteps";
import CourseHeader from "../../reusable components/Header/CourseHeader";

const courseSetupComponet = ({ headerStep, currentStep }) => {
  const handleBack = () => {
    console.log("Go back");
  };

  const handleNext = () => {
    console.log("Proceed to next step");
  };

  return (
    <div>
      <CourseHeader
        title="Course details"
        status="Draft"
        headerStep="Setup"
        onBack={handleBack}
        onNext={handleNext}
        nextLabel="Next Assign Mentors"
      />

      <div className="col-span-3 me-10">
        <HorizontalSteps
          title="Publish your course"
          steps={[
            "Overview",
            "Completion",
            "FAQs",
            "Pricing and payment methods",
            "Publishing",
          ]}
          currentStep={currentStep}
        />
      </div>
    </div>
  );
};

export default courseSetupComponet;
