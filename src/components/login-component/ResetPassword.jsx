import "./login-component.css";
import techyLogo from "../../assets/techyLogo.svg";
import { useState } from "react";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import InputField from "../../reusable components/InputField/InputField";
import BlueButton from "../../reusable components/BlueButton/BlueButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ResetPassword = () => {
  return (
    <div>
      <div className="absolute w-full h-1/2 top-div bg-cover bg-center bg-no-repeat border border-black overflow-hidden grid grid-rows-[1fr_auto]">
        <img src={techyLogo} alt="Techy logo" className="ml-[73px] mt-[25px]" />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center p-5 bg-white rounded-lg shadow-md absolute mt-[150px] w-[37%] z-10">
          <div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ color: "#5c67ff" }}
              />
              <p className="cursor-pointer text-blue-500 text-lg my-3 font-semibold">
                Back
              </p>
            </div>
            <h1 className="pr-[250px] text-2xl font-bold">Reset Password</h1>
            <p className="text-slate-400 text-sm mt-3">
              Enter strong password to use in the future
            </p>
          </div>
          <div className="w-full mt-5 pl-10 flex flex-col">
            <label htmlFor="username-input" className="mb-3 font-medium">
              New Password:
            </label>
            <input
              type="password"
              placeholder="Enter New Password"
              className="w-[90%] h-10 rounded-md border border-gray-300 p-2"
            />
          </div>
          <div className="w-full mt-5 pl-10 flex flex-col">
            <label htmlFor="username-input" className="mb-3 font-medium">
              Confirm Password:
            </label>
            <input
              type="Password"
              placeholder="Enter Password Again"
              className="w-[90%] h-10 rounded-md border border-gray-300 p-2"
            />
          </div>
          <div className="flex justify-center mt-5 w-[83%]">
            <button className="w-full py-3 px-5 text-base font-semibold text-white bg-[#016BDD] rounded-lg hover:bg-[#015bbd] transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
