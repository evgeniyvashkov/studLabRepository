import React from 'react';

import './button.scss'

export const Button = ({ value, ...attrs }) => {
    return (
        <button {...attrs}>
            {value}
        </button>
    )
}