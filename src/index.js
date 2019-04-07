import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

import { App } from './components/App';
import { HomePage } from './components/Home-page';
import { RegistrationPage } from './components/Registration-page';
import { LicensePage } from './components/LicensePage';

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/registration' component={RegistrationPage} />
                    <Route path='/license' component={LicensePage} />
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
