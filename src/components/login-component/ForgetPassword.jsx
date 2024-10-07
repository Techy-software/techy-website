import "../login-component.css";
import techyLogo from "../../../assets/techyLogo.svg";
import { useState } from "react";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import InputField from "../../reusable components/InputField/InputField";
import BlueButton from "../../reusable components/BlueButton/BlueButton";
import { Padding } from "@mui/icons-material";
const ForgetPassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle modal open
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="absolute w-full h-1/2 top-div bg-cover bg-center bg-no-repeat border border-black overflow-hidden grid grid-rows-[1fr_auto]">
        <img src={techyLogo} alt="Techy logo" className="ml-[73px] mt-[25px]" />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center p-5 bg-white rounded-lg shadow-md absolute mt-[150px] w-[37%] z-10">
          <div className="">
            <p className="cursor-pointer text-blue-500 text-lg my-3 font-semibold">
              &lt; back
            </p>
            <h1 className="pr-[250px] text-2xl font-bold">Forget Password ?</h1>
            <p className="text-slate-400 text-sm mt-3">
              Please enter your email to send a code to reset your password
            </p>
          </div>
          <div className="w-full mt-5 mb-3 pl-10 flex flex-col">
            <label htmlFor="username-input" className="mb-3 font-medium">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-[90%] h-10 rounded-md border border-gray-300 p-2"
            />
          </div>
          <div className="flex justify-center mt-5 w-[83%]">
            <button
              className="w-full py-3 px-5 text-base font-semibold text-white bg-[#016BDD] rounded-lg hover:bg-[#015bbd] transition-colors"
              onClick={openModal}
            >
              Send Code
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <WhiteCard title={"Verification"} style={"px-10"}>
            <p className="text-slate-400 text-sm mt-2 mb-4">
              Please verify your email, a 4 digits OTP is send to
              ahmed@gmail.com
            </p>
            <InputField
              label={"OTP"}
              placeholder={"Enter OTP Code"}
              style={{ padding: 10 }}
            />
            <p className="text-slate-400 text-xs mt-10">
              Time Remaining: <span className="text-sm text-black">1:09</span>
            </p>
            <hr className="my-5" />
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <p className="text-slate-400">Didn't get the code ?</p>
                <span className="text-green-500">Resend Code</span>
              </div>
              <BlueButton
                text="Continue"
                buttonStyle="py-2 px-2"
                onClick={closeModal}
              />
            </div>
          </WhiteCard>
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;
