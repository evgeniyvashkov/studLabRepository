import React, { PureComponent } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Input } from '../Input';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

export class RegistrationForm extends PureComponent {
    state = {
        email: '',
        userName: '',
        cardNumber: '',
        password: '',
        repeatPassword: '',
        formValid: false
    }

    onChangeInput = (e) => {
        const { value, name } = e.target;

        this.setState({
            [name]: value,
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('Form sent');
       this.setState({formValid: true})
    }

    render() {
        if (this.state.formValid) {
            return (<Redirect to="/homePage" />)
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