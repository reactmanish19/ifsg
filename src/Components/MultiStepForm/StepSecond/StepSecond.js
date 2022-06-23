import { FormControl, InputLabel, MenuItem, Select, TextField,Checkbox,Button } from '@mui/material'
import React, { useState } from 'react'
const StepSecond = () => {
    const [values, setValues] = useState('')
    // const handleChange=(e)=>{
    //     e.preventDefault()
    //     alert('hhhh')
    //     setValues('kkk')

    // }
    console.log(values)
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert('SUBMIT')
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth >
                {/* <label>Specify your digital asset name</label> */}
                <InputLabel id='Asset_name'>Asset name</InputLabel>
                <Select
                    // focused
                    variant="outlined" 
                    labelId="Asset_name"
                    // value={}
                    label="Asset name"
                    name='Asset_name'
                    onChange={(e) => setValues({ [e.target.name]: e.target.value })}
                    value={values.Asset_name}
                >
                    <MenuItem value={'BitCoin'}>BitCoin</MenuItem>
                    <MenuItem value={'Etherium'}>Etherium</MenuItem>
                    <MenuItem value={'Doge'}>Doge</MenuItem>
                </Select>
                {/* <InputLabel>Specify the costudion name</InputLabel> */}
                <TextField label="Custodion Name" name='Custodion_Name' value={values.Asset_name} onChange={(e) => setValues({ [e.target.name]: e.target.value })} color="secondary"  />

                {/* <InputLabel>Specify the wallet address</InputLabel> */}

                <TextField label="Wallet Address" name='Wallet_Address' value={values.Wallet_Address} onChange={(e) => setValues({ [e.target.name]: e.target.value })} color="secondary"  />
                <Select
                    // focused
                    variant="outlined"
                    // value={}
                    labelId="Select"
                    label="Select"
                    name='Select'
                    onChange={(e) => setValues({ [e.target.name]: e.target.value })}
                    value={values.Select}
                >
                    <MenuItem value={'SelectOne'}>SelectOne</MenuItem>
                    <MenuItem value={'SelectTwo'}>SelectTwo</MenuItem>
                    <MenuItem value={'SelectThree'}>SelectThree</MenuItem>
                {/* <InputLabel id='Select'>Select</InputLabel> */}
                </Select>
                <TextField label="Custodion Name" name='Custodion_Name_Two' value={values.Custodion_Name_Two} oonChange={(e) => setValues({ [e.target.name]: e.target.value })} color="secondary" />
                <TextField label="Wallet Address" name='Wallet_Address_Two' value={values.Wallet_Address_Two} onChange={(e) => setValues({ [e.target.name]: e.target.value })} color="secondary" />
                
               <Checkbox name='checkbox' onChange={(e) => setValues({ [e.target.name]: e.target.checked })} checked={values.checkbox?true:false} /> 
               
               <Button variant="contained" type='submit'>Next</Button>
            </FormControl>

            </form>











            {/* <label>Specify your digital asset name</label>
            <br /> */}
            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" color="warning" /> */}

        </>
    )
}
export default StepSecond