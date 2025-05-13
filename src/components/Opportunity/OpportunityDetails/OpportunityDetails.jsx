import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HorizontalSteps from "../../../reusable components/HorizontalSteps/HorizontalSteps";
import WhiteCard from "../../../reusable components/WhiteCard/WhiteCard";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import InputField from "../../../reusable components/InputField/InputField";
import ComboAutocomplete from "../../../reusable components/AutoComplete/ComboAutoComplete";
import DescriptionEditor from "../../../reusable components/DescriptionEditor/DecriptionEditor";
import DatePicker from "react-datepicker";
import calendarIcon from "../../../assets/calendar.png";
import "./OpportunityDetails.css";
import { useNavigate } from "react-router-dom";
import PostTopBar from "../../../reusable components/PostTopBar/PostTopBar";
import { useParams } from "react-router-dom";
import { get } from "../../../utils/HtppService";
import { useEffect } from "react";

const OpportunityDetails = () => {
  const navigator = useNavigate();

  const file = null;
  return (
    <>
      <PostTopBar
        title={"Opportunity details"}
        saved={"Saved"}
        buttonText={"Submit"}
      />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 m-3">
          <HorizontalSteps
            steps={[
              "Overview",
              "Speakers",
              "Pricing & Payment methods",
              "Publishing",
            ]}
            currentStep={0}
            title={"Publish Opportunity"}
          />
        </div>
        <div className="col-span-9">
          <WhiteCard title={"Thumbnail"}>
            <div
              className="flex justify-center py-5"
              onDragOver={(e) => e.preventDefault()}
              // onDrop={handleDragDrop}
            >
              <div className="bg-white p-8 rounded-lg border-dashed border-2 w-full max-w-md">
                <h1 className="text-2xl font-semibold text-center mb-6">
                  Upload a Photo
                </h1>
                <div className="bg-gray-1 00 rounded-lg p-6">
                  {file ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Uploaded file"
                      className="max-h-64 object-contain"
                    />
                  ) : (
                    <div className="text-center">
                      {/* <img src={image} alt="Drag & Drop" className="max-h-64 object-contain mb-4" /> */}
                      <FontAwesomeIcon
                        icon={faFile}
                        className="h-12 object-contain mb-4"
                        style={{ color: "#0040ff" }}
                      />
                      <p className="text-gray-500 mb-2">
                        Drag & Drop file here
                      </p>
                      <p className="text-gray-500 mb-4">
                        {/* or click to browse ({maxFileSize / 1000000}mb max) */}
                      </p>
                      <input
                        type="file"
                        className="hidden"
                        // onChange={(e) => handleFileChange(e.target.files[0])}
                      />
                      <label
                        htmlFor="file-input"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
                      >
                        Browse
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </WhiteCard>
          <WhiteCard title={"Opportunity details"} style={"mt-5"}>
            <div className="grid grid-cols-12 gap-4 mt-3">
              <div className="col-span-6">
                <InputField
                  label={"Opportunity ID"}
                  placeholder={"1234"}
                  style={{ padding: 10, marginTop: 10 }}
                />
              </div>
              <div className="col-span-6">
                <label className="font-normal text-xs">City</label>
                <ComboAutocomplete
                  label={"Category"}
                  options={["Web Development", "Mobile Development"]}
                />
              </div>
              <div className="col-span-6">
                <InputField
                  label={"Opportunity Title"}
                  placeholder={"ex (English)"}
                  style={{ padding: 10, marginTop: 10 }}
                />
              </div>
              <div className="col-span-6">
                <InputField
                  label={"Opportunity Title (Arabic)"}
                  style={{ padding: 10, marginTop: 10 }}
                />
              </div>
              <div className="col-span-6">
                <label className="font-normal text-xs">
                  Description (English)
                </label>
                <DescriptionEditor />
              </div>
              <div className="col-span-6">
                <label className="font-normal text-xs">
                  Description (Arabic)
                </label>
                <DescriptionEditor />
              </div>
              <div className="col-span-6">
                <label className="font-normal text-xs">
                  Requirements (English)
                </label>
                <DescriptionEditor />
              </div>
              <div className="col-span-6">
                <label className="font-normal text-xs">
                  Requirements (Arabic)
                </label>
                <DescriptionEditor />
              </div>
              <div className="col-span-6">
                <label className="font-normal text-xs">Duration</label>
                <ComboAutocomplete
                  options={["3 Hours", "4 Hours"]}
                  placeholder={"3 Hours"}
                />
              </div>
              <div className="col-span-6 date-picker-container2">
                <label className="formLabel font-normal text-xs">Date</label>
                <DatePicker
                  // selected={startDate}
                  // onChange={(date) => setStartDate(date)}
                  className="w-full mt-1"
                  placeholderText="Select Date"
                />
                <img
                  src={calendarIcon}
                  alt="calendar"
                  className="calendar-icon2"
                />
              </div>
            </div>
          </WhiteCard>
          <WhiteCard title={"Opportunity Location"} style={"mt-5"}>
            <div className="grid grid-cols-12 gap-4 mt-3">
              <div className="col-span-6">
                <label className="font-normal text-xs">Type</label>
                <ComboAutocomplete
                  options={["Egypt", "USA"]}
                  placeholder={"Egypt"}
                />
              </div>
              <div className="col-span-6">
                <InputField
                  label={"Location"}
                  placeholder={"elDokki"}
                  style={{ padding: 10, marginTop: 10 }}
                />
              </div>
            </div>
          </WhiteCard>
          <WhiteCard title={"Media"} style={"mt-5"}>
            <div
              className="flex justify-center py-5"
              onDragOver={(e) => e.preventDefault()}
              // onDrop={handleDragDrop}
            >
              <div className="bg-white p-8 rounded-lg border-dashed border-2 w-full max-w-md">
                <h1 className="text-2xl font-semibold text-center mb-6">
                  Upload a Photo
                </h1>
                <div className="bg-gray-1 00 rounded-lg p-6">
                  {file ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Uploaded file"
                      className="max-h-64 object-contain"
                    />
                  ) : (
                    <div className="text-center">
                      {/* <img src={image} alt="Drag & Drop" className="max-h-64 object-contain mb-4" /> */}
                      <FontAwesomeIcon
                        icon={faFile}
                        className="h-12 object-contain mb-4"
                        style={{ color: "#0040ff" }}
                      />
                      <p className="text-gray-500 mb-2">
                        Drag & Drop file here
                      </p>
                      <p className="text-gray-500 mb-4">
                        {/* or click to browse ({maxFileSize / 1000000}mb max) */}
                      </p>
                      <input
                        type="file"
                        className="hidden"
                        // onChange={(e) => handleFileChange(e.target.files[0])}
                      />
                      <label
                        htmlFor="file-input"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
                      >
                        Browse
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </WhiteCard>
        </div>
      </div>
    </>
  );
};
export default OpportunityDetails;
