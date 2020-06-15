import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import MyInfoPage from "./MyInfoPage";
import DashboardPage from "./DashboardPage";
import ContactPage from "./ContactPage";
import LoginPage from "./LoginPage";

    export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/myinfo" component={MyInfoPage} />
            <Route exact path="/login" component={LoginPage} />
        </Switch>
    </BrowserRouter>
);