import React from 'react';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';

import { Stepper, StepLabel, Step } from '@material-ui/core';

function Names({ formData, setForm, navigation }) {
    const { firstName, lastName, nickName} = formData;

    function validate() {
        if(firstName !== "" && lastName !== "" && nickName !== ""){
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
            <Stepper style={{display: "flex", justifyContent: "center" }} activeStep="1" orientation="horizontal">
            <Step >
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
            
        <Container maxWidth="xs" >
                    <TextField
                        label="Name" 
                        name="firstName"
                        value={firstName}
                        onChange={setForm}
                        margin="normal"
                        color="secondary"
                        variant="outlined"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        label="Last Name" 
                        name="lastName"
                        value={lastName}
                        onChange={setForm}
                        margin="normal"
                        color="secondary"
                        variant="outlined"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        label="Nickname" 
                        name="nickName"
                        value={nickName}
                        onChange={setForm}
                        margin="normal"
                        color="secondary"
                        variant="outlined"
                        autoComplete="off"
                        type="text"
                        fullWidth
                    />
                    <Button 
                        variant="contained" 
                        fullWidth 
                        color="primary"
                        style={{marginTop: "10px"}}
                        onClick={() => validate()} 
                    >
                        Next
                    </Button>
            </Container>
        </>
    )
}

export default Names;