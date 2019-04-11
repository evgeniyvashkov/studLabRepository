import React from 'react';

import './checkbox.scss';

export const Checkbox = ({ id, children, ...attrs }) => {

    return (
        <div className="checkbox">
            <input
                id={id}
                {...attrs}
            />

            <label className="checkbox__label" 
                htmlFor={id}>
                {children}
            </label>
        </div>
    )
}

Checkbox.defaultProps = {
    type: 'checkbox',
    children: 'label for checkbox'
}