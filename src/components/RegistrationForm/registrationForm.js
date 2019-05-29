import React, { PureComponent } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { HOST, HEADERS } from '../../constants'

import { Input } from '../Input';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

export class RegistrationForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: '1@1.ty',
            isEmailValid: false,

            userName: '',

            cardNumber: '',
            isCardNumberValid: false,

            password: '123123123a',
            isPasswordValid: false,

            repeatPassword: '123123123a',
            isPassMatch: '',

            isFormValid: false,
            isRegistred: false,
        }
    }

    onChangeInput = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value,
        })
    }

    checkPassword = () => {
        const { password, repeatPassword } = this.state;
        const passReg = /(?=.*\d)(?=.*[a-zA-Z])(?=.{8,})/;
        const isPasswordValid = passReg.test(password);
        const isPassMatch = (password === repeatPassword);

        return {
            isPassMatch,
            isPasswordValid
        }
    }

    checkForm = () => {
        const { isPasswordValid, isPassMatch } = this.checkPassword();
        const isFormValid = this.checkPassword();

        // console.log(this.checkPassword(), 'checkform')
        // this.setState({
        //     isFormValid: isFormValid && isPasswordValid && isPassMatch
        // })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();

        const { email, userName, cardNumber, password } = this.state

        fetch(`${HOST}/login`, {
            headers: HEADERS,
            method: 'POST',
            body: JSON.stringify({ email, cardNumber, userName, password })
        })
            .then(response => response.json())
            .then(({ success, message }) => {
                this.setState({
                    isRegistred: success
                })
            });
    }

    render() {
        console.log('state', this.state)
        if (this.state.isRegistred) {
            return (
                <Redirect to='/dashboard' />
            )
        }

        return (
            <form action="#"
                method="POST"
                className="form registration-form"
                onSubmit={this.handleOnSubmit}
            >
                <Input
                    label="email"
                    type="email"
                    placeholder="enter your email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeInput}
                    // error={}
                />
                <Input
                    label="customer's username"
                    type="text"
                    placeholder="enter your username"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.onChangeInput}
                />
                <Input
                    label="Card number"
                    type="text"
                    placeholder="enter your username"
                    name="cardNumber"
                    value={this.state.cardNumber}
                    onChange={this.onChangeInput}
                />
                <Input
                    label="password"
                    type="password"
                    placeholder="enter password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangeInput}
                />
                <Input
                    label="Re-enter password"
                    type="password"
                    placeholder="Re-enter password"
                    name="repeatPassword"
                    value={this.state.repeatPassword}
                    onChange={this.onChangeInput}
                />
                <Button className="form__button button-green" value="Log-in" />
                <Checkbox id="registration-checkbox">
                    <Link to="/license">Some text for link</Link>
                </Checkbox>
            </form>
        )
    }
}