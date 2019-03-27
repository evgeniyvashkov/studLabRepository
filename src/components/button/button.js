import React from 'react';

const Button = (props) => {
    return (
        <button id='app-content' className={props.classList}> {props.name} </button>
    )
}

export default Button;