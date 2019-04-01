import React from 'react';
import { Input } from '../Input';

import './form-group.css';

export const FormGroup = ({ loginData: { label, type, placeholder }, onchangeInput }) =>
    (
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

