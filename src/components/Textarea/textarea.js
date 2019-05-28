import React from 'react';
import classNames from 'classnames';

import './textarea.scss'

export const Textarea = ({
    className, label, name, error, ...attrs
}) => {
    
    const classes = classNames(
        'textarea',
        className,
        { error }
    )

    return (
        <div className="textarea-container">
            {label &&
                <label className="textarea-label">
                    {label}
                </label>
            }

            <textarea
                name={name}
                className={classes}
                {...attrs}
            ></textarea>

            {error &&
                <span textarea-error>{error}</span>
            }
        </div>
    )
}

Textarea.defaultProps = {
    className: '',
    label: 'Textarea label',
    error: false,
}