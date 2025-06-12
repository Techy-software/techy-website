import React from "react";
import HorizontalSteps from "../../reusable components/HorizontalSteps/HorizontalSteps";
import CourseHeader from "../../reusable components/Header/CourseHeader";

const CompletionCourseSetup = ({ setCurrentStep }) => {
  return (
    <>
      <CourseHeader
        title="Course details"
        status="Draft"
        headerStep="Setup"
        onBack={() => {}}
        onNext={() => {}}
        nextLabel="Next Assign Mentors"
        disabled
      />

      <div className="flex gap-6 p-6">
        {/* Left Side Stepper */}
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
            currentStep={1}
            setCurrentStep={setCurrentStep}
          />
        </div>

        {/* Right Side - Certificate Form */}
        <div className="w-3/4 space-y-6">
          <div className="bg-white border rounded-lg p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Completion</h2>
              <button className="text-blue-600 font-medium hover:underline">
                Preview
              </button>
            </div>

            <div className="bg-gray-100 rounded-md p-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">
                  Course Completion Certification
                </span>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-blue-600 transition-colors after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-transform peer-checked:after:translate-x-full" />
                </label>
              </div>
              <p className="text-gray-500 mt-2 text-sm">
                Courses may award learners a certificate upon successful course
                completion. If enabled, certificates may be enabled or disabled
                per course. If disabled, no certificates will be generated or
                awarded for all courses.
              </p>
            </div>

            {/* Template Title & Footer */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">
                  Template Title <span className="text-red-500">*</span>
                </label>
                <input type="text" className="input w-full" />
              </div>
              <div>
                <label className="text-sm font-medium">Footer</label>
                <input type="text" className="input w-full" />
              </div>
            </div>

            {/* Upload Sections */}
            <UploadSection
              label="Cover Image"
              recommendation="Recommended: 1000 x 200px. By default, the course cover image will be used."
            />
            <UploadSection
              label="Certificate Badge"
              recommendation="Recommended: 180 x 180px"
            />
            <UploadSection
              label="Footer Image"
              recommendation="Recommended: 70 x 70px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const UploadSection = ({ label, recommendation }) => {
  return (
    <div className="space-y-2">
      <h3 className="font-medium text-gray-700">{label}</h3>
      <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center bg-white">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-blue-600 text-3xl">📤</div>
          <p className="text-gray-600 font-medium">Drag & Drop file here</p>
          <p className="text-sm text-gray-500">or click to browse (4mb max)</p>
        </div>
      </div>
      <p className="text-xs text-gray-400">{recommendation}</p>
    </div>
  );
};

export default CompletionCourseSetup;
