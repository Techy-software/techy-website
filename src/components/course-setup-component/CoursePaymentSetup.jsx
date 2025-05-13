import React from "react";
import HorizontalSteps from "../../reusable components/HorizontalSteps/HorizontalSteps";
import CourseHeader from "../../reusable components/Header/CourseHeader";

const CoursePaymentSetup = ({ headerStep, currentStep }) => {
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

        {/* Right Side - Pricing and Payment Methods */}
        <div className="w-3/4 space-y-8">
          {/* Price Section */}
          <div className="border rounded-lg p-6 bg-white shadow-sm space-y-4">
            <h2 className="text-lg font-semibold">Price</h2>
            <p className="text-sm text-gray-600">
              Please select the currency and set the price tier for your course.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Price</label>
                <input type="number" className="input" placeholder="150" />
              </div>
              <div>
                <label className="text-sm font-medium">Tax</label>
                <input type="text" className="input" placeholder="%" />
              </div>
              <div>
                <label className="text-sm font-medium">Service Fees</label>
                <input type="number" className="input" placeholder="150" />
              </div>
              <div>
                <label className="text-sm font-medium">Currency</label>
                <select className="input">
                  <option>EGP</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Discount</label>
                <select className="input">
                  <option>10%</option>
                </select>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="border rounded-lg p-6 bg-white shadow-sm space-y-4">
            <h2 className="text-lg font-semibold">Payment methods</h2>
            <p className="text-sm text-gray-600">
              Phone orders, or check to receive payments outside of your store's
              online checkout.
            </p>

            {/* Pay by Cash */}
            <div className="flex items-center justify-between border p-4 rounded-lg">
              <div>
                <h3 className="font-medium">Pay by cash</h3>
                <p className="text-sm text-gray-500">
                  You are ready to accept offline payments
                </p>
              </div>
              <input
                type="checkbox"
                checked
                className="toggle toggle-success"
              />
            </div>

            {/* Vodafone Cash */}
            <div className="border p-4 rounded-lg space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Vodafone cash</h3>
                <input
                  type="checkbox"
                  checked
                  className="toggle toggle-success"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
                  <span>+20 1148267495</span>
                  <div className="flex gap-2">
                    <button className="text-sm text-blue-600 hover:underline">
                      Edit Details
                    </button>
                    <button className="text-sm text-red-600 hover:underline">
                      Delete
                    </button>
                  </div>
                </div>
                <button className="text-blue-600 text-sm hover:underline">
                  + Add Wallet Number
                </button>
              </div>
            </div>

            {/* Bank Account */}
            <div className="border p-4 rounded-lg space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Bank Account</h3>
                <input
                  type="checkbox"
                  checked
                  className="toggle toggle-success"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
                  <span>10002849498524</span>
                  <div className="flex gap-2">
                    <button className="text-sm text-blue-600 hover:underline">
                      Edit Details
                    </button>
                    <button className="text-sm text-red-600 hover:underline">
                      Delete
                    </button>
                  </div>
                </div>
                <button className="text-blue-600 text-sm hover:underline">
                  + Add Bank Account
                </button>
              </div>
            </div>

            {/* Fawry */}
            <div className="flex items-center justify-between border p-4 rounded-lg">
              <div>
                <h3 className="font-medium">Fawry</h3>
                <p className="text-sm text-gray-500">
                  Select if you have wallet on Fawry
                </p>
              </div>
              <input type="checkbox" className="toggle toggle-success" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePaymentSetup;
