import "./AddAcademy.css";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import InputField from "../../reusable components/InputField/InputField";
import PhoneNumberField from "../../reusable components/PhoneNumberField/PhoneNumberField";
import ComboAutocomplete from "../../reusable components/AutoComplete/ComboAutoComplete";

const AddAcademyPageTwo = ({ academyData, setAcademyData }) => {
  const countries = [
    { country: "Egypt", code: "+20" },
    { country: "United States", code: "+1" },
    { country: "Germany", code: "+49" },
    { country: "France", code: "+33" },
    { country: "India", code: "+91" },
  ];

  console.log("Academy Data in Page Two:", academyData);

  return (
    <div className="px-10 pt-10 space-y-5">
      {/* Location Card */}
      <WhiteCard title="Location">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div>
            <label className="font-normal text-xs">Country</label>
            <ComboAutocomplete
              options={countries}
              placeholder="Egypt"
              value={
                countries.find(
                  (c) => c.country === academyData.address.Country
                ) || null
              }
              onChange={(e, newValue) =>
                setAcademyData({
                  ...academyData,
                  address: {
                    ...academyData.address,
                    Country: newValue ? newValue.country : "",
                  },
                })
              }
            />
          </div>
          <div className="mt-3">
            <InputField
              label={"City"}
              placeholder="Cairo"
              type="text"
              value={academyData.address.City || ""}
              setValue={(e) =>
                setAcademyData({
                  ...academyData,
                  address: {
                    ...academyData.address,
                    City: e.target.value,
                  },
                })
              }
            />
          </div>
          <InputField
            label="Area"
            placeholder="El Dokki"
            type="text"
            value={academyData.address.Area || ""}
            setValue={(e) =>
              setAcademyData({
                ...academyData,
                address: {
                  ...academyData.address,
                  Area: e.target.value,
                },
              })
            }
          />
          <InputField
            label="Postal Code"
            type="text"
            value={academyData.address.postalCode || ""}
            setValue={(e) =>
              setAcademyData({
                ...academyData,
                address: {
                  ...academyData.address,
                  postalCode: e.target.value,
                },
              })
            }
          />
          <div className="md:col-span-2">
            <InputField
              label="Address"
              type="text"
              placeholder="Enter full address"
              style={{ height: "80px" }}
              value={academyData.address.AddressDetials || ""}
              setValue={(e) =>
                setAcademyData({
                  ...academyData,
                  address: {
                    ...academyData.address,
                    AddressDetials: e.target.value,
                  },
                })
              }
            />
          </div>
        </div>
      </WhiteCard>

      {/* Contact Card */}
      <WhiteCard title="Contact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PhoneNumberField
            label="Mobile Number"
            value={academyData.phoneNumber || ""}
            onChange={(val) =>
              setAcademyData({ ...academyData, phoneNumber: val })
            }
          />
          <div>
            <label className="font-normal text-xs">Land Line</label>
            <InputField
              type="text"
              setValue={(e) =>
                setAcademyData({ ...academyData, landLine: e.target.value })
              }
              style={{ margin: "5px 0" }}
            />
          </div>
          <div className="md:col-span-2">
            <InputField
              label="Email"
              placeholder="example@example.com"
              type="email"
              style={{ padding: "10px" }}
              value={academyData.email || ""}
              setValue={(e) =>
                setAcademyData({ ...academyData, email: e.target.value })
              }
            />
          </div>
        </div>
      </WhiteCard>
    </div>
  );
};

export default AddAcademyPageTwo;
