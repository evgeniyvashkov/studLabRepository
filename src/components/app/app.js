import React, { Component, Fragment } from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';

import '../../normalize.css';
import './app.css';

import { PageContent } from '../Page-content';

export class App extends Component {
    render() {
        const { children } = this.props;
        return (
            <Fragment>
                <Header />
                <PageContent children={children} />
                <Footer />
            </Fragment>
        )
    }
}