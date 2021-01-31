import React,{useEffect} from 'react';
import {store} from '../../models/index';
import { HeaderClasses } from '../../constants/headers-classes';
import {handleHeaderWithScroll} from '../../utilities-methods';
import serviceslogo from '../../assets/picture-dgtl-pc-removebg-preview.png';
import webdev from '../../assets/web-dev.jpg';
import mobileapp from '../../assets/mobile-app.jpg';
import serverdev from '../../assets/server-dev.jpg';
import bugpic from '../../assets/bug-pic.jpg';
import './style.scss';

const Services = ()=>{
    
    const keepEyeOnScroll = ()=> handleHeaderWithScroll(store)
    useEffect(()=>{
        keepEyeOnScroll(store)
        window.addEventListener('scroll',keepEyeOnScroll)
       return ()=>window.removeEventListener('scroll', keepEyeOnScroll)
    },[])

    return <div className="services-container">
        <div className="service-logo-main">
            <div className="img-detail-tg">
                <p className="w3-animate-top">
                    <h2>
                        <img src={serviceslogo} />
                    </h2>
                    <h4>My objective in life is to serve the humanity and help the folks to pick them from the mud and bring them into new era of life by providing IT services in form of software applications</h4>
                </p>
            </div>
        </div>
        <div>
            <div className="service-hd-tg w3-animate-left">
                <h4>Services</h4>
            </div>
            <div className="services-tg">
                <div className="row">
                    {
                        [{
                            title:"Website development", 
                            desc:"I provide single page web applications in react, angularjs or vue. But prefer to work with react.",
                            img:webdev,
                        },{
                            title:"Cross-plateform mobile apps", 
                            desc:"Mobile application in react native(expo, cli) etc. Also work to improve any existing app in react native.",
                            img:mobileapp,
                            },
                            {
                                title:"Backend Services(Nodejs,Graphql,Prisma)", 
                                desc:"I like to build backend in nodejs. Rest and Graphql apies with node and graphql-yoga or apollo server with prisma client. I like Graphql backend more than rest.",
                                img:serverdev,
                            },
                            {
                                title:"Bugs resolving", 
                                desc:"I like to resolve bug or add any improvement into any existing project.",
                                img:bugpic,
                            }].map(item=><div className="col-lg-4 col-sm-1 w3-animate-bottom" >
                         <div className="card">
                                <img 
                                   className="card-img-top" 
                                   src={item.img} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.desc}</p>
                                </div>
                            </div>
                      </div>)
                    }
                </div>
            </div>
        </div>
    </div>
}

export {Services}