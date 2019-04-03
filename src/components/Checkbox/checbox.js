import React from 'react';

import './checkbox.css';

export const Checkbox = (props) => {
    const { id, value, children, error, ...attrs } = props;
    return (
        <div className='checkbox'>
            <input
                id={id}
                type='checkbox'
                value={value || ''}
                className='checkbox'
            />

            <label htmlFor={id}>
                {children}
            </label>
        </div>
    )
}