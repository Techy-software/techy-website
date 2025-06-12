import HorizontalSteps from "../../reusable components/HorizontalSteps/HorizontalSteps";
import CourseHeader from "../../reusable components/Header/CourseHeader";
import React from "react";

const CourseFAQSetup = ({ setCurrentStep, formData, setFormData }) => {
  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleFAQChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      faqs: {
        ...prev.faqs,
        [field]: value,
      },
    }));
  };

  return (
    <>
      <CourseHeader
        title="Course details"
        status="Draft"
        headerStep="Setup"
        onBack={handleBack}
        onNext={handleNext}
        nextLabel="Next: Assign Mentors"
      />

      <div className="flex gap-6 p-6">
        {/* Stepper */}
        <div className="w-1/4">
          <HorizontalSteps
            title="Publish your course"
            steps={[
              "Overview",
              "FAQs",
              "Pricing and payment methods",
              "Publishing",
            ]}
            currentStep={1}
            setCurrentStep={setCurrentStep}
          />
        </div>

        {/* FAQ Form */}
        <div className="w-3/4 space-y-6">
          <h2 className="text-lg font-semibold">Frequently Asked Question</h2>

          <div className="border rounded-lg bg-white p-6 shadow-sm space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Question <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="What will I get if I subscribe to this Specialization?"
                value={formData.faqs?.question || ""}
                onChange={(e) => handleFAQChange("question", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                About this course <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="5"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="When you enroll in this course, you will..."
                value={formData.faqs?.["about course"] || ""}
                onChange={(e) =>
                  handleFAQChange("about course", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseFAQSetup;
