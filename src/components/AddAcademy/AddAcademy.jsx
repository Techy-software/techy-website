import React from "react";
import "./AddAcademy.css";
import AddAcademyPageOne from "./AddAcademyPageOne";
import AddAcademyPageTwo from "./AddAcademyPageTwo";
import AddAcademyPageThree from "./AddAcademyPageThree";
const AddAcademy = ({ currentStep }) => {
  switch (currentStep) {
    case 0:
      return <AddAcademyPageOne currentStep={currentStep} />;
    case 1:
      return <AddAcademyPageTwo currentStep={currentStep} />;
    case 2:
      return <AddAcademyPageThree currentStep={currentStep} />;
    default:
      return <p className="h-100 w-100 text-center">Invalid Page</p>;
  }
};

export default AddAcademy;
