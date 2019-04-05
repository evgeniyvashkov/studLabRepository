import React from 'react';

import './input.css';

export const Input = ({ name, type, placeholder = '', onchangeInput }) => (
    <input
        name={name}
        type={type}
        className='form__group-input'
        onChange={onchangeInput}
        placeholder={placeholder}
    />
)

