import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Settings.css";
import "../../reusable components/InputField/InputField.css";
import SettingsPageOne from "./SettingsPageOne";
import SettingsPageTwo from "./SettingsPageTwo";
import SettingsPageThree from "./SettingsPageThree";

const Settings = ({ currentStep }) => {
  const [nationality, setNationality] = useState("");
  const basicInfo = [
    { label: "First Name (English)", placeholder: "ex (Ahmed)" },
    { label: "Middle Name (English)", placeholder: "ex (Kamal)" },
    { label: "Last Name (English)", placeholder: "ex (Mealy)" },
  ];
  const nationalities = [
    { value: "eg", label: "Egypt" },
    { value: "ca", label: "Canada" },
    { value: "mx", label: "Mexico" },
    { value: "gb", label: "United Kingdom" },
    { value: "fr", label: "France" },
  ];

  const handleChange = (event) => {
    setNationality(event.target.value);
  };
  switch (currentStep) {
    case 0:
      return <SettingsPageOne currentStep={currentStep} />;
    case 1:
      return <SettingsPageTwo currentStep={currentStep} />;
    case 2:
      return <SettingsPageThree currentStep={currentStep} />;
  }
};

export default Settings;
