import React from "react";
import HorizontalSteps from "../../reusable components/HorizontalSteps/HorizontalSteps";
import CourseHeader from "../../reusable components/Header/CourseHeader";

const OverViewCourseSetup = ({ headerStep, currentStep }) => {
  const handleBack = () => {
    console.log("Go back");
  };

  const handleNext = () => {
    console.log("Proceed to next step");
  };

  return (
    <>
      <CourseHeader
        title="Course details"
        status="Draft"
        headerStep="Setup"
        onBack={handleBack}
        onNext={handleNext}
        nextLabel="Next Assign Mentors"
      />

      <div className="flex gap-6 p-6">
        {/* Left Side - Stepper */}
        <div className="w-1/4">
          <HorizontalSteps
            title="Publish your course"
            steps={[
              "Overview",
              "Completion",
              "FAQs",
              "Pricing and payment methods",
              "Publishing",
            ]}
            currentStep={currentStep}
          />
        </div>

        {/* Right Side - Form Content */}
        <div className="w-3/4 space-y-8">
          {/* Thumbnail Upload */}
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Thumbnail</h2>
            <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center">
              <div className="flex justify-center items-center space-x-4">
                <div className="text-gray-500">
                  <p className="font-medium">Drag & Drop file here</p>
                  <p className="text-sm">or click to browse (4 mb max)</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Upload your course image here. It must meet our{" "}
                <a href="#" className="underline">
                  course image quality standards
                </a>{" "}
                to be accepted. Important guidelines: 750x422 pixels; .jpg,
                .jpeg, .gif, or .png; no text on the image.
              </p>
            </div>
          </div>

          {/* Course Details */}
          <div className="border rounded-lg p-6 bg-white shadow-sm space-y-4">
            <h2 className="text-lg font-semibold">Course details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Course ID</label>
                <input type="text" className="input" placeholder="1234" disabled />
              </div>
              <div>
                <label className="text-sm font-medium">
                  Category <span className="text-red-500">*</span>
                </label>
                <select className="input">
                  <option>Web development</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">
                  Course title <span className="text-red-500">*</span>
                </label>
                <input type="text" className="input" placeholder="ex (English)" />
              </div>
              <div>
                <label className="text-sm font-medium">
                  Course title (Arabic) <span className="text-red-500">*</span>
                </label>
                <input type="text" className="input" />
              </div>
              <div>
                <label className="text-sm font-medium">Description (English)</label>
                <textarea className="input h-24" placeholder="Add your description ..." />
              </div>
              <div>
                <label className="text-sm font-medium">Description (Arabic)</label>
                <textarea className="input h-24" />
              </div>
              <div className="col-span-2">
                <label className="text-sm font-medium">
                  Deadline <span className="text-red-500">*</span>
                </label>
                <select className="input">
                  <option>30 days after enrollment</option>
                </select>
              </div>
            </div>
          </div>

          {/* Course Location */}
          <div className="border rounded-lg p-6 bg-white shadow-sm space-y-4">
            <h2 className="text-lg font-semibold">Course location</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">
                  Course type <span className="text-red-500">*</span>
                </label>
                <select className="input">
                  <option>Offline</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="input"
                  value="El-Gaish, Tanta Qism 2, Tanta, Gharbia"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverViewCourseSetup;
