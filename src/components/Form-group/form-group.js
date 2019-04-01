import React from 'react';
import { Input } from '../Input';

import './form-group.css';

export const FormGroup = (props) => {
    const { label, type, placeholder } = props.loginData;
    const onchangeInput = props.onchangeInput;
    console.log()
    return (
        <div className='form__group'>
            <label className='form__group-label'>{label}</label>
            <Input
                name={label}
                type={type}
                onchangeInput={onchangeInput}
                placeholder={placeholder}
            />
        </div>
    )
}