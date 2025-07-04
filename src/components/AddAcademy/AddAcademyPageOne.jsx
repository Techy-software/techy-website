import "./AddAcademy.css";
import HorizontalSteps from "../../reusable components/HorizontalSteps/HorizontalSteps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import InputField from "../../reusable components/InputField/InputField";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import Topbar from "../Topbar";
import ProfilePicture from "../../reusable components/ProfilePicture/ProfilePicture";
import AcademyTopbar from "./AcademyTopbar";

const AddAcademyPageOne = ({ academyData, setAcademyData }) => {
  console.log("AddAcademyPageOne", academyData);
  const ImageUploader = (file) => {
    setAcademyData({
      ...academyData,
      thumbnail: file,
    });
    console.log("Image uploaded:", file);
  };
  return (
    <>
      <div className="px-10 pt-10">
        <div>
          <ProfilePicture
            onImageChange={ImageUploader}
            src={academyData.thumbnail}
          />
          <WhiteCard title="Academy Details" style="mt-12">
            <div className="grid grid-cols-12 gap-4 mt-7">
              <div className="col-span-6">
                <InputField
                  label="Academy Name"
                  type="text"
                  placeholder="Enter value"
                  value={academyData.schoolName}
                  setValue={(e) =>
                    setAcademyData({
                      ...academyData,
                      schoolName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-span-6">
                <InputField
                  label="Owner Name"
                  type="text"
                  placeholder="Enter value"
                  value={academyData.ownerName}
                  setValue={(e) =>
                    setAcademyData({
                      ...academyData,
                      ownerName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-span-6">
                <InputField
                  label="Established at"
                  type="date"
                  placeholder="Enter value"
                  value={academyData.establishedDate}
                  setValue={(e) =>
                    setAcademyData({
                      ...academyData,
                      establishedDate: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </WhiteCard>
        </div>
      </div>
    </>
  );
};

export default AddAcademyPageOne;
