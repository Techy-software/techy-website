import React from 'react'
import './stepper-component.css';

const StepperComponent = ({ steps, currentStep }) => {
  return (
    <div className="stepper">
            {steps.map((step, index) => (
                <div key={index} className="step">
                    <div className={`circle ${index <= currentStep ? 'active' : ''}`}>
                        {index + 1}
                    </div>
                    <div className={`label ${index <= currentStep ? 'active' : ''}`}>
                        {step}
                    </div>
                    {index < steps.length - 1 && (
                        <div className={`line ${index < currentStep ? 'active' : ''}`}></div>
                    )}
                </div>
            ))}
        </div>
  )
}

export default StepperComponent
