import React from "react";
import HorizontalSteps from "../../reusable components/HorizontalSteps/HorizontalSteps";
import CourseHeader from "../../reusable components/Header/CourseHeader";
import { useNavigate } from "react-router-dom";

const CoursePublishingSetup = ({ setCurrentStep, formData, setFormData }) => {
  const navigator = useNavigate();
  const handleBack = () => {
    console.log("Go back");
  };

  const handleNext = () => {
    navigator("/CourseMentorAssign/new", { state: formData });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("items", name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log("Form data updated:", formData);
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
              "FAQs",
              "Pricing and payment methods",
              "Publishing",
            ]}
            currentStep={3}
            setCurrentStep={setCurrentStep}
          />
        </div>

        {/* Right Side - Target and Tags Section */}
        <div className="w-3/4 space-y-8">
          {/* Target Section */}
          <div className="border rounded-2xl p-8 bg-white shadow-sm space-y-8">
            <h2 className="text-xl font-semibold text-gray-800">
              Target Audience
            </h2>

            {/* Prerequisites */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Requirements / Prerequisites{" "}
                <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500">
                List the skills, tools, or prior knowledge required. If none,
                use this to encourage beginners.
              </p>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="e.g. Basic math, Laptop with internet, etc."
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
              />
            </div>

            {/* Age & Level */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Who is this course for? <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500">
                Specify the ideal age range and experience level of your
                learners.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
                {/* Age From */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age From <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="ageFrom"
                    value={formData.ageFrom}
                    onChange={handleChange}
                    className="w-full h-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="">Select</option>
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i + 5}>
                        {i + 5}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Age To */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age To <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="ageTo"
                    value={formData.ageTo}
                    onChange={handleChange}
                    className="w-full h-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="">Select</option>
                    {[...Array(15)].map((_, i) => (
                      <option key={i} value={i + 10}>
                        {i + 10}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course Level <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="w-full h-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePublishingSetup;
