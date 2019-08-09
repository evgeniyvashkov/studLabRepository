import React, { PureComponent } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { HOST, HEADERS } from '../../constants';

import { Input } from '../Input';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

export class RegistrationForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            hasEmailError: false,

            userName: '',
            hasUserNameError: false,

            cardNumber: '',
            hasCardNumberError: false,

            password: '',
            hasPasswordError: false,

            repeatPassword: '',
            hasRepeatPasswordError: '',

            isLicenseChecked: false,

            isFormValid: false,
            isRegistred: false,

            errors: {
                userName: 'can\'t be empty',
                email: 'must be a-zA-z 0-9',
                password: 'must contain at least 1 and letter 1 number',
                repeatPassword: 'passwords must be the same',
                cardNumber: 'Must have 16 numbers'
            }
        }
    }

    onChangeInput = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value, })
    }

    onBlurInput = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value, }, this.check(name));
    }

    checkEmail(email) {
        const emailRegexp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/
        const hasEmailError = !emailRegexp.test(email);
        this.setState({ hasEmailError })
    }

    checkUserName = () => {
        const hasUserNameError = !this.state.userName
        this.setState({ hasUserNameError });
    }

    checkPassword = () => {
        const passRegExp = /(?=.*\d)(?=.*[a-zA-Z])(?=.{8,})/;
        const hasPasswordError = !passRegExp.test(this.state.password);
        this.setState({ hasPasswordError });
    }

    checkCardNumber() {
        const hasCardNumberError = !(this.state.cardNumber.length === 16)
        this.setState({ hasCardNumberError })
    }

    checkRepeatPassword() {
        const hasRepeatPasswordError = !(this.state.repeatPassword === this.state.password)
        this.setState({ hasRepeatPasswordError })
    }

    checkLicense = () => {
        this.setState((prevState) => {
            return { isLicenseChecked: !prevState.isLicenseChecked }
        })
    }

    check(field) {
        switch (field) {
            case 'password': this.checkPassword();
                break;
            case 'userName': this.checkUserName();
                break;
            case 'cardNumber': this.checkCardNumber();
                break;
            case 'email': this.checkEmail(this.state.email);
                break;
            case 'repeatPassword': this.checkRepeatPassword();
                break;
            case 'license': this.checkLicense();
                break;
            default:
                break;
        }
    }

    //todo: refactor without async
    checkForm = async () => {
        const {
            hasEmailError, hasCardNumberError, hasUserNameError,
            hasPasswordError, hasRepeatPasswordError, isLicenseChecked
        } = this.state;
        const isFormValid = !(hasEmailError
            && hasCardNumberError
            && hasUserNameError
            && hasPasswordError
            && hasRepeatPasswordError
            && !isLicenseChecked);

        this.setState({ isFormValid })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.checkForm()
            .then(() => this.sendForm());
    }

    sendForm() {
        const { email, userName, cardNumber, password } = this.state

        fetch(`${HOST}/login`, {
            headers: HEADERS,
            method: 'POST',
            body: JSON.stringify({ email, cardNumber, userName, password })
        })
            .then(response => response.json())
            .then(({ success, message, token }) => {
                this.setState({
                    isRegistred: success
                })

                localStorage.setItem('token' , token);
            });
    }

    render() {
        if (this.state.isRegistred) {
            return (
                <Redirect to='/dashboard' />
            )
        }

        const { email, userName, cardNumber, password, repeatPassword,
            hasEmailError, hasUserNameError, hasPasswordError, hasRepeatPasswordError, hasCardNumberError,
            errors } = this.state;

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
                    value={email}
                    onChange={this.onChangeInput}
                    onBlur={this.onBlurInput}
                    error={hasEmailError && errors.email}
                />
                <Input
                    label="customer's username"
                    type="text"
                    placeholder="enter your username"
                    name="userName"
                    value={userName}
                    onChange={this.onChangeInput}
                    onBlur={this.onBlurInput}
                    error={hasUserNameError && errors.userName}
                />
                <Input
                    label="Card number"
                    type="text"
                    placeholder="enter your username"
                    name="cardNumber"
                    value={cardNumber}
                    onChange={this.onChangeInput}
                    onBlur={this.onBlurInput}
                    error={hasCardNumberError && errors.cardNumber}
                />
                <Input
                    label="password"
                    type="password"
                    placeholder="enter password"
                    name="password"
                    value={password}
                    onChange={this.onChangeInput}
                    onBlur={this.onBlurInput}
                    error={hasPasswordError && errors.password}
                />
                <Input
                    label="Re-enter password"
                    type="password"
                    placeholder="Re-enter password"
                    name="repeatPassword"
                    value={repeatPassword}
                    onChange={this.onChangeInput}
                    onBlur={this.onBlurInput}
                    error={hasRepeatPasswordError && errors.repeatPassword}
                />
                <Checkbox
                    id="registration-checkbox"
                    onClick={this.checkLicense}>
                    <Link to="/license">Some text for link</Link>
                </Checkbox>

                <Button className="form__button button-green" value="Log-in" />
            </form>
        )
    }
}