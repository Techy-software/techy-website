import React from "react";
import "./AddAcademy.css";
import HorizontalSteps from "../../reusable components/HorizontalSteps/HorizontalSteps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Topbar from "../Topbar";
import InputField from "../../reusable components/InputField/InputField";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";

const AddAcademy = () => {
  return (
    <>
      <Topbar className="fixed" />
      <div className="grid grid-cols-12 gap-4 add-academy px-10 pt-5">
        <div className="col-span-3 me-10">
          <HorizontalSteps
            steps={["Academy Details", "Courses", "Mentors"]}
            currentStep={0}
          />
        </div>
        <div className="col-span-9">
          <WhiteCard title="Academy Logo">
            <div className="flex items-center mt-7">
              <div className="border-2 border-dashed rounded-full me-5">
                <FontAwesomeIcon icon={faUser} className="p-7 w-6 h-6" />
              </div>
              <button className="border-2 text-blue-500 p-3 rounded-lg">
                Upload Picture
              </button>
            </div>
          </WhiteCard>
          <WhiteCard title="Academy Details" style="mt-12">
            <div className="grid grid-cols-12 gap-4 mt-7">
              {["Academy Name", "Owner Name", "Established at"].map(
                (label, index) => (
                  <div className="col-span-6" key={index}>
                    <InputField
                      label={label}
                      type="text"
                      placeholder="Enter value"
                    />
                  </div>
                )
              )}
            </div>
          </WhiteCard>
        </div>
      </div>
    </>
  );
};

export default AddAcademy;
