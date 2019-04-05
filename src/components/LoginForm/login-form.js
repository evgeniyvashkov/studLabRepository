import React, { Component } from 'react';

import { FormGroup } from '../Form-group';
import { Button } from '../Button';

import './login-form.css'

export class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameIsEmpty: true
        }
    }

    onchangeInput = (e) => {
        const { value } = e.target;

        this.setState(() => ({
            usernameIsEmpty: (value.length) ? false : true,
        }))
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('Form sent');
    }

    render() {
        const { name } = this.props;

        return (
            <form className='form login-form' action='#' onSubmit={this.handleOnSubmit}>
                <FormGroup
                    fieldData={{
                        label: `${name}employee's username`,
                        type: "text",
                        placeholder: "enter your username",
                        value: ""
                    }}
                    onchangeInput={this.onchangeInput}
                />

                <FormGroup
                    fieldData={{
                        label: "password",
                        type: "password",
                        placeholder: "enter password",
                        value: ""
                    }}
                />

                <Button classList='form__button button-green' value='Log-in' />

                {!this.state.usernameIsEmpty &&
                    <Button classList='form__button button-red' value='Restore password ' />
                }
            </form>
        )
    }
}