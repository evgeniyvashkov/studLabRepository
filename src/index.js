import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

import AppContainer from './containers/AppContainer';
import homePageContainer from './containers/homePageContainer';
import DashboardContainer from './containers/dashboardContainer'
import { TaskDetailsPageContainer } from './containers/taskDetailsPageContainer';

import { RegistrationPage } from './components/RegistrationPage';
import { LicensePage } from './components/LicensePage';
import { CreateTaskPage } from './components/CreateTaskPage';


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer>
                <Switch>
                    <Route exact path="/" component={homePageContainer} />
                    <Route path="/registration" component={RegistrationPage} />
                    <Route path="/license" component={LicensePage} />
                    <Route path="/dashboard" component={DashboardContainer} />
                    <Route path="/task-details" component={TaskDetailsPageContainer} />
                    <Route path="/create-task" component={CreateTaskPage} />
                </Switch>
            </AppContainer>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));