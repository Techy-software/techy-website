import "./AddAcademy.css";
import HorizontalSteps from "../../reusable components/HorizontalSteps/HorizontalSteps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import InputField from "../../reusable components/InputField/InputField";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import Topbar from "../Topbar";
import ProfilePicture from "../../reusable components/ProfilePicture/ProfilePicture";
import AcademyTopbar from "./AcademyTopbar";

const AddAcademyPageOne = ({ currentStep }) => {
  return (
    <>
      <AcademyTopbar />
      <div className="grid grid-cols-12 gap-4 add-academy px-10 pt-10">
        <div className="col-span-3 me-10">
          <HorizontalSteps
            title="Add Academy"
            steps={["Academy Details", "Courses", "Mentors"]}
            currentStep={currentStep}
          />
        </div>
        <div className="col-span-9">
          <ProfilePicture />
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

export default AddAcademyPageOne;
