import React,{useEffect} from 'react';
import Profile from '../../../assets/acct.webp'
import {connect} from 'react-redux';
import './style.scss';
import {store} from '../../../models/index';
import {HeaderClasses,CommonProperties} from '../../../constants';
import { Link } from 'react-router-dom';
import {SideBar} from './sidebar';
import {AboutBody} from './body';

export const AboutMe = (props) => {

    const {sidebar,body} = props.aboutMe
    const changeMode = (e)=>{
        e.stopPropagation();
        const nextMode = sidebar.bgClass == CommonProperties.modes.dark ? CommonProperties.modes.white : CommonProperties.modes.dark
        store.dispatch.aboutMe.updateAboutMe({ sidebar: {...sidebar, bgClass: nextMode}, body:{...body, bgClass: nextMode}})
    }
    useEffect(()=>{
        store.dispatch.headerInformation.updateheaderclasses({headerclasses: HeaderClasses.removeHeader})
    },[])

    return<div className="about-main">
            <div className="row">
                <SideBar Profile={Profile} changeMode={changeMode} sidebar={sidebar} />
                <AboutBody body={body} Profile={Profile} />
            </div>
    </div>
}

const mapStateToProps = (state=>state);
export default connect(mapStateToProps)(AboutMe)