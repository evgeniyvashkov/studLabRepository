import React from 'react';
import { Input } from '../Input';

import './form-group.css';

export const FormGroup = ({
    fieldData: { label, type, placeholder, error, value },
    onchangeInput
}) => (
        <div className='form__group'>
            <label className='form__group-label'>{label}</label>
            <Input
                name={label}
                type={type}
                onchangeInput={onchangeInput}
                placeholder={placeholder}
                value={value}
            />
            {error &&
                <div className='form__group-error'>{error}</div>
            }
        </div>
    )

