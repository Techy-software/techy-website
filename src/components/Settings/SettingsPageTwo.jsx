import "./Settings.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import BlueButton from "../../reusable components/BlueButton/BlueButton";
import HorizontalManagment from "../../reusable components/HorizontalMangment/HorizontalManagment";
import InputField from "../../reusable components/InputField/InputField";
import ProfilePicture from "../../reusable components/ProfilePicture/ProfilePicture";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import Topbar from "../Topbar";
import { useState } from "react";
import PhoneNumberField from "../../reusable components/PhoneNumberField/PhoneNumberField";
import ComboAutocomplete from "../../reusable components/AutoComplete/ComboAutoComplete";

const SettingsPageTwo = () => {
  const top100Films = [
    { label: "To Kill a Mockingbird", year: "1962" },
    { label: "Toy Story 3", year: 2010 },
    { label: "Logan", year: 2017 },
    { label: "Full Metal Jacket", year: 1987 },
    { label: "Dangal", year: 2016 },
    { label: "The Sting", year: 1973 },
    { label: "2001: A Space Odyssey", year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: "Toy Story", year: 1995 },
    { label: "Bicycle Thieves", year: 1948 },
    { label: "The Kid", year: 1921 },
    { label: "Inglourious Basterds", year: 2009 },
    { label: "Snatch", year: 2000 },
    { label: "3 Idiots", year: 2009 },
    { label: "Monty Python and the Holy Grail", year: 1975 },
  ];

  const [phoneNumber, setPhoneNumber] = useState({
    countryCode: "+1",
    phoneNumber: "",
  });
  return (
    <>
      <div>
        <div className="grid grid-cols-12 gap-4 add-academy px-10 pt-10">
          <div className="col-span-3 me-10">
            <HorizontalManagment
              steps={["Edit profile", "Address & Contact info", "Password"]}
              currentStep={1}
            />
          </div>
          <div className="col-span-9">
            <WhiteCard title="Courses">
              <div className="grid grid-cols-12 gap-4">
                <PhoneNumberField
                  label="Mobile Number"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  className="col-span-6"
                />
                <PhoneNumberField
                  label="Landline"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  className="col-span-6"
                />
                <div className="col-span-12">
                  <InputField
                    label="Email"
                    placeholder="ex (example@example.com)"
                    type="email"
                    style={{ padding: "0.5rem" }}
                  />
                </div>
              </div>
              <hr className="mt-3" />
              <div className="w-100 justify-end flex mt-5">
                <BlueButton
                  text="Cancel"
                  buttonStyle={"bg-white me-5"}
                  textStyle={"text-blue-600"}
                />
                <BlueButton />
              </div>
            </WhiteCard>
            <div className="col-span-9">
              <WhiteCard title="Location" style={"mt-5 mb-5"}>
                <div className="grid grid-cols-12 gap-4 mt-3">
                  <div className="col-span-6">
                    <label className="font-normal text-xs">Country</label>
                    <ComboAutocomplete
                      options={top100Films}
                      placeholder="Egypt"
                    />
                  </div>
                  <div className="col-span-6">
                    <label className="font-normal text-xs">City</label>
                    <ComboAutocomplete
                      options={top100Films}
                      placeholder="Cairo"
                    />
                  </div>
                  <div className="col-span-6">
                    <InputField
                      label="Area"
                      placeholder="elDokki"
                      type="text"
                    />
                  </div>
                  <div className="col-span-6">
                    <InputField label="Postal Code" type="text" />
                  </div>
                  <div className="col-span-12">
                    <InputField
                      label="Address"
                      type="text"
                      style={{ height: "80px" }}
                    />
                  </div>
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
      </div>
    </>
  );
};

export default SettingsPageTwo;
