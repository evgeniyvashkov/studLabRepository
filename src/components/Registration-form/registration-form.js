import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FormGroup } from '../Form-group';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

export class RegistrationForm extends Component {
    onchangeInput = (e) => {
        console.log('typing...');
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('Form sent');
    }

    render() {
        return (
            <form action='#'
                method='POST'
                className='form registration-form'
                onSubmit={this.handleOnSubmit}
            >
                <FormGroup
                    fieldData={
                        {
                            label: "email",
                            type: "email",
                            placeholder: "enter your email",
                        }
                    }

                    onchangeInput={this.onchangeInput}
                />

                <FormGroup
                    fieldData={
                        {
                            label: "customer's username",
                            type: "text",
                            placeholder: "enter your username",
                        }
                    }
                />

                <FormGroup
                    fieldData={
                        {
                            label: "Card number",
                            type: "text",
                            placeholder: "enter your username",
                        }
                    }
                />

                <FormGroup
                    fieldData={
                        {
                            label: "password",
                            type: "password",
                            placeholder: "enter password",
                        }
                    }
                />

                <FormGroup
                    fieldData={
                        {
                            label: "Re-enter password",
                            type: "password",
                            placeholder: "Re-enter password",
                        }
                    }
                />

                <Button classList='form__button button-green' value='Log-in' />

                <Checkbox id={'registration-checkbox'}>
                    <Link to='/license'>{'Some text for link'}</Link>
                </Checkbox>
            </form>
        )
    }
}