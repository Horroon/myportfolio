import React from 'react';

import Header from '../header/index';
import Home from '../home/index';
import MainUsersFile from '../firebase_practice/user/main'
import Footer from '../footer/index';
import Favourite from '../favourite/index';
import Profile from '../profile/index';
import Gallery from '../gallery/index';
import Contact from '../contact/index';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
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
                <Header news={"Working At MTBC Since 18 Feb, 2020"} uicomponents={[{ link: '/', text: 'Home' }, { link: '/favorite', text: 'Favorite' }, { link: '/contactme', text: 'Contact' }, { link: '/faq', text: 'FAQ' }]} />
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
                    <Route path="/contactme" exact>
                        <Contact />
                    </Route>
                </Switch>
                <Footer />
                <ToastContainer />
            </div>
        </Router>)
}
export default RouterComponent