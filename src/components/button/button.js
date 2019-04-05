import React from 'react';

import './button.css'

export const Button = ({ classList, value, onClick }) =>
    <button className={classList} onClick={onClick}>
        {value}
    </button>