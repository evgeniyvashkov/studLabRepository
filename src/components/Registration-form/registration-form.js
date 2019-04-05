import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { Input } from '../Input';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

export class RegistrationForm extends PureComponent {
    onChangeInput = (e) => {
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
                <Input
                    label={"email"}
                    type={"email"}
                    placeholder={"enter your email"}
                    onChange={this.onChangeInput}
                />

                <Input
                    label={"customer's username"}
                    type={'text'}
                    placeholder={'enter your username'}
                />

                <Input
                    label={'Card number'}
                    type={'text'}
                    placeholder={'enter your username'}
                />

                <Input
                    label={'password'}
                    type={'password'}
                    placeholder={'enter password'}
                />

                <Input
                    label={'Re-enter password'}
                    type={'password'}
                    placeholder={'Re-enter password'}
                />

                <Button className='form__button button-green' value='Log-in' disabled />

                <Checkbox id={'registration-checkbox'}>
                    <Link to='/license'>{'Some text for link'}</Link>
                </Checkbox>
            </form>
        )
    }
}