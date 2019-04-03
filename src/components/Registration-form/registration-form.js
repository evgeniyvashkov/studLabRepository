import React from 'react';
import { Link } from 'react-router-dom';

import { FormGroup } from '../Form-group';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

export const RegistrationForm = () => (
    <form action='#' method='POST' className='form registration-form'>
        <FormGroup
            fieldData={
                {
                    label: "email",
                    type: "email",
                    placeholder: "enter your email",
                    value: "",
                }
            }
        />

        <FormGroup
            fieldData={
                {
                    label: "customer's username",
                    type: "text",
                    placeholder: "enter your username",
                    value: ""
                }
            }
        />

        <FormGroup
            fieldData={
                {
                    label: "Card number",
                    type: "text",
                    placeholder: "enter your username",
                    value: ""
                }
            }
        />

        <FormGroup
            fieldData={
                {
                    label: "password",
                    type: "password",
                    placeholder: "enter password",
                    value: ""
                }
            }
        />

        <FormGroup
            fieldData={
                {
                    label: "Re-enter password",
                    type: "password",
                    placeholder: "Re-enter password",
                    value: ""
                }
            }
        />

        <Button classList='form__button button-green' value='Log-in' />
        <Checkbox />

        <Link to='/license'>{'Some text for link'}</Link>
    </form>
)