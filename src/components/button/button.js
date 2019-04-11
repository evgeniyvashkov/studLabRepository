import React from 'react';
import classNames from 'classnames';

import './button.scss'

export const Button = ({
    value, onClick, className, disabled, ...attrs
}) => {

    const classes = classNames(
        className,
        //if button disabled,  add class .disabled
        { disabled }
    )
    //cancel action if button disabled
    const onClickAction = (e) => (disabled) ? e.preventDefault() : onClick(e);

    //A button can be tag <a /> or tag <button />
    const Tag = (attrs.href) ? 'a' : 'button';

    return (
        <Tag
            {...attrs}
            className={classes}
            onClick={onClickAction}
        >
            {value}
        </Tag>
    )
}

Button.defaultProps = {
    className: 'button',
    value: 'default button',
    disabled: false,
    onClick: () => { }
}