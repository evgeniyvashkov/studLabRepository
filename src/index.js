import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

import AppContainer from './containers/AppContainer';
import { HomePage } from './components/HomePage';
import { RegistrationPage } from './components/RegistrationPage';
import { LicensePage } from './components/LicensePage';
import DashboardContainer from './containers/dashboardContainer'

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/registration" component={RegistrationPage} />
                    <Route path="/license" component={LicensePage} />
                    <Route path="/dashboard" component={DashboardContainer} />
                </Switch>
            </AppContainer>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));