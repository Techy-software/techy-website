import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberField = ({ label, value, onChange, className }) => {
  return (
    <div className={`flex flex-col mt-2 ${className}`}>
      <label className="font-normal text-xs mb-1">{label}</label>
      <PhoneInput
        country={"eg"} // default country code (Egypt in this case)
        value={value}
        onChange={onChange}
        inputStyle={{ width: "100%" }}
        inputClass="h-10"
      />
    </div>
  );
};

export default PhoneNumberField;
