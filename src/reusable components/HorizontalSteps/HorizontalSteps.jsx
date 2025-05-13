import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as empty } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck as full } from "@fortawesome/free-solid-svg-icons";
import "./HorizontalSteps.css";

// inputs: steps, currentStep
// steps: array of strings
// currentStep: Current step number

// output: horizontal steps with active step

const HorizontalSteps = (props) => {
  console.log("Props: ", props);
  return (
    <div className="default-background-horizontal-steps">
      <h3 className="title-horizontal-steps">{props.title}</h3>
      <ul>
        {props.steps.map((step, index) => (
          <div
            key={step}
            className={`flex h-12 items-center text-slate-400 w-full cursor-pointer ${
              props.currentStep === index ? "bg-white" : ""
            }`}
            onClick={() => {
              props.setCurrentStep(index);
              console.log("Current step: ", index);
            }}
          >
            <div
              className={`me-3 px-0.5 h-12 
                ${
                  props.currentStep === index
                    ? "active-item-horizontal-steps "
                    : "default-background-horizontal-steps"
                }`}
            ></div>
            {props.currentStep > index ? (
              <FontAwesomeIcon icon={full} className="me-3 text-green-400" />
            ) : (
              <FontAwesomeIcon icon={empty} className="me-3" />
            )}
            <li
              key={index}
              className={props.currentStep === index ? "text-black" : ""}
            >
              {step}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default HorizontalSteps;
