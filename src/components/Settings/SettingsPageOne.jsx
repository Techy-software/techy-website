import "./Settings.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import BlueButton from "../../reusable components/BlueButton/BlueButton";
import HorizontalManagment from "../../reusable components/HorizontalMangment/HorizontalManagment";
import InputField from "../../reusable components/InputField/InputField";
import ProfilePicture from "../../reusable components/ProfilePicture/ProfilePicture";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import Topbar from "../Topbar";
import { useState } from "react";
import DatePicker from "react-datepicker";
import calendarIcon from "../../assets/calendar.png";

const SettingsPageOne = () => {
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
            <hr className="mt-5" />
            <div className="w-100 justify-end flex mt-5">
              <BlueButton
                text="Cancel"
                buttonStyle={"bg-white me-5"}
                textStyle={"text-blue-600"}
              />
              <BlueButton />
            </div>
          </ProfilePicture>
          <WhiteCard title="Basic info" style="mt-5 mb-5">
            <div className="grid grid-cols-12 gap-4 mt-7">
              {basicInfo.map((item, index) => (
                <div className="col-span-6" key={index}>
                  <InputField
                    type="text"
                    label={item.label}
                    placeholder={item.placeholder}
                  />
                </div>
              ))}
              <FormControl className="col-span-6">
                <label className="formLabel">Natioanlity</label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={nationality}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ height: "35px" }}
                >
                  <MenuItem value="">
                    <em className="text-slate-400">Please Select</em>
                  </MenuItem>
                  {nationalities.map((nationality) => (
                    <MenuItem key={nationality.value} value={nationality.value}>
                      {nationality.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className="col-span-6">
                <InputField
                  label="ID"
                  placeholder="ex (29831234667765432)"
                  type="text"
                />
              </div>
              <FormControl className="col-span-6">
                <label className="formLabel">Marital Status</label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={nationality}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ height: "35px" }}
                >
                  <MenuItem value="">
                    <em className="text-slate-400">Please Select</em>
                  </MenuItem>
                  {nationalities.map((nationality) => (
                    <MenuItem key={nationality.value} value={nationality.value}>
                      {nationality.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className="col-span-6 date-picker-container">
                <label className="formLabel">Date of birth</label>
                <DatePicker
                  // selected={startDate}
                  // onChange={(date) => setStartDate(date)}
                  className="w-full mt-1"
                  placeholderText="Select Date"
                />
                <img
                  src={calendarIcon}
                  alt="calendar"
                  className="calendar-icon"
                />
              </div>
              <FormControl className="col-span-6">
                <label className="formLabel">Gender</label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={nationality}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ height: "35px" }}
                >
                  <MenuItem value="">
                    <em className="text-slate-400">Please Select</em>
                  </MenuItem>
                  {nationalities.map((nationality) => (
                    <MenuItem key={nationality.value} value={nationality.value}>
                      {nationality.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
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
    </div>
  );
};

export default SettingsPageOne;
