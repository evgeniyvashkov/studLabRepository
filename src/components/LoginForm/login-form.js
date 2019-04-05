import React, { PureComponent } from 'react';

import { Input } from '../Input';
import { Button } from '../Button';

import './login-form.scss'

export class LoginForm extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }
    }

    onChangeInput = (e) => {
        const { value, name } = e.target;

        this.setState({
            [name]: value,
        })

        console.log(this.state[name])
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('Form sent');
    }

    isFormValid = () => !this.state.username || !this.state.password;

    render() {
        const { name } = this.props;
        console.log('rendered')
        return (
            <form className='form login-form' action='#' onSubmit={this.handleOnSubmit}>
                <Input
                    id={name ? name + '-username' : ''}
                    label={`${name}'s username`}
                    name={'username'}
                    type={'text'}
                    placeholder={'enter your username'}
                    // error={'invalid'}
                    onChange={this.onChangeInput}
                />

                <Input
                    label={'password'}
                    name={'password'}
                    type={'password'}
                    placeholder={'enter your password'}
                    onChange={this.onChangeInput}
                />

                <Button className={'form__button button-green'} value='Log-in' disabled={this.isFormValid()} />

                {this.state.username &&
                    <Button className={'form__button button-red'} value='Restore password' />
                }
            </form>
        )
    }
}