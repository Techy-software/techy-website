import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import "./HorizontalSteps.css";
const HorizontalSteps = (props) => {
  return (
    <div className="horizontal-steps">
      <h3>Publish your course</h3>
      <ul>
        {props.steps.map((step, index) => (
          <div
            className={`flex h-12 items-center text-slate-400${
              props.currentStep === index
                ? "active-container-horizontal-steps"
                : ""
            }`}
          >
            <div
              className={
                props.currentStep === index
                  ? "active-item-horizontal-steps px-0.5 h-12"
                  : ""
              }
            ></div>
            <FontAwesomeIcon icon={faCircle} />
            <li
              key={index}
              //   className={props.currentStep === index ? "active" : ""}
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
