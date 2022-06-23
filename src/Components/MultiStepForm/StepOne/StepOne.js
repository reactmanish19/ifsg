import React from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
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
                    <div className='step-question-option'>EMPLOYMENT INCOME</div>
                    <div className='step-question-option'>SAVINGS / DEPOSITS</div>
                    <div className='step-question-option'>SALE OF SHARES OR OTHER INVESTMENT</div>
                    <div className='step-question-option'>LOAN</div>
                    <div className='step-question-option'>COMPANY SALE</div>
                    <div className='step-question-option'>COMPANY PROFITS / DIVIDENDS</div>
                    <div className='step-question-option'>INHERITANCE</div>
                </div>
            </div>

            <div className='step-footer'>
                <Button variant="contained">NEXT</Button>
            </div>
        </>
    )
}
export default StepOne