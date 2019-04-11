import React, { Component } from 'react';

import { FormGroup } from '../Form-group';
import { Button } from '../Button';

import './form.scss'

export class Form extends Component {
    state = {
        usernameIsEmpty: true
    }

    onchangeInput = (e) => {
        const { value } = e.target;

        this.setState(() => ({
            usernameIsEmpty: (value.length > 0) ? false : true,
        }))
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('Form sent');
    }

    render() {
        const { loginData: { login, password } } = this.props;

        return (
            <form className='form' action='#' onSubmit={this.handleOnSubmit}>
                <FormGroup
                    loginData={login}
                    onchangeInput={this.onchangeInput}
                />

                <FormGroup
                    loginData={password}
                />

                <Button classList='form__button button-green' value='Log-in' />

                {!this.state.usernameIsEmpty &&
                    <Button classList='form__button button-red' value='Restore password ' />
                }
            </form>
        )
    }
}