import React from 'react';
import {Link} from 'react-router-dom'

interface SideBarProps {
    sidebar: { bgClass: string };
    changeMode: (e: React.MouseEvent) => void;
    Profile: string;
    PATHS: Array<{ path: string }>;
}

export const SideBar = ({sidebar, changeMode, Profile, PATHS}: SideBarProps) => {
    return<div className={`col-lg-2 col-sm-12 about-sidenav side-${sidebar.bgClass}`}>
    <div className="about-sidenav-main">
        <div className="personal-info w3-animate-top">
            <div className="name-dv">
                <h4>Haroon Rasheed</h4>
            </div>
            <div className="profile-dv">
                <h4><img src={Profile} alt="profile" /></h4>
            </div>
            <div className="profile-dv-txt">
                <h6>Hi, my name is Haroon Rasheed and I'm software engineer. Welcome to my personal website.</h6>
            </div>
            <div className="link-parent">
                <div>
                    {
                        [
                            {icon:"fa fa-linkedin", url: 'https://www.linkedin.com/in/haroon-rasheed-5425a0127/'},
                            {icon:"fa fa-github", url:'https://github.com/Horroon'},
                            {icon:"fa fa-twitter", url:'https://twitter.com/Horroon'},
                            {icon:"fa fa-facebook", url:'https://www.facebook.com/haroonrasheed.valient'},
                            {icon:"fa fa-stack-overflow", url:'https://stackoverflow.com/users/7694326/haroon'}
                        ].
                        map(link=><div key={link.url}><a href={link.url} target="_black"><i className={link.icon} /></a></div>)
                    }
                </div>
            </div>
        </div>
        <div className="pages-section w3-animate-left">
            <div className="pages-section-1">
                <div className="pages-section-1-1">
                    <div className="pages-items-parent">
                        {
                            [
                                {
                                    icon:"fa fa-address-book",
                                    label:'Contact',
                                    url: PATHS[4].path,
                                    name:'aboutme'
                                },{
                                    icon:"fa fa-user-circle-o",
                                    label:'Profile',
                                    url:PATHS[2].path,
                                    name:'profile'
                                },
                                {
                                    icon:"fa fa-home",
                                    label:'Go To Home',
                                    url:PATHS[0].path,
                                    name:'home'
                                },
                            ].map((icondiv)=><div key={icondiv.name}><Link to={icondiv.url}><i className={icondiv.icon} /> <span>{icondiv.label}</span></Link></div>)
                        }
                    </div>
                </div>
                <div className="pages-section-hire"><button className="btn btn-md btn-success"><a href="#whatIdo"><i  className="fa fa-paper-plane" /> <span>Hire Me</span></a></button></div>
            </div>
        </div>
        <div className="mode-section w3-animate-bottom">
            <div>
                <h6><i className="fa fa-info-circle" /> <span>Dark mode</span></h6>
                <div>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"  onClick={changeMode}></span>
                </label>
                </div>
            </div>
        </div>
    </div>
</div>
}
