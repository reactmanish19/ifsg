import React, { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useHistory} from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./StepOne.scss";

const StepOne = () => {
    const history = useHistory()
    const [checked, setChecked] = useState([]);

    const checkboxArray = [
        "EMPLOYMENT INCOME",
        "SAVINGS / DEPOSITS",
        "SAVINGS / DEPOSITS",
        "SALE OF SHARES OR OTHER INVESTMENT",
        "LOAN",
        "COMPANY SALE",
        "COMPANY PROFITS / DIVIDENDS",
        "INHERITANCE",
    ];
    const handleCheck = (e) => {
        var updatedList = [...checked];
        if (e.target.checked) {
            updatedList = [...checked, e.target.value];
        } else {
            updatedList.splice(checked.indexOf(e.target.value), 1);
        }
        setChecked(updatedList);
    }
    const HandeleNext=()=>{
        history.push('/stepsecond')
    }
    // console.log(checked, "CHECKBOX ARRAY")
    return (
        <>
            <div className="step-header">
                <div className="step-header__left-section">
                    <IconButton aria-label="Back Arrow" color="success">
                        <ArrowBackIosIcon />
                    </IconButton>
                </div>
                <div className="step-header__middle-section">
                    <div className="step-heading">Digital Assets Onboarding</div>
                    <div className="step-indicator">Step 5/8</div>
                </div>
                <div className="step-header__right-section">
                    <IconButton aria-label="Back Arrow" color="success">
                        <ArrowForwardIosIcon />
                    </IconButton>
                </div>
            </div>

            <div className="step-question-container">
                <div className="step-question">
                    How were the assets generated that are being initially transferred?
                </div>
                <div className="step-question-instruction">(Select all that apply)</div>

                <div className="step-question-option-container">
                    <ul className="step-question-option-list">
                        {checkboxArray.map((check, ind) => {
                            return (
                                <li className="step-question-option-list__option">
                                    <input
                                        type="checkbox"
                                        id={ind}
                                        value={check}
                                        onChange={handleCheck}
                                    />
                                    <label for="checkboxOne">{check}</label>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div className="step-footer">
                <Button className="footer-navigation-button" disabled={checked.length==0?true:false} onClick={HandeleNext} size="large">NEXT</Button>
            </div>
        </>
    );
};
export default StepOne;
