import React from "react";
import "./AddAcademy.css";
import AddAcademyPageOne from "./AddAcademyPageOne";
import AddAcademyPageTwo from "./AddAcademyPageTwo";

const AddAcademy = ({ currentStep }) => {
  switch (currentStep) {
    case 0:
      return <AddAcademyPageOne currentStep={currentStep} />;
    case 1:
      return <AddAcademyPageTwo currentStep={currentStep} />;
  }
};

export default AddAcademy;
