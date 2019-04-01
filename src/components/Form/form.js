import React from 'react';

import { FormGroup } from '../Form-group';
import { Button } from '../Button';

export const Form = (props) => {
    console.log(props);
    const userName = props.loginData.login;
    const password = props.loginData.password;
    return (
        <form action='#'>
            <FormGroup
                loginData={userName}
                onchangeInput = {props.onchangeInput}
            />
            <FormGroup
                loginData={password}
                onchangeInput = {props.onchangeInput}
            />

            <Button classList='form__submit' value='Log-in' />

        </form>
    )
}
