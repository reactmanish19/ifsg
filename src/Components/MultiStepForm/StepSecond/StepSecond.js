import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Checkbox,
  Button,
  IconButton,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
const StepSecond = () => {
  const [values, setValues] = useState({});
  const [createFields, setCreateFields] = useState([0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("SUBMIT");
  };
  const AddFields = (e, ind) => {
    e.preventDefault()
    var updatedList = [...createFields];
    if(ind===0){
        updatedList.push(updatedList.length)
        setCreateFields(updatedList)
    }
    else{
        const remove= updatedList.filter((v,i)=> i!==ind )
        setCreateFields(remove)
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {createFields.map((val, index) => {
          return (
            <>
              <FormControl fullWidth>
                <InputLabel id="Asset_name">Asset name</InputLabel>
                <Select
                  variant="outlined"
                  labelId="Asset_name"
                  label="Asset name"
                  name={`Asset_name${val}`}
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                  value={values[`Asset_name${val}`]}
                >
                  <MenuItem value={"BitCoin"}>BitCoin</MenuItem>
                  <MenuItem value={"Etherium"}>Etherium</MenuItem>
                  <MenuItem value={"Doge"}>Doge</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Custodion Name"
                name={`Custodion_Name${val}`}
                value={values[`Custodion_Name${val}`]}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
                color="secondary"
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
                label="Wallet Address"
                name={`Wallet_Address${val}`}
                value={values[`Wallet_Address${val}`]}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
                color="secondary"
              />
              <IconButton
                aria-label="Minus"
                color="success"
                onClick={(e)=>AddFields(e,index)}
              >
                {
                    val===0? <ArrowForwardIos /> : <ArrowBackIosIcon />
                }
              </IconButton>
            </>
          );
        })}

        <Checkbox
          name="checkbox"
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.checked })
          }
          checked={values.checkbox ? true : false}
        />

        <Button variant="contained" type="submit">
          Next
        </Button>
      </form>
    </>
  );
};
export default StepSecond;
