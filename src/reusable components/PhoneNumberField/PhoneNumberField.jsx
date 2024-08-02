import React from "react";
import ComboAutocomplete from "../AutoComplete/ComboAutoComplete";

const PhoneNumberField = ({ label, value, onChange, className }) => {
  const countryCodes = [{ code: "+1" }, { code: "+44" }, { code: "+910" }];

  const handleCountryCodeChange = (e) => {
    onChange({ ...value, countryCode: e.target.value });
  };

  const handlePhoneNumberChange = (e) => {
    onChange({ ...value, phoneNumber: e.target.value });
  };

  return (
    <div className={`grid grid-cols-12 gap-0 items-center mt-2 ${className}`}>
      <div className="col-span-12">
        <label className="font-normal text-xs">{label}</label>
      </div>
      <div className="col-span-2">
        <ComboAutocomplete options={countryCodes} placeholder="Country" />
      </div>
      <div className="col-span-10 mt-3">
        <input
          type="tel"
          placeholder="Enter phone number"
          value={value.phoneNumber}
          onChange={handlePhoneNumberChange}
          className="h-10 w-full p-2"
        />
      </div>
    </div>
  );
};

export default PhoneNumberField;
