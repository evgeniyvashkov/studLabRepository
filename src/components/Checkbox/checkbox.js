import React from 'react';
import classNames from 'classnames';

import './checkbox.scss';

export const Checkbox = ({ id, children, error, ...attrs }) => {
    const classes = classNames(
        'checkbox',
        { error }
    )
    return (
        <div className={classes}>
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