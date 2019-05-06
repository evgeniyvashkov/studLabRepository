import React, { Fragment } from 'react';

import { Checkbox } from '../Checkbox';

export const CheckboxField = ({ chechboxes, label }) => {
    const renderCheckboxes = chechboxes.map(({ id, theme }) => {
        return (
            <Checkbox id={id} key={id} value={theme}>
                {theme}
            </Checkbox>
        )
    })

    return (
        <div className="checkbox-field">
            <h4 className="checkbox-field__title">{label}</h4>
            <div className="checkbox-field__content">
                {renderCheckboxes}
            </div>
        </div>
    )
}