import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HorizontalSteps from "../../reusable components/HorizontalSteps/HorizontalSteps";
import InputField from "../../reusable components/InputField/InputField";
import PostTopBar from "../../reusable components/PostTopBar/PostTopBar";
import WhiteCard from "../../reusable components/WhiteCard/WhiteCard";
import FileUploader from "../add-mentor-component/FileUploader";
import Topbar from "../Topbar";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import calendarIcon from "../../assets/calendar.png";
import "./Reward.css";
const AddReward = () => {
  const file = null;
  return (
    <div className="bg-slate-50">
      <PostTopBar title="Create Ads" buttonText="Submit" />
      <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-3">
          <HorizontalSteps
            title="Publish Discount Coupon"
            steps={["Overview"]}
            currentStep={0}
          />
        </div>
        <WhiteCard title="Ads details" style={"col-span-9 p-5"}>
          <div
            className="flex justify-center py-5"
            onDragOver={(e) => e.preventDefault()}
            // onDrop={handleDragDrop}
          >
            <div className="bg-white p-8 rounded-lg border-dashed border-2 w-full max-w-md">
              <h1 className="text-2xl font-bold mb-6">Upload a Video</h1>
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
                    <p className="text-gray-500 mb-2">Drag & Drop file here</p>
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
          <InputField label="Title" style={{ padding: "10px" }} />
          <InputField
            label="Description"
            style={{ padding: "10px", height: "100px" }}
          />
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <InputField
                label="ID"
                placeholder="1234"
                style={{ padding: "10px" }}
              />
            </div>
            <div className="col-span-6">
              <InputField
                label="Reward promo Code"
                style={{ padding: "10px" }}
              />
            </div>
            <div className="col-span-6">
              <InputField
                label="Reward type"
                placeholder="Points"
                style={{ padding: "10px" }}
              />
            </div>
            <div className="col-span-6">
              <InputField
                label="Reward value"
                placeholder="100"
                style={{ padding: "10px" }}
              />
            </div>
            <div className="col-span-6 date-picker-container">
              <label className="formLabel">Valid from</label>
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
            <div className="col-span-6 date-picker-container">
              <label className="formLabel">Valid until</label>
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
          </div>
        </WhiteCard>
      </div>
    </div>
  );
};

export default AddReward;
