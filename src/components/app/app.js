import React, { Component } from 'react';

import Header from '../header';
import PageContent from '../page-content';
import Footer from '../footer';

import '../../normalize.css';
import './app.css';

export default class App extends Component {
    render() {
        return (
            <div className='app-content'>
                <Header />
                <PageContent />
                <Footer />
            </div>
        )
    }
} 