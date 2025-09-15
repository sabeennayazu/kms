// app/create-course/page.tsx
"use client";

import React, { useState } from "react";
import { Circle, CircleCheckBig } from "lucide-react";
import Navbar from "@/app/components/navbar";

const steps = [
  "Course Details",
  "Upload Videos",
  "About Course",
  "Create Quiz",
  "Publish Course",
];

const CreateCoursePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="bg-[#F0F2F9] py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Create New Course
              </h1>
             
            </div>
            <div className="flex items-center space-x-3 mt-4 sm:mt-0">
              <button className="bg-blue-200/60 text-blue-700 font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-blue-200 transition-colors">
                Save as Draft
              </button>
              <button className="bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Publish Course
              </button>
            </div>
          </div>
        </header>

        {/* Stepper */}
        <div className="bg-white p-6 rounded-xl shadow-sm mt-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;

          return (
            <React.Fragment key={step}>
              <div className="flex items-center">
                {/* Step Icon */}
                {isCompleted ? (
                  <CircleCheckBig className="w-6 h-6 text-blue-600" />
                ) : isActive ? (
                  <Circle className="w-6 h-6 text-blue-600" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-300" />
                )}

                {/* Label */}
                <p
                  className={`ml-2 text-sm ${
                    isCompleted || isActive
                      ? "font-semibold text-blue-600"
                      : "text-gray-500"
                  }`}
                >
                  {step}
                </p>
              </div>

              {/* Connector Line */}
              {stepNumber < steps.length && (
                <div
                  className={`flex-1 h-0.5 mx-4 ${
                    isCompleted ? "bg-blue-600" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>

        {/* Step Content */}
        <div className="bg-white p-6 rounded-xl shadow-sm mt-6">
          <div className="min-h-[300px]">
            {currentStep === 1 && <StepContent title="Course Details" />}
            {currentStep === 2 && <StepContent title="Upload Videos" />}
            {currentStep === 3 && <StepContent title="About Course" />}
            {currentStep === 4 && <StepContent title="Create Quiz" />}
            {currentStep === 5 && <StepContent title="Publish Course" />}
          </div>

          {/* Navigation */}
          <div className="flex justify-end mt-8 border-t pt-6">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="bg-gray-200 text-gray-800 font-semibold px-6 py-2 rounded-lg text-sm hover:bg-gray-300 transition-colors mr-3"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={currentStep === steps.length}
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentStep === steps.length ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const StepContent: React.FC<{ title: string }> = ({ title }) => (
  <div>
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <p className="text-gray-600">
      This is a placeholder for the "{title}" form. You can replace this with
      your actual form fields and logic.
    </p>
    <div className="mt-6">
      <label
        htmlFor="example"
        className="block text-sm font-medium text-gray-700"
      >
        Example Input for {title}
      </label>
      <input
        type="text"
        id="example"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        placeholder={`Enter ${title.toLowerCase()}`}
      />
    </div>
  </div>
);

export default CreateCoursePage;
