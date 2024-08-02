import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import BlueButton from "../../reusable components/BlueButton/BlueButton";
import HorizontalManagment from "../../reusable components/HorizontalMangment/HorizontalManagment";
import InputField from "../../reusable components/InputField/InputField";
import ProfilePicture from "../../reusable components/ProfilePicture/ProfilePicture";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import Topbar from "../Topbar";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Settings.css";
import "../../reusable components/InputField/InputField.css";
import calendarIcon from "../../assets/calendar.png";
import SettingsPageOne from "./SettingsPageOne";
import SettingsPageTwo from "./SettingsPageTwo";

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
      return <SettingsPageOne />;
    case 1:
      return <SettingsPageTwo />;
    case 2:
    // return <SettingsPageThree />;
  }
};

export default Settings;
