import React, { Fragment } from 'react';


import { RegistrationForm } from '../Registration-form';


import './registration-page.css';

export const RegistrationPage = () => {

    return (
        <Fragment>
            <h2 className='title'>RegistrationPage</h2>
            <RegistrationForm />
        </Fragment>
    )
}