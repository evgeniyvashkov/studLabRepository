import React, { Fragment } from 'react';


import { RegistrationForm } from '../RegistrationForm';


import './registrationPage.scss';

export const RegistrationPage = () => {

    return (
        <Fragment>
            <h1 className="page-content__title">RegistrationPage</h1>
            <RegistrationForm />
        </Fragment>
    )
}