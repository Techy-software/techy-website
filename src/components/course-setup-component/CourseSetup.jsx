import React, { useState } from "react";
import OverViewCourseSetup from "./OverViewCourseSetup";
import CompletionCourseSetup from "./CompletionCourseSetup";
import CourseFAQSetup from "./FAQsCourseSetup";
import CoursePaymentSetup from "./CoursePaymentSetup";
import CoursePublishingSetup from "./CoursePublishingSetup";

const CourseSetup = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    courseCreationRequestDto: "1/2/3",
    thumbnail: null,
    title: "El Python",
    categoryIdentifier: "1",
    level: "INTERMEDIATE",
    duration: "2",
    ageFrom: "11",
    ageTo: "14",
    attendanceType: "OFFLINE",
    location: "There",
    locationCoordinates: {
      long: "34.08",
      lat: "28.3469325",
    },
    originalPrice: "150",
    mentorTitle: "Developer",
    mentorIdentifier: "1",
    description: "Des",
    requirements: "Req",
    faqs: {
      "about course": "asd",
      question: "asdasd",
    },
  });

  const sharedProps = {
    setCurrentStep,
    formData,
    setFormData,
  };

  switch (currentStep) {
    case 0:
      return <OverViewCourseSetup {...sharedProps} />;
    case 1:
      return <CourseFAQSetup {...sharedProps} />;
    case 2:
      return <CoursePaymentSetup {...sharedProps} />;
    case 3:
      return <CoursePublishingSetup {...sharedProps} />;
    default:
      return <p className="h-100 w-100 text-center">Invalid Page</p>;
  }
};

export default CourseSetup;
