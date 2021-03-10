import React from 'react';
import { useForm, useStep } from 'react-hooks-helper'

import Names from './multiStep/Names'
import Address from './multiStep/Address'
import Contact from './multiStep/Contact'
import Review from './multiStep/Review'
import Submit from './multiStep/Submit'

const defaultData = {
    firstName: "",
    lastName: "",
    nickName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: ""
}

const steps = [
    { id: 'names' },
    { id: 'address' },
    { id: 'contact' },
    { id: 'review' },
    { id: 'submit' },
]

function MultiStepForm() {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    const props = { formData, setForm, navigation };

    switch(step.id) {
        case 'names':
            return <Names {...props}/>
        case 'address':
            return <Address {...props}/>
        case 'contact':
            return <Contact {...props}/>
        case 'review':
            return <Review {...props}/>
        case 'submit':
            return <Submit {...props}/>

        default:
    }

    return(
        
        <div>Home</div>
    )
}

export default MultiStepForm;