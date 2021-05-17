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

return(
    <>
    <Form id='pizza-form'>
        <label>
            name
            <input type='text' name='name' id="enter-name" value={formValues.name} onChange={onChange}></input>
        </label>
        <select name='size' id='size-selection' value={formValues.size} onChange={onChange}>
            <option value=''>Select yo pie</option>
            <option value='small'>I don't believe in myself</option>
            <option value='medium'>I'm comfortable with mediocrity</option>
            <option value='large'>I'm either from Texas or trying to prove my masculinity</option>
        </select>
        <div>
            <label>
                pepperoni
                <input type='checkbox' name='pepperoni' checked={formValues.pepperoni} onChange={onChange}></input>
            </label>
            <label>
                sausage
                <input type='checkbox' name='sausage' checked={formValues.sausage} onChange={onChange}></input>
            </label>
            <label>
                sauerkraut
                <input type='checkbox' name='saurekraut' checked={formValues.sauerkraut} onChange={onChange}></input>
            </label>
            <label>
                pineapple
                <input type='checkbox' name='pineapple' checked={formValues.pineapple} onChange={onChange}></input>
            </label>
        </div>
    </Form>
    </>

)