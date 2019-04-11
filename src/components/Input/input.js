import React from 'react';
import classNames from 'classnames';

import './input.scss';

export const Input = ({
    id, className, label, error, ...attrs
}) => {

    const classes = classNames(
        'form__group-input',
        //If we received error in props, add class .error 
        { error }
    )

    return (
        <div className="form__group">
            {label &&
                <label htmlFor={id} className="form__group-label">{label}</label>
            }

            <input name={id} id={id} className={classes} {...attrs} />

            {error &&
                <span className="form__group-error">{error}</span>
            }
        </div>
    )
}

Input.defaultProps = {
    className: '',
    label: 'default label',
    error: false
}

