import React from 'react';

import './input.css';

export const Input = (props) => {
    console.log(props);

    return (
        < input
            name={props.name}
            type={props.type}
            className='form__group-input'
            onChange={props.onchangeInput}
            placeholder={props.placeholder ? props.placeholder : ''}
        />
    )
}

