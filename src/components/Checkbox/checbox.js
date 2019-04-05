import React from 'react';

import './checkbox.scss';

export const Checkbox = ({ id, children, ...attrs }) => {

    return (
        <div className='checkbox'>
            <input
                id={id}
                type='checkbox'
                className='checkbox'
                {...attrs}
            />

            <label htmlFor={id}>
                {children}
            </label>
        </div>
    )
}