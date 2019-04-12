import React, { Fragment } from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';

import '../../normalize.css';
import './app.scss';

import { PageContent } from '../PageContent';

export const App = (props) => {
    const { children, isLogged, logOut } = props;
    return (
        <Fragment>
            <Header isLogged={isLogged} logOut={logOut} />
            <PageContent>
                {children}
            </PageContent>
            <Footer />
        </Fragment>
    )
}