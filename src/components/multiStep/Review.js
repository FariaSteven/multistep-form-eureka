import React from 'react';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Stepper, StepLabel, Step } from '@material-ui/core';

import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit'

function Review({ formData, navigation }) {
    const { go } = navigation;
    const {
        firstName,
        lastName,
        nickName,
        address,
        city,
        state,
        zip,
        phone,
        email
     } = formData;

     function submitData(e) {
         e.preventDefault();
        fetch('http://localhost:3000/userData' , {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
          navigation.next()
     }

    return (
        <>
            <Stepper style={{display: "flex", justifyContent: "center" }} activeStep="4" orientation="horizontal">
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
            <Container maxWidth="sm">
                <RenderAccordion summary="Names" go={go} details={[
                    { "Name": firstName },
                    { "Last Name": lastName },
                    { "Nickname": nickName },
                ]}/>
                <RenderAccordion summary="Address" go={go} details={[
                    { "Address": address },
                    { "City": city },
                    { "State": state },
                    { "Zip": zip}
                ]}/>
                <RenderAccordion summary="Contact" go={go} details={[
                    { "Phone": phone },
                    { "E-mail": email },
                ]}/>
                <Button
                    color="primary"
                    variant="contained"
                    style={{ marginTop: "10px" }}
                    onClick={submitData}
                >
                    Submit
                </Button>
            </Container>
        </>
    )
}

export const RenderAccordion = ({ summary, details, go }) => (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMore/>}
        >{summary}</AccordionSummary>
        <AccordionDetail>
            <div>
                { details.map((data, index) => {
                    const objectKey = (Object.keys(data)[0]);
                    const objectValue = data[Object.keys(data)[0]]

                    return <ListItemText>{`${objectKey}: ${objectValue}`}</ListItemText>

                }) }
                <IconButton
                    color="secondary"
                    component="span"
                    onClick={() => go(`${summary.toLowerCase()}`)}
                >
                    <EditIcon color="secondary"/>
                </IconButton>
            </div>
            
        </AccordionDetail>
    </Accordion>
)

export default Review;