import React, { Fragment } from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';

import '../../normalize.css';
import './app.scss';

import { PageContent } from '../PageContent';


export const App = (props) => {
    const { children, isLogged, logOut, userInfo } = props;
    return (
        <Fragment>
            <Header isLogged={isLogged}
                logOut={logOut}
                userInfo={userInfo}/>
            <PageContent>
                {children}
            </PageContent>
            <Footer />
        </Fragment>
    )
}