import React from 'react';

export default function Form(props){
    const { formValues, updateFormValues } = props;
    const onChange = (event) => {
        const { name, type, value, checked } = event.target;
        if (type == 'checkbox') {
            updateFormValues(name, checked);
        }
        else {
            updateFormValues(name, value);
        }
    }
}

