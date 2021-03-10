import React from 'react';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Swal from 'sweetalert2';

import { Stepper, StepLabel, Step } from '@material-ui/core';

function Contact({ formData, setForm, navigation }) {
    const { phone, email } = formData;

    function validate() {
        if(phone !== "" && email !== ""){
            navigation.next()
        }else{
            Swal.fire({
                title: 'Todos os campos devem ser preenchidos',
                icon: 'error',
                confirmButtonText: 'Voltar',
              })
        }
    }

    return (
        <>
            <Stepper style={{display: "flex", justifyContent: "center" }} activeStep="3" orientation="horizontal">
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
                        label="Phone" 
                        name="phone"
                        value={phone}
                        onChange={setForm}
                        margin="normal"
                        variant="outlined"
                        type="number"
                        color="secondary"
                        fullWidth
                    />

                    <TextField
                        label="E-mail" 
                        name="email"
                        value={email}
                        onChange={setForm}
                        margin="normal"
                        variant="outlined"
                        type="email"
                        color="secondary"
                        fullWidth
                    />

                    <Button color="secondary" variant="contained" style={{ marginTop: "10px" }} onClick={() => navigation.previous()}>
                        Back
                    </Button>
                    <Button color="primary" variant="contained" style={{ marginTop: "10px", marginLeft: "5px" }} onClick={() => validate()}>
                        next
                    </Button>
            </Container>
        </>
    )
}

export default Contact;