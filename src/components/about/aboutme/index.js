import React,{useEffect} from 'react';
import Profile from '../../../assets/acct.webp'
import {connect} from 'react-redux';
import './style.scss';
import {store} from '../../../models/index';
import {HeaderClasses,CommonProperties} from '../../../constants';
import { Link } from 'react-router-dom';
import {SideBar} from './sidebar';

export const AboutMe = (props) => {

    const {sidebar,body} = props.aboutMe
    debugger
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
                <div className={`col-lg-10 col-sm-12 about-description-side about_body_bg-${body.bgClass}`}>
                    <div className="body-personal-info">
                        <div className="body-personal-info-desc">
                            <div className="body-personal-info-desc-bio">
                                <h2>Haroon Rasheed</h2>
                                <h4>Software Engineer</h4>
                            </div>
                            <div className="body-personal-info-desc-about">
                            <p>I'm a software engineer specialised in frontend development and also work on backend development in node.js for scalable web apps. How can I help you in your project? Checkout my services page and resume.</p> 
                            </div>
                            <div className="body-personal-info-desc-btns">
                                <div>
                                    <button className="btn btn-success btn-sm"><i className="fa fa-cog" /><span> View services</span></button>
                                    <button className="btn btn-success btn-sm"><i className="fa fa-user-circle-o" /> <span>View Resume</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="body-personal-info-profile">
                            <div className="body-personal-info-profile-img-parent">
                                <img src={Profile} />
                            </div>
                        </div>
                    </div>
                    <div className="body-personal-work">
                    <div className="body-personal-work-whatIdo">
                        <div className="body-personal-work-hdng">
                            <h4>What I do</h4>
                        </div>
                        <div className="body-personal-work-about">
                            <p>I
                                 have more than 2 and half year experience building react apps and node.js backend. I also have more than 2 years experience in Graphql and prisma. Below there is a short summary of my skills, you can find out more about that in my resume.
                            </p>
                        </div>                
                    </div>
                    <div className="body-personal-work-mytechs">
                        <div className="row">
                            {[
                                {
                                    name:"Vanilla js",
                                    desc: `Vanilla JS is a fast, lightweight, cross-platform framework
                                    for building incredible, powerful JavaScript applications.`
                                },
                                {
                                    name:"React, Angular and Vue",
                                    desc: `These are three powerful javascript framework to build single page applications. All these framework using latest features of javascript. React is getting more popularity than other due to light weight due to virtual dom. React uses one-way binding.`
                                },
                                {
                                    name:"Node.js",
                                    desc: `Javascript run time environment that is used to create apies server in javscript. Express is being widely used in nodejs. Due to this tool javascript is able to render server side rendering. That is whay now javascript is not only being in frontend but also in backend side.`
                                },
                                {
                                    name:"Github, Gitlab,buckit",
                                    desc: `Very famous tools that are being used to maintain code. Teams can collaborate each other and test.
                                    GitLab helps us collect performance metrics for both servers as well as our applications. It quickly lets us determine the impact of merging a particular branch and keep an eye on our production systems without ever leaving GitLab
                                    Circle CI is an amazing tool for continous integration and auto deployment.`
                                },
                                ].map(skill=>{
                                return<div className="col-lg-3 col-sm-1 skill-card w3-animate-bottom" >
                                <div className="card">
                                        <div><i class="fas fa-coffee" />
                                        </div>
                                       <div className="card-body">
                                           <h5 className="card-title">{skill.name}</h5>
                                           <p className="card-text">{skill.desc}</p>
                                       </div>
                                   </div>
                             </div>
                    })}
                        </div>
                    </div>
                </div>
                </div>
            </div>
    </div>
}

const mapStateToProps = (state=>state);
export default connect(mapStateToProps)(AboutMe)