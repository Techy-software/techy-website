import React from 'react';
import { ArrowLeft, MoreVertical } from 'lucide-react';

const CourseHeader = ({
  title = 'Course details',
  status = 'Draft',
  currentStep = 'Setup',
  onBack,
  onNext,
  nextLabel = 'Next Assign Mentors',
}) => {
  const steps = ['Content', 'Setup', 'Assign'];

  return (
    <div className="flex items-center justify-between p-4 border-b bg-white">
      {/* Left section */}
      <div className="flex items-center gap-2">
        <button onClick={onBack}>
          <ArrowLeft className="text-blue-600" />
        </button>
        <h1 className="font-semibold text-lg">{title}</h1>
        {status && (
          <span className="ml-2 text-xs bg-gray-200 px-2 py-0.5 rounded">{status}</span>
        )}
      </div>

      {/* Stepper */}
      <div className="flex items-center gap-8">
        {steps.map((step) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-2 h-2 rounded-full ${
                step === currentStep ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            ></div>
            <span
              className={`text-xs ${
                step === currentStep ? 'text-blue-600 font-medium' : 'text-gray-400'
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <span className="text-green-600 font-medium">✓</span>
          Saved
        </div>
        <button className="p-2 rounded hover:bg-gray-100">
          <MoreVertical size={16} />
        </button>
        <button
          onClick={onNext}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          {nextLabel} →
        </button>
      </div>
    </div>
  );
};

export default CourseHeader;
