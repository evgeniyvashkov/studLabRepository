import React from 'react';

import './button.css'

export const Button = ({ value, ...attrs }) => {
    return (
        <button {...attrs}>
            {value}
        </button>
    )
}