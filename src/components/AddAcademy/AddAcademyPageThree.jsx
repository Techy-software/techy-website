import HorizontalSteps from "../../reusable components/HorizontalSteps/HorizontalSteps";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import Topbar from "../Topbar";
import plusCircle from "../../assets/plus.png";
import AcademyTopbar from "./AcademyTopbar";

const AddAcademyPageThree = ({ currentStep }) => {
  return (
    <>
      <div className="px-10 pt-10">
        <div className="">
          <WhiteCard title="Certificates">
            <div className="text-blue-700 flex items-start gap-2 mt-4 cursor-pointer">
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
