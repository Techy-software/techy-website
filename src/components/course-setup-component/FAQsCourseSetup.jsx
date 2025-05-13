import HorizontalSteps from "../../reusable components/HorizontalSteps/HorizontalSteps";
import CourseHeader from "../../reusable components/Header/CourseHeader";

const CourseFAQSetup = ({ currentStep }) => {
  const handleBack = () => {
    console.log("Go back");
  };

  const handleNext = () => {
    console.log("Proceed to next step");
  };

  const renderFAQItem = () => (
    <div className="border rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-2">
          <div className="mt-1 h-5 w-5 cursor-move text-gray-400">|||</div>
          <div>
            <h3 className="font-semibold text-sm mb-2">
              What will I get if I subscribe to this Specialization?
            </h3>
            <p className="text-sm text-gray-600">
              When you enroll in the course, you get access to all of the courses in the
              Specialization, and you earn a certificate when you complete the work. Your electronic
              Certificate will be added to your Accomplishments page - from there, you can print
              your Certificate or add it to your LinkedIn profile. If you only want to read and view
              the course content, you can audit the course for free.
            </p>
          </div>
        </div>
        <div className="text-gray-300 text-xl">🙂</div>
      </div>
    </div>
  );

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
        {/* Stepper */}
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

        {/* FAQ Section */}
        <div className="w-3/4 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">FAQ</h2>
            <button className="flex items-center space-x-2 border border-blue-500 text-blue-500 px-3 py-1.5 rounded-md hover:bg-blue-50">
              <FaPlus className="text-sm" />
              <span className="text-sm">New FAQ</span>
            </button>
          </div>

          {/* Render FAQ items */}
          {[1, 2, 3, 4].map((_, index) => (
            <React.Fragment key={index}>{renderFAQItem()}</React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseFAQSetup;
