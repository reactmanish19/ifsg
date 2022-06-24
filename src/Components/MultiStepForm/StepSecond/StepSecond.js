import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Checkbox,
  Button,
  IconButton,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useHistory } from "react-router-dom";

import "./StepSecond.scss";

const StepSecond = () => {

  const history = useHistory();

  const [createFields, setCreateFields] = useState([0]);

  const [values, setValues] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("SUBMIT");
  };
  const goPrevious = () => {
    history.push("/");
  };
  const AddFields = (e, val, ind) => {
    e.preventDefault();
    var updatedList = [...createFields];
    if (ind === 0) {
      const newvalue = updatedList[updatedList.length - 1];

      updatedList.push(newvalue + 1);
      setCreateFields(updatedList);
    } else {
      const remove = updatedList.filter((v, i) => v !== val);
      const AN = "Asset_name" + val;
      const CN = "Custodion_Name" + val;
      const WN = "Wallet_Address" + val;
      setCreateFields(remove);
      const CloneValues = { ...values };
      delete CloneValues[`${AN}`];
      delete CloneValues[`${CN}`];
      delete CloneValues[`${WN}`];
      console.log(CloneValues, "CLONE");
      setValues(CloneValues);
   
    }
  };
  return (
    <>
      <div className="step-header">
        <div className="step-header__left-section">
          <IconButton
            aria-label="Back Arrow"
            color="success"
            onClick={goPrevious}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </div>
        <div className="step-header__middle-section">
          <div className="step-heading">Digital Assets Onboarding</div>
          <div className="step-indicator">Step 6/8</div>
        </div>
        <div className="step-header__right-section">
          <IconButton aria-label="Back Arrow" color="success" disabled>
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="step-question-container">
          <div className="step-question-option-container">
            {createFields.map((val, index) => {
              return (
                  <div className="step-question-form-container" key={index}>
                    <FormControl>
                      <InputLabel id="Asset_name" color="secondary">Specify your digital asset name</InputLabel>
                      <Select
                        variant="outlined"
                        labelId="Asset_name"
                        label="Specify your digital asset name"
                        placeholder="Select"
                        name={`Asset_name${val}`}
                        onChange={(e) =>
                          setValues({
                            ...values,
                            [e.target.name]: e.target.value,
                          })
                        }
                        value={values[`Asset_name${val}`]}
                        className="digital-asset-name"
                        color="secondary"
                      >
                        <MenuItem value={"BitCoin"}>BitCoin</MenuItem>
                        <MenuItem value={"Etherium"}>Etherium</MenuItem>
                        <MenuItem value={"Doge"}>Doge</MenuItem>
                      </Select>
                    </FormControl>

                    <TextField
                      label="Specify the custodian name"
                      placeholder="Custodian name"
                      name={`Custodion_Name${val}`}
                      value={values[`Custodion_Name${val}`]}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          [e.target.name]: e.target.value,
                        })
                      }
                      color="secondary"
                      className="custodian-name"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            {/* `Asset_name${val}` */}
                            {values[`Asset_name${val}`]}
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      label="Wallet address"
                      name={`Wallet_Address${val}`}
                      value={values[`Wallet_Address${val}`]}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          [e.target.name]: e.target.value,
                        })
                      }
                      color="secondary"
                      className="wallet-address"
                    />

                    <IconButton
                      aria-label="Minus"
                      color="success"
                      onClick={(e) => AddFields(e, val, index)}
                      className="add-remove-button"
                    >
                      {val === 0 ? <AddIcon /> : <RemoveIcon />}
                    </IconButton>
                  </div>
              );
            })}
            <div className="i-do-not-hold-any-digital-currency">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="checkbox"
                      onChange={(e) =>
                        setValues({
                          ...values,
                          [e.target.name]: e.target.checked,
                        })
                      }
                      checked={values.checkbox ? true : false}
                    />
                  }
                  label="I don't hold any digital currency"
                />
              </FormGroup>
            </div>
          </div>
        </div>

        <div className="step-footer">
          <Button
            className="footer-navigation-button"
            size="large"
            type="submit"
          >
            NEXT
          </Button>
        </div>
      </form>
    </>
  );
};
export default StepSecond;
