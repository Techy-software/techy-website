import React, { useState } from "react";
import "./AddAcademy.css";
import AddAcademyPageOne from "./AddAcademyPageOne";
import AddAcademyPageTwo from "./AddAcademyPageTwo";
import AddAcademyPageThree from "./AddAcademyPageThree";
import HorizontalSteps from "../../reusable components/HorizontalSteps/HorizontalSteps";
import AcademyTopbar from "./AcademyTopbar";
const AddAcademy = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [academyData, setAcademyData] = useState({
    thumbnail: null,
    schoolName: "testee",
    schoolType: "schty",
    ownerName: "test",
    establishedDate: "date",
    address: {
      Country: "",
      City: "",
      Area: "",
      postalCode: "",
      AddressDetials: "",
    },
    phoneNumber: "",
    email: "",
    landLine: "",
    userName: "value",
    password: "password",
    certificates: [],
  });
  switch (currentStep) {
    case 0:
      return (
        <>
          <AcademyTopbar
            academyData={academyData}
            setAcademyData={setAcademyData}
          />
          <div className="grid grid-cols-12 gap-4 add-academy px-10 pt-10">
            <div className="col-span-3 me-10">
              <HorizontalSteps
                title="Add Academy"
                steps={["Academy Details", "Courses", "Achievements"]}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
              />
            </div>
            <div className="col-span-9">
              <AddAcademyPageOne
                academyData={academyData}
                setAcademyData={setAcademyData}
              />
            </div>
          </div>
        </>
      );
    case 1:
      return (
        <>
          <AcademyTopbar
            academyData={academyData}
            setAcademyData={setAcademyData}
          />
          <div className="grid grid-cols-12 gap-4 add-academy px-10 pt-10">
            <div className="col-span-3">
              <HorizontalSteps
                title="Add Academy"
                steps={["Academy Details", "Courses", "Achievements"]}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
              />
            </div>
            <div className="col-span-9">
              <AddAcademyPageTwo
                academyData={academyData}
                setAcademyData={setAcademyData}
              />
            </div>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <AcademyTopbar
            academyData={academyData}
            setAcademyData={setAcademyData}
          />
          <div className="grid grid-cols-12 gap-4 add-academy px-10 pt-10">
            <div className="col-span-3 me-10">
              <HorizontalSteps
                title="Add Academy"
                steps={["Academy Details", "Courses", "Achievements"]}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
              />
            </div>
            <div className="col-span-9">
              <AddAcademyPageThree
                academyData={academyData}
                setAcademyData={setAcademyData}
              />
            </div>
          </div>
        </>
      );
    default:
      return <p className="h-100 w-100 text-center">Invalid Page</p>;
  }
};

export default AddAcademy;
