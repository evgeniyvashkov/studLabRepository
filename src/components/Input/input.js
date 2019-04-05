import React from 'react';
import classNames from 'classnames';

import './input.scss';

export const Input = ({
    id, className, label, error, ...attrs
}) => {

    const classes = classNames(
        'form__group-input',
        { error },
    )

    return (
        <div className='form__group'>
            {label &&
                <label htmlFor={id} className="form__group-label">{label}</label>
            }

            <input className={classes} {...attrs}/>

            {error &&
                <span className='form__group-error'>{error}</span>
            }
        </div>
    )
}

