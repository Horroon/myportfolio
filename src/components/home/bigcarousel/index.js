import React from 'react';
import rmvbg from '../../../assets/removebgpersonalpic (2).png'
import './style.scss';

const BigCarousel = ()=>{
    return <div className="big-carousel">
            <div className="big-carousel-div-1">
                    <div className="hm-description">
                        <p className="w3-animate-left"> 
                            <h4>Hello!</h4>
                            <h3 className="intro-tg">My name is <strong>Haroon Rasheed.</strong></h3>
                            <h3>I work on <strong>website Frontend & Backend and Mobile Applications for cross-platforms</strong>. I have fond of learning new things and like to work with fast growing technologies and intellectual teams.</h3>
                        </p>
                    </div>
                    <div className="hm-bg-dp">
                        <img src={rmvbg} className="w3-animate-zoom"/>
                    </div>
            </div>
    </div>
}

export {BigCarousel}