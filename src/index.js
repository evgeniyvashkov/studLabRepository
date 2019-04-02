import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { App } from './components/App';
import { HomePage } from './components/Home-page';
import { RegistrationPage } from './components/Registration-page';

ReactDOM.render((
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/registration' component={RegistrationPage} />
            </Switch>
        </App>
    </BrowserRouter>
), document.getElementById('root')
);
