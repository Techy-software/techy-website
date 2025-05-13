import React from "react";
import HorizontalSteps from "../../reusable components/HorizontalSteps/HorizontalSteps";
import CourseHeader from "../../reusable components/Header/CourseHeader";

const CoursePublishingSetup = ({ headerStep, currentStep }) => {
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

        {/* Right Side - Target and Tags Section */}
        <div className="w-3/4 space-y-8">
          {/* Target Section */}
          <div className="border rounded-lg p-6 bg-white shadow-sm space-y-6">
            <h2 className="text-lg font-semibold">Target</h2>

            {/* Prerequisites */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                What are the requirements or prerequisites for taking your
                course? <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500">
                List the required skills, experience, tools or equipment
                learners should have prior to taking your course. If there are
                no requirements, use this space as an opportunity to lower the
                barrier for beginners.
              </p>
              <textarea
                className="w-full p-3 border rounded-md"
                rows="3"
                placeholder="Prerequisites"
              />
            </div>

            {/* Who is this course for? */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Who is this course for? <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500">
                Enter age range for students who will find your course content
                valuable. This will help you attract the right learners to your
                course.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium">
                    Age from <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full p-2 border rounded-md">
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Age to <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full p-2 border rounded-md">
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Course level <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Tags Section */}
          <div className="border rounded-lg p-6 bg-white shadow-sm space-y-4">
            <h2 className="text-lg font-semibold">Tags</h2>
            <p className="text-sm text-gray-500">
              Your course Tags is crucial to your success. If it’s done right,
              it can also help you gain visibility in search results.
            </p>
            <input
              type="text"
              className="w-full p-3 border rounded-md"
              placeholder="Tags"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePublishingSetup;
