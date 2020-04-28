import React from 'react';

import Header from '../header/index';
import Home from '../home/index';
import MainUsersFile from '../firebase_practice/user/main'
import Footer from '../footer/index';
import Favourite from '../favourite/index';
import Profile from '../profile/index';
import Gallery from '../gallery/index';

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
                <Header news={"Working At MTBC Since 18 Feb, 2020"} uicomponents={[{ link: '/', text: 'Home' }, { link: '/favorite', text: 'Favorite' }, { link: '/contact', text: 'Contact' }, { link: '/faq', text: 'FAQ' }]} />
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
                    <Route path="/gallery" exact>
                        <Gallery />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>)
}
export default RouterComponent