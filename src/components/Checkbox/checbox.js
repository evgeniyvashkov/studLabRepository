import React from 'react';

export const Checkbox = (props) => (
    <input
        type='checkbox'
        name={props.name || 'checkbox'}
        value={props.value || ''}
    />
)