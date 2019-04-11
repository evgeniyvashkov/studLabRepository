import React, { Component, Fragment } from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';

import '../../normalize.css';
import './app.scss';

import { PageContent } from '../PageContent';

export class App extends Component {
    render() {
        const { children } = this.props;
        return (
            <Fragment>
                <Header />
                <PageContent>
                    {children}
                </PageContent>
                <Footer />
            </Fragment>
        )
    }
}