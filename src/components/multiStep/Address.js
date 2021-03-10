import React from 'react';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';

import { Stepper, StepLabel, Step } from '@material-ui/core';

function Address({ formData, setForm, navigation }) {
    const { address, city, state, zip} = formData;

    function validate() {
        if(address !== "" && city !== "" && state !== "" && zip !== ""){
            navigation.next()
        }else{
            Swal.fire({
                title: 'Todos os campos devem ser preenchidos',
                icon: 'error',
                confirmButtonText: 'Ok!',
              })
        }
    }

    return (
        <>
            <Stepper style={{display: "flex", justifyContent: "center" }} activeStep="2" orientation="horizontal">
                <Step>
                    <StepLabel >Name</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Address</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Contact</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Confirm</StepLabel>
                </Step>
            </Stepper>
            <Container maxWidth="xs">
                <TextField
                    label="Address" 
                    name="address"
                    value={address}
                    onChange={setForm}
                    margin="normal"
                    color="secondary"
                    variant="outlined"
                    type="text"
                    fullWidth
                />
                <TextField
                    label="City" 
                    name="city"
                    value={city}
                    onChange={setForm}
                    margin="normal"
                    color="secondary"
                    variant="outlined"
                    type="text"
                    fullWidth
                />
                <TextField
                    label="State" 
                    name="state"
                    value={state}
                    onChange={setForm}
                    margin="normal"
                    color="secondary"
                    variant="outlined"
                    type="text"
                    fullWidth
                />
                <TextField
                    label="Zip code" 
                    name="zip"
                    value={zip}
                    onChange={setForm}
                    margin="normal"
                    color="secondary"
                    type="number"
                    variant="outlined"
                    fullWidth
                />

                <Button color="secondary" variant="contained" style={{marginTop: "10px"}} onClick={() => navigation.previous()}>
                    Back
                </Button>
                <Button color="primary" variant="contained" style={{marginTop: "10px", marginLeft: "5px"}} onClick={() => validate()}>
                    next
                </Button>
            </Container>
        </>
    )
}

export default Address;