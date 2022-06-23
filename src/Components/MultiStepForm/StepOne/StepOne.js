import React from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./StepOne.scss"



const StepOne = () => {
    return (
        <>
            <div className='step-header'>
                <div className='step-header__left-section'>
                    <IconButton aria-label="Back Arrow" color="success">
                        <ArrowBackIosIcon />
                    </IconButton>
                </div>
                <div className='step-header__middle-section'>
                    <div className='step-heading'>Digital Assets Onboarding</div>
                    <div className='step-indicator'>Step 5/8</div>
                </div>
                <div className='step-header__right-section'>
                    <IconButton aria-label="Back Arrow" color="success">
                        <ArrowForwardIosIcon />
                    </IconButton>
                </div>
            </div>

            <div className='step-question-container'>
                <div className='step-question'>How were the assets generated that are being initially transferred?</div>
                <div className='step-question-instruction'>(Select all that apply)</div>

                <div className='step-question-option-container'>
                    <ul className="step-question-option-list">
                        <li className="step-question-option-list__option">
                            <input type="checkbox" id="checkboxOne" value="Order one" checked />
                            <label for="checkboxOne">EMPLOYMENT INCOME</label>
                        </li>
                        <li className="step-question-option-list__option">
                            <input type="checkbox" id="checkboxTwo" value="Order Two" />
                            <label for="checkboxTwo">SAVINGS / DEPOSITS</label>
                        </li>
                        <li className="step-question-option-list__option">
                            <input type="checkbox" id="checkboxThree" value="Order Two" />
                            <label for="checkboxThree">SAVINGS / DEPOSITS</label>
                        </li>
                        <li className="step-question-option-list__option">
                            <input type="checkbox" id="checkboxForth" value="Order Two" />
                            <label for="checkboxForth">SALE OF SHARES OR OTHER INVESTMENT</label>
                        </li>
                        <li className="step-question-option-list__option">
                            <input type="checkbox" id="checkboxFifth" value="Order Two" />
                            <label for="checkboxFifth">LOAN</label>
                        </li>
                        <li className="step-question-option-list__option">
                            <input type="checkbox" id="checkboxSixth" value="Order Two" />
                            <label for="checkboxSixth">COMPANY SALE</label>
                        </li>
                        <li className="step-question-option-list__option">
                            <input type="checkbox" id="checkboxSeventh" value="Order Two" />
                            <label for="checkboxSeventh">COMPANY PROFITS / DIVIDENDS</label>
                        </li>
                        <li className="step-question-option-list__option">
                            <input type="checkbox" id="checkboxEighth" value="Order Two" />
                            <label for="checkboxEighth">INHERITANCE</label>
                        </li>
                    </ul>



                </div>
            </div>

            <div className='step-footer'>
                <Button variant="contained">NEXT</Button>
            </div>
        </>
    )
}
export default StepOne