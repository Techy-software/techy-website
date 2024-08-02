import HorizontalSteps from "../../reusable components/HorizontalSteps/HorizontalSteps";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import Topbar from "../Topbar";
import plusCircle from "../../assets/plus.png";

const AddAcademyPageThree = ({ currentStep }) => {
  return (
    <>
      <Topbar className="fixed" />
      <div className="grid grid-cols-12 gap-4 add-academy px-10 pt-10">
        <div className="col-span-3 me-10">
          <HorizontalSteps
            steps={["Academy Details", "Courses", "Mentors"]}
            currentStep={currentStep}
            style="h-10"
          />
        </div>
        <div className="col-span-9">
          <WhiteCard title="Certificates">
            <div className="text-blue-700 flex items-start gap-2 mt-4">
              <img src={plusCircle} alt="certificate" className="w-5 h-5 " />
              <p>Add Certificate</p>
            </div>
          </WhiteCard>
        </div>
      </div>
    </>
  );
};
export default AddAcademyPageThree;
