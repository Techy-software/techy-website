import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import Topbar from "../Topbar";
import plusCircle from "../../assets/plus.png";
import HorizontalManagment from "../../reusable components/HorizontalMangment/HorizontalManagment";
import InputField from "../../reusable components/InputField/InputField";
import { height } from "@fortawesome/free-regular-svg-icons/faAddressBook";
import BlueButton from "../../reusable components/BlueButton/BlueButton";

const SettingsPageThree = ({ currentStep }) => {
  return (
    <>
      <Topbar className="fixed" />
      <div className="grid grid-cols-12 gap-4 add-academy px-10 pt-10">
        <div className="col-span-3 me-10">
          <HorizontalManagment
            steps={["Edit profile", "Address & Contact info", "Password"]}
            currentStep={currentStep}
          />
        </div>
        <div className="col-span-9">
          <WhiteCard title="Change password">
            <div className="grid grid-cols-12 gap-6 mt-5">
              <div className="col-span-6">
                <InputField
                  label="Current password"
                  style={{ padding: "10px", marginBottom: "10px" }}
                  type="password"
                />
                <InputField
                  label="New password"
                  style={{
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                  type="password"
                />
                <InputField
                  label="Confirm password"
                  style={{ padding: "10px", marginBottom: "10px" }}
                  type="password"
                />
              </div>
              <div className="col-span-6 bg-slate-50 rounded-xl p-5">
                <h3 className="font-bold text-xl mb-4">Rules for password</h3>
                <p className="mb-3 text-slate-500">
                  to create a new password, you have to meet all the following
                  requierments:
                </p>
                <ul className="list-disc ms-10 text-slate-500">
                  <li>Minimum 8 characters</li>
                  <li>At least one special character</li>
                  <li>At least one number</li>
                  <li>Can't be the same as previous</li>
                </ul>
              </div>
            </div>
            <hr className="mt-7" />
            <div className="w-100 justify-end flex mt-5">
              <BlueButton
                text="Cancel"
                buttonStyle={"bg-white me-5"}
                textStyle={"text-blue-600"}
              />
              <BlueButton />
            </div>
          </WhiteCard>
        </div>
      </div>
    </>
  );
};
export default SettingsPageThree;
