import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HorizontalSteps from "../../../reusable components/HorizontalSteps/HorizontalSteps";
import WhiteCard from "../../../reusable components/WhiteCard/WhiteCard";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const OpportunityDetails = () => {
  const file = null;
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 m-3">
        <HorizontalSteps
          steps={["Overview", "Speakers", "Pricing & Payment methods"]}
          currentStep={0}
          title={"Publish Opportunity"}
        />
      </div>
      <WhiteCard title={"Thumbnail"} style={"col-span-9 m-3"}>
        <div
          className="flex justify-center py-5"
          onDragOver={(e) => e.preventDefault()}
          // onDrop={handleDragDrop}
        >
          <div className="bg-white p-8 rounded-lg border-dashed border-2 w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6">Upload a Photo</h1>
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
      </WhiteCard>
    </div>
  );
};
export default OpportunityDetails;
