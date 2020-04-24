import React from 'react';
import Header from '../header/index';
import Home from '../home/index';
import MainUsersFile from '../firebase_practice/user/main'
import Footer from '../footer/index';
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
                <Header news={"I've been working at MTBC since 18 Feb, 2020"} uicomponents={['Home', 'Services', 'Contact', 'FAQ']} />
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>)
}
export default RouterComponent