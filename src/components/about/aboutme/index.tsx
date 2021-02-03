import React,{useEffect} from 'react';
import Profile from '../../../assets/acct.webp'
import './style.scss';
import {store} from '../../../models/index';
import {HeaderClasses} from '../../../constants/headers-classes';
import { Link } from 'react-router-dom';

export const AboutMe: React.FC = (): JSX.Element => {
    useEffect(()=>{
        store.dispatch.headerInformation.updateheaderclasses({headerclasses: HeaderClasses.removeHeader})
    },[])
    return<div className="about-main">
            <div className="about-sidenav">
                <div className="about-sidenav-main">
                    <div className="personal-info">
                        <div className="name-dv">
                            <h4>Haroon Rasheed</h4>
                        </div>
                        <div className="profile-dv">
                            <h4><img src={Profile} /></h4>
                        </div>
                        <div className="profile-dv-txt">
                            <h6>Hi, my name is Haroon Rasheed and I'm software engineer. Welcome to my personal website.</h6>
                        </div>
                        <div className="link-parent">
                            <div>
                                {
                                    [{icon:"fa fa-linkedin"},{icon:"fa fa-github"},{icon:"fa fa-twitter"},{icon:"fa fa-facebook"},{icon:"fa fa-stack-overflow"},].
                                    map(link=><div><i className={link.icon} /></div>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="pages-section">
                        <div className="pages-section-1">
                            <div className="pages-section-1-1">
                                <div className="pages-items-parent">
                                    {
                                        [
                                            {
                                                icon:"fa fa-user",
                                                label:'About me',
                                                url:'',
                                                name:'aboutme'
                                            },{
                                                icon:"fa fa-user-circle-o",
                                                label:'Profile',
                                                url:'',
                                                name:'profile'
                                            },
                                            {
                                                icon:"fa fa-home",
                                                label:'Go To Home',
                                                url:'',
                                                name:'home'
                                            },
                                        ].map((icondiv)=><div><i className={icondiv.icon} /> <span>{icondiv.label}</span></div>)
                                    }
                                </div>
                            </div>
                            <div className="pages-section-hire"><button className="btn btn-md btn-success"><i  className="fa fa-paper-plane" /> Hire Me</button></div>
                        </div>
                    </div>
                    <div className="mode-section">
                        <div>
                            <h6><i className="fa fa-info-circle" /> <span>Dark mode</span></h6>
                            <div>
                                <i className="fa fa-toggle-off" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-description-side">
                description
            </div>
    </div>
}
