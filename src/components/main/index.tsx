import React from 'react';
import Header from '../header/index';
import Home from '../home/index';
import MainUsersFile from '../firebase_practice/user/main'
import Footer from '../footer/index';
const Main = () => {
    return <div style={{ background: '#151515' }}>
        <Header uicomponents={['Home', 'Services', 'Contact', 'FAQ']} />
        <Home />
        <Footer />
    </div>
}

export default Main