import React from 'react';

import Header from '../header/index';
import Home from '../home/index';
import MainUsersFile from '../firebase_practice/user/main'
import Footer from '../footer/index';
import Favourite from '../favourite/index';
import Profile from '../profile/index';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const RouterComponent = () => {
    return (
        <Router>
            <div style={{ background: '#151515' }}>
                <Header news={"I have been working at MTBC since 18 Feb, 2020"} uicomponents={['Home', 'Services', 'Contact', 'FAQ']} />
                <Switch>
                    <Route path="/" exact >
                        <Home />
                    </Route>
                    <Route path="/favorite" exact>
                        <Favourite />
                    </Route>
                    <Route path="/myprofile" exact>
                        <Profile />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>)
}
export default RouterComponent