import React from "react";
import CourseHeader from "../../reusable components/Header/CourseHeader";
import MentorGrid from "./MentorGrid";

const CourseMentorAssignScreen = () => {
  const handleBack = () => {
    console.log("Go back");
  };

  const handleNext = () => {
    console.log("Proceed to next step");
  };
  return (
    <>
      <CourseHeader
        title="Course details"
        status="Draft"
        headerStep="Assign"
        onBack={handleBack}
        onNext={handleNext}
        nextLabel="Next Assign Mentors"
      />

      <MentorGrid />

    </>
  );
};

export default CourseMentorAssignScreen;
