import React from 'react';

const Button = (props) => {
    return (
        <button
        className={props.classList}
        onClick = {props.onClick}
        > {props.value} </button>
    )
}

export default Button;