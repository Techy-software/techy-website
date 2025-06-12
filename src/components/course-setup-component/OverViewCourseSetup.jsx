import React from "react";
import HorizontalSteps from "../../reusable components/HorizontalSteps/HorizontalSteps";
import CourseHeader from "../../reusable components/Header/CourseHeader";
import DragNDrop from "../../reusable components/DragNDrop";
import MapLocationPicker from "../../reusable components/MapLocationPicker";

const OverViewCourseSetup = ({ setCurrentStep, formData, setFormData }) => {
  const handleBack = () => {
    console.log("Go back");
  };

  const handleNext = () => {
    console.log("Proceed to next step");
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
        disabled
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
            currentStep={0}
            setCurrentStep={setCurrentStep}
          />
        </div>

        {/* Right Side - Form Content */}
        <div className="w-3/4 space-y-8">
          <DragNDrop formData={formData} setFormData={setFormData} />
          {/* Course Details */}
          <div className="border rounded-2xl p-8 bg-white shadow-sm space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Course Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Course ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course ID
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-gray-500 cursor-not-allowed"
                  placeholder="1234"
                  disabled
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  className="h-10 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="categoryIdentifier"
                  value={formData.categoryIdentifier}
                  onChange={handleChange}
                  required
                >
                  <option value="1">Web Development</option>
                  <option value="2">Data Science</option>
                  <option value="3">Mobile Development</option>
                </select>
              </div>

              {/* Title English */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course Title (English) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ex: Web Development Bootcamp"
                  name="title"
                  onChange={handleChange}
                  required
                  value={formData.TitleEn}
                />
              </div>

              {/* Title Arabic */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course Title (Arabic)
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Description English */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description (English)
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Add your description..."
                  name="description"
                  onChange={handleChange}
                  value={formData.description}
                />
              </div>

              {/* Description Arabic */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description (Arabic)
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Add your Arabic description..."
                />
              </div>

              {/* Deadline */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration <span className="text-red-500">*</span>
                </label>
                <input
                  className="h-10 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="duration"
                  onChange={handleChange}
                  value={formData.duration}
                />
              </div>
            </div>
          </div>
          {/* Course Location */}
          <div className="border rounded-2xl p-8 bg-white shadow-sm space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Course Location
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Course Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course Type <span className="text-red-500">*</span>
                </label>
                <select
                  className=" h-10 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="attendanceType"
                  value={formData.attendanceType}
                  onChange={handleChange}
                >
                  <option value="OFFLINE">Offline</option>
                  <option value="ONLINE">Online</option>
                  <option value="HYBRID">Hybrid</option>
                </select>
              </div>

              {/* Location (read-only) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="h-10 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600"
                  placeholder="SS School..."
                  value={formData.location}
                  name="location"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <MapLocationPicker
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverViewCourseSetup;
