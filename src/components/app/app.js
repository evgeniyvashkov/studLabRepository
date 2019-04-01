import React, { Component, Fragment } from 'react';

import { Header } from '../Header';
import { PageContent } from '../Page-content';
import { Footer } from '../Footer';
import { plans } from '../../infrostructure/tarif-pans';
import { loginData } from '../../infrostructure/login-form';

import '../../normalize.css';
import './app.css';

export class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <PageContent plans={plans} loginData={loginData} />
                <Footer />
            </Fragment>
        )
    }
}