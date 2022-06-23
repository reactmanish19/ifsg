import React from "react"
import "./MultiStepForm.scss"
import StepOne from "../MultiStepForm/StepOne/StepOne"

const MultiStepForm = () => {
    return (
        <div className="multi-step-form-root-container">
            <div className="multi-step-form-root-container__step-holder">
                <StepOne />
            </div>
        </div>

    )
}

export default MultiStepForm