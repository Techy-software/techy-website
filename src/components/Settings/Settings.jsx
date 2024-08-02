import BlueButton from "../../reusable components/BlueButton/BlueButton";
import HorizontalManagment from "../../reusable components/HorizontalMangment/HorizontalManagment";
import ProfilePicture from "../../reusable components/ProfilePicture/ProfilePicture";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import Topbar from "../Topbar";

const Settings = () => {
  return (
    <div>
      <Topbar />
      <div className="grid grid-cols-12 gap-4 add-academy px-10 pt-10">
        <div className="col-span-3 me-10">
          <HorizontalManagment
            steps={["Edit profile", "Address & Contact info", "Password"]}
            currentStep={0}
          />
        </div>
        <div className="col-span-9">
          <ProfilePicture title="Profile Picture">
            <hr />
            <BlueButton
              text="Cancel"
              buttonStyle={"bg-white"}
              textStyle={"text-blue-600"}
            />
            <BlueButton />
          </ProfilePicture>
        </div>
      </div>
    </div>
  );
};

export default Settings;
