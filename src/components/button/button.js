import React from 'react';

export const Button = (props) =>
    <button className={props.classList} onClick={props.onClick}>
        {props.value}
    </button>