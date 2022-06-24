import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Checkbox,
  Button,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useState } from "react";
const StepSecond = () => {
  const [values, setValues] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("SUBMIT");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <InputLabel id="Asset_name">Asset name</InputLabel>
          <Select
            variant="outlined"
            labelId="Asset_name"
            label="Asset name"
            name="Asset_name"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
            value={values.Asset_name}
          >
            <MenuItem value={"BitCoin"}>BitCoin</MenuItem>
            <MenuItem value={"Etherium"}>Etherium</MenuItem>
            <MenuItem value={"Doge"}>Doge</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Custodion Name"
          name="Custodion_Name"
          value={values.Custodion_Name}
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
          color="secondary"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                {values.Asset_name}
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Wallet Address"
          name="Wallet_Address"
          value={values.Wallet_Address}
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
          color="secondary"
        />
        <FormControl fullWidth>
          <InputLabel id="Select">Select</InputLabel>
          <Select
            variant="outlined"
            labelId="Select"
            label="Select"
            name="Select"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
            value={values.Select}
          >
            <MenuItem value={"SelectOne"}>SelectOne</MenuItem>
            <MenuItem value={"SelectTwo"}>SelectTwo</MenuItem>
            <MenuItem value={"SelectThree"}>SelectThree</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Custodion Name"
          name="Custodion_Name_Two"
          value={values.Custodion_Name_Two}
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
          color="secondary"
        />
        <TextField
          label="Wallet Address"
          name="Wallet_Address_Two"
          value={values.Wallet_Address_Two}
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
          color="secondary"
        />

        <Checkbox
          name="checkbox"
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.checked })
          }
          checked={values.checkbox ? true : false}
        />

        <Button variant="contained" type="submit" >
          Next
        </Button>
      </form>
    </>
  );
};
export default StepSecond;
