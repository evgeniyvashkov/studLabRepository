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
            email: '',
            userName: '',
            cardNumber: '',
            password: '',
            repeatPassword: '',
            formValid: false
        }
    }
    onChangeInput = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value,
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        this.setState({ formValid: true });
        // console.log(this.state);

        const {
            email,
            userName,
            cardNumber,
            password,
            repeatPassword,
            formValid
        } = this.state

        fetch(`${HOST}/login`, {
            headers: HEADERS,
            method: 'POST',
            body: JSON.stringify({
                email,
                cardNumber,
                userName,
                password,
                repeatPassword,
                formValid
            })
        })
            .then(res => console.log(res))
    }

    render() {
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