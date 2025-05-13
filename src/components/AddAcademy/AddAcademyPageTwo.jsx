import "./AddAcademy.css";
import HorizontalSteps from "../../reusable components/HorizontalSteps/HorizontalSteps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import InputField from "../../reusable components/InputField/InputField";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import Topbar from "../Topbar";
import { Autocomplete, TextField } from "@mui/material";
import PhoneNumberField from "../../reusable components/PhoneNumberField/PhoneNumberField";
import { useState } from "react";
import ComboAutocomplete from "../../reusable components/AutoComplete/ComboAutoComplete";
import AcademyTopbar from "./AcademyTopbar";

const AddAcademyPageTwo = ({ currentStep }) => {
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
      <div className="px-10 pt-10 space-y-5">
        {/* Location Card */}
        <WhiteCard title="Location">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div>
              <label className="font-normal text-xs">Country</label>
              <ComboAutocomplete options={top100Films} placeholder="Egypt" />
            </div>
            <div>
              <label className="font-normal text-xs">City</label>
              <ComboAutocomplete options={top100Films} placeholder="Cairo" />
            </div>
            <InputField label="Area" placeholder="elDokki" type="text" />
            <InputField label="Postal Code" type="text" />
            <div className="md:col-span-2">
              <InputField
                label="Address"
                type="text"
                style={{ height: "80px" }}
              />
            </div>
          </div>
        </WhiteCard>

        {/* Courses Card */}
        <WhiteCard title="Courses">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PhoneNumberField
              label="Mobile Number"
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
            <PhoneNumberField
              label="Landline"
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
            <div className="md:col-span-2">
              <InputField
                label="Email"
                placeholder="ex (example@example.com)"
                type="email"
                style={{ padding: "0.5rem" }}
              />
            </div>
          </div>
        </WhiteCard>
      </div>
    </>
  );
};

export default AddAcademyPageTwo;
