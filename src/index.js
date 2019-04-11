import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { App } from './components/App';
import { HomePage } from './components/HomePage';
import { RegistrationPage } from './components/RegistrationPage';
import { LicensePage } from './components/LicensePage';

ReactDOM.render((
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/registration' component={RegistrationPage} />
                <Route path='/license' component={LicensePage} />
            </Switch>
        </App>
    </BrowserRouter>
), document.getElementById('root')
);
